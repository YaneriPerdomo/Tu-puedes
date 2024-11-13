<?php

namespace Php;

require_once realpath(__DIR__ . '/Kernel.php');

use DateTime;
use PDO;
use Mpdf\Mpdf;
use Php\ConexionBD;

$admin = new Admin();

if (isset($_POST['call'])) {
    switch ($_POST['call']) {
        case 1:
            $admin->agregar();
            break;
        case 2:
            $admin->modificar();
            break;
        case 3:
            $admin->eliminar();
            break;
    }
}
            

class Admin {
    public ConexionBD $db_handler;
    
    public function __construct() {
        $this->db_handler = new ConexionBD();
    }

    public function check_role_id(int $role_id) {
        // if there is not an active session then we start it
        if (session_status() !== PHP_SESSION_ACTIVE) session_start();
        
        // if user role is not representative / child manager then we cut it of
        if ($role_id !== 1) {
            session_unset();
            session_destroy();
            session_abort();
            http_response_code(301);
            header("Location: {$_SERVER['REQUEST_URI']}");
            exit();
        }
    }

    public function listar()
    {
        $db = $this->db_handler->abrirConexion();
        $idProfesional = $_SESSION['id'];
        $query = "SELECT usuarios.*, generos.genero, ninos.id_profesional, ninos.fecha_nacimiento FROM usuarios 
                    INNER JOIN generos
                    INNER JOIN ninos 
                    ON ninos.id_usuario = usuarios.id_usuario
                    AND generos.id_genero = ninos.id_genero
                    AND ninos.id_profesional = :idProfesional";
        $llamado = $db->prepare($query);
        $llamado->bindParam(':idProfesional', $idProfesional);
        $llamado->execute();
    
        $data = $llamado->fetchAll(PDO::FETCH_ASSOC);
    
        if ($data != NULL) {
            foreach ($data as $key => $value) {
                // default user status is active
                $estado = "Activo";
                
                // if user status is 0 then it is inactive
                if ($value['permisos'] === 0) {
                    $estado = "Inactivo";
                }

                // calculate age
                $fechaNacimiento = new DateTime($value['fecha_nacimiento']);
                $fechaActual = new DateTime("today");
                $edad = $fechaNacimiento->diff($fechaActual)->y;

                // calculate expiration date
                $fechaCaducidad = date('Y-m-d H:i:s', strtotime(date($value['fecha_validez']), strtotime($value['fecha_creacion'])));
    
                $tabla = "
                    <tr class='show'>
                        <th scope='row" . $value['id_usuario'] . "'>" . $value['id_usuario'] . "</th>
                        <td class = 'userJugador'> " . $value['usuario'] . "</td>
                        <td>" . $value['genero'] . "</td>
                        <td>" . $edad . "</td>
                        <td>" . $value['fecha_creacion'] . "</td>
                        <td>" . $fechaCaducidad . "</td>
                        <td>" . $estado . "</td>
                        <td>
                            <a 
                                href='./child/progress.php?id={$value['id_usuario']}' 
                                class='text-decoration-none'
                            >
                                <i class='bi bi-person-lines-fill' style='padding: 0.5rem;'></i> 
                            </a>
                            <a href='./child/modify.php?id={$value['id_usuario']}'>editar</a>
                            <button 
                                type='button' 
                                class='btn' 
                                data-bs-toggle='modal' 
                                data-bs-target='#confirmar'
                            >
                                <i class='bi bi-trash'></i>
                            </button>
                            <div class='modal fade' id='confirmar' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                                <div class='modal-dialog'>
                                    <div class='modal-content'>
                                        <div class='modal-header'>
                                            <div class='text-center w-100'>
                                                <h1 class='modal-title fs-5 fw-bold ' id='exampleModalLabel'>¿Estás seguro?</h1>
                                            </div>
                                        </div>
                                        <div class='modal-body'>
                                            <p>Usando esta opción puedes eliminar completamente la cuenta del usuario. <span class='text-danger'>Al eliminar su cuenta, ya no tendrá acceso al aprendizaje de Tu puedes.</span></p>
                                        </div>
                                        <div class='modal-footer'>
                                            <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>No</button>
                                            <form action='../../../php/Admin.php' method='POST'>
                                                <input type='hidden' name='call' value='3' />
                                                <input type='hidden' name='id' value='" . $value['id_usuario'] . "' />
                                                <button type='submit' class='btn btn-danger'>Si</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                ";
    
                echo $tabla;
            }
        } else {
            // not found childs
            $tabla = "<tr>No se encuentra ningun usuario</tr>";

            // print table
            echo $tabla;
        }
    }

    public function generatePDF()
    {
        // getting db connection
        $db = $this->db_handler->abrirConexion();

        // childs info query
        $childs_query = "SELECT 
                            usuarios.*,
                            ninos.id_profesional, 
                            ninos.fecha_nacimiento, 
                            ninos.id_genero,
                            ninos.id_pais,
                            ninos.sabe_leer,
                            ninos.nombre,
                            ninos.apellido,
                            lecciones_completadas.id_usuario,
                            etapas.id_etapa,
                            secciones.id_seccion,
                            COUNT(lecciones_completadas.id_leccion) AS total_lessons,
                            SUM(lecciones_completadas.porcentaje) AS progress,
                            SUM(lecciones_completadas.estrellas) AS stars 
                        FROM usuarios
                        INNER JOIN ninos
                            ON ninos.id_usuario = usuarios.id_usuario
                        INNER JOIN lecciones_completadas
                            ON lecciones_completadas.id_usuario = usuarios.id_usuario 
                        INNER JOIN lecciones
                            ON lecciones.id_leccion = lecciones_completadas.id_leccion
                        INNER JOIN secciones
                            ON lecciones.id_seccion = secciones.id_seccion
                        INNER JOIN etapas
                            ON secciones.id_etapa = etapas.id_etapa
                        WHERE ninos.id_profesional = :profesional_id
                        GROUP BY lecciones_completadas.id_usuario, secciones.id_seccion, etapas.id_etapa";
        $childs_stmt = $db->prepare($childs_query);
        $childs_stmt->bindParam(':profesional_id', $_SESSION['id']);
        $childs_stmt->execute();

        $data = $childs_stmt->fetchAll(PDO::FETCH_ASSOC);
    
        $tabla = "";

        if (!$data) {
            // not found childs
            header("Location: ./panel.php?error=No se encontraron registros");
        }

        // setting stages hash map
        $players_stages = [];
        $stages = [];
        $users_map = [];

        foreach ($data as $child_data) {
            // getting player type
            $player_type = $child_data['id_etapa'];

            // if player type stages are not fetched yet then we fetch it
            if (!isset($players_stages[$player_type])) {
                $player_instance = new PlayerType($player_type);
                $players_stages[$player_type] = $player_instance->getPlayerStages();
            }

            if (!isset($stages[$player_type])) {
                foreach ($players_stages[$player_type] as $key => $stage) {
                    $stages[$player_type][$key]['id'] = $stage;
                    $stages[$player_type][$key]['total_lessons'] = (new Stage($stage, $child_data['id_usuario']))->getStageLessons();
                }
            }

            // getting stage total lessons from hash map
            $stage_total_lessons = $stages[$player_type]['stage_1']['total_lessons'] + $stages[$player_type]['stage_2']['total_lessons'];

            $cumulative_progress = 0;

            if ($child_data['total_lessons'] > 0) {
                // calculate progress
                $cumulative_progress = number_format(($child_data['progress'] ?? 0) / $stage_total_lessons, 2);
            }

            if (!isset($users_map[$child_data['id_usuario']])) {
                // default user status is active
                $estado = "Activo";
                
                // if user status is 0 then it is inactive
                if ($child_data['permisos'] === 0) {
                    $estado = "Inactivo";
                }

                // calculate age
                $fechaNacimiento = new DateTime($child_data['fecha_nacimiento']);
                $fechaActual = new DateTime("today");
                $edad = $fechaNacimiento->diff($fechaActual)->y;

                $users_map[$child_data['id_usuario']]['name'] = $child_data['nombre'];
                $users_map[$child_data['id_usuario']]['lastname'] = $child_data['apellido'];
                $users_map[$child_data['id_usuario']]['age'] = $edad;
                $users_map[$child_data['id_usuario']]['status'] = $estado;
                $users_map[$child_data['id_usuario']]['progress'] = $cumulative_progress;
                continue;
            }

            $users_map[$child_data['id_usuario']]['progress'] += $cumulative_progress;
        }
        
        foreach ($users_map as $child_data) {
            $empty_progress = 100 - $child_data['progress'];
            $tabla .= "
                <tr class='show'>
                    <td>{$child_data['name']}</td>
                    <td>{$child_data['lastname']}</td>
                    <td>{$child_data['age']}</td>
                    <td>{$child_data['status']}</td>
                    <td style='width: 200px'>
                        <table class='progress-bar-outer'>
                            <tr>
                                <td width='{$child_data['progress']}%' class='progress-bar-inner'></td>
                                <td width='{$empty_progress}%'></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            ";
        }

        // pdf builder instance
        $mpdf = new Mpdf([
            'orientation' => 'L',
            'format' => 'Letter',
            'tempDir' => realpath(__DIR__ . '/../tmp'),
        ]);

        $date = date('Y-m-d');
        $mpdf->WriteHTML("
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                tr:nth-child(even) {
                    background-color: #FFA84B;
                }
                th, td {
                    padding: 8px;
                    text-align: left;
                }
                /* Estilos para la barra de progreso */
                .progress-bar-outer {
                    width: 100%;
                    height: 10px;
                    background-color: #f3f3f3 !important;
                    border: 0.5px solid #444 !important;
                }
                .progress-bar-inner {
                    height: 10px;
                    background-color: cornflowerblue;
                }
            </style>
            <div style='font-family: sans-serif; position: relative; width: 100%; height: 100%;'>
                <div style='width: 100%; text-align: right;'>$date</div>
                <div style='width: 200px; margin: 0 auto 20px auto;'><img style='width: auto;' src='../../../img/logos/logo-orange.png'/></div>
                <table style='font-family: sans-serif; width: 100%; color: #2A2A2A; padding: 10px;'>
                    <tr>
                        <th style='text-align: left'>Nombre</th>
                        <th style='text-align: left'>Apellido</th>
                        <th style='text-align: left'>Edad</th>
                        <th style='text-align: left'>Estado</th>
                        <th style='text-align: left'>Progreso</th>
                    </tr>
                    $tabla
                </table>
            </div>
        ");

        return $mpdf->Output();
    }

    public function get_child(int $child_id): mixed {
        // init db connection
        $db = $this->db_handler->abrirConexion();

        // getting child data by id
        $child_query = "SELECT 
                            usuarios.*, 
                            generos.genero, 
                            ninos.id_profesional, 
                            ninos.fecha_nacimiento, 
                            ninos.id_genero,
                            ninos.id_pais,
                            ninos.sabe_leer,
                            ninos.nombre,
                            ninos.apellido
                        FROM usuarios
                        INNER JOIN ninos
                            ON ninos.id_usuario = usuarios.id_usuario
                        INNER JOIN generos
                            ON generos.id_genero = ninos.id_genero
                        WHERE ninos.id_usuario = :child_id
                        AND ninos.id_profesional = :profesional_id";
        $child_stmt = $db->prepare($child_query);
        $child_stmt->bindParam(':child_id', $child_id);
        $child_stmt->bindParam(':profesional_id', $_SESSION['id']);
        $child_stmt->execute();

        $child_data = $child_stmt->fetch(PDO::FETCH_ASSOC);

        return $child_data;
    }
    
    public function agregar()
    {
        session_start();

        $idProfesional = $_SESSION['id'];
        $db = $this->db_handler->abrirConexion();
    
        $genero = $_POST['gender'] ?? 1;

        $check_username_query = "SELECT usuario FROM usuarios WHERE usuario = :username";
        $check_username_stmt = $db->prepare($check_username_query);
        $check_username_stmt->bindParam(':username', $_POST['usuario']);
        $check_username_stmt->execute();
        $check_username_row = $check_username_stmt->fetch(PDO::FETCH_ASSOC);
        if ($check_username_row) {
            http_response_code(301);
            header("location:/view/admin/professional/child/add.php?error=El usuario {$_POST['usuario']} ya existe");
            exit();
        }
    
        $usuario = $_POST['usuario'];
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $pais = $_POST['paises'];
        $fechaNacimiento = $_POST['fechaNacimiento'];
        $fechaCreacion = date("Y-m-d");
        $fechaValidez = $_POST['fechaValidez'];
        $contrasena = $_POST['contrasena'];
        $rol = 3;
    
        if (isset($_POST['permisos'])) {
            $insert_user_query = "INSERT INTO usuarios(id_rol, usuario, clave, estado, permisos, fecha_creacion, fecha_validez) VALUES (:idRol, :usuario, :contrasena, b'1', b'1', :fechaCreacion, :fechaValidez);";
        } else {
            $insert_user_query = "INSERT INTO usuarios(id_rol, usuario, clave, estado, permisos, fecha_creacion, fecha_validez) VALUES (:idRol, :usuario, :contrasena, b'1', b'0', :fechaCreacion, :fechaValidez);";
        }
    
        $insert_user_stmt = $db->prepare($insert_user_query);
        $insert_user_stmt->bindParam(':idRol', $rol);
        $insert_user_stmt->bindParam(':usuario', $usuario);
        $insert_user_stmt->bindParam(':contrasena', $contrasena);
        $insert_user_stmt->bindParam(':fechaCreacion', $fechaCreacion);
        $insert_user_stmt->bindParam(':fechaValidez', $fechaValidez);
        $insert_user_stmt->execute();
    
        $user_id_query = "SELECT MAX(id_usuario) AS IDs FROM usuarios";
        $user_id_stmt = $db->prepare($user_id_query);
        $user_id_stmt->execute();
        $data = $user_id_stmt->fetch(PDO::FETCH_ASSOC);
    
        $idUsuario = $data['IDs'];
    
        if (isset($_POST['lectura'])) {
            $child_insert_query = "INSERT INTO ninos(nombre, apellido, id_genero, id_usuario, id_pais, id_profesional, fecha_nacimiento, sabe_leer) VALUES (:nombre, :apellido, :idGenero, :idUsuario, :idPais, :idProfesional, :fechaNacimiento, b'1');";
        } else {
            $child_insert_query = "INSERT INTO ninos(nombre, apellido, id_genero, id_usuario, id_pais, id_profesional, fecha_nacimiento, sabe_leer) VALUES (:nombre, :apellido, :idGenero, :idUsuario, :idPais, :idProfesional, :fechaNacimiento, b'0');";
        }
    
        $child_insert_stmt = $db->prepare($child_insert_query);
        $child_insert_stmt->bindParam(':nombre', $nombre);
        $child_insert_stmt->bindParam(':apellido', $apellido);
        $child_insert_stmt->bindParam(':idGenero', $genero);
        $child_insert_stmt->bindParam(':idUsuario', $idUsuario);
        $child_insert_stmt->bindParam(':idPais', $pais);
        $child_insert_stmt->bindParam(':idProfesional', $idProfesional);
        $child_insert_stmt->bindParam(':fechaNacimiento', $fechaNacimiento);
        $child_insert_stmt->execute();
    
        header("location:/view/admin/professional/panel.php");
    }
    
    public function modificar()
    {
        session_start();
        $idProfesional = $_SESSION['id'];
        $db = $this->db_handler->abrirConexion();
        
        $genero = $_POST['gender'];
        $idUsuario = $_POST['id'];
        $usuario = $_POST['usuario'];
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $pais = $_POST['paises'];
        $fechaNacimiento = $_POST['fechaNacimiento'];
        $fechaValidez = $_POST['fechaValidez'];
        $contrasena = $_POST['contrasena'];
        $permisos = (bool) $_POST['permisos'];
        $old_password = '';

        $check_username_availability_query = "SELECT id_usuario, usuario, clave FROM usuarios WHERE usuario = :username";
        $check_username_availability_stmt = $db->prepare($check_username_availability_query);
        $check_username_availability_stmt->bindParam("username", $usuario);
        $check_username_availability_stmt->execute();

        $fetched_user = $check_username_availability_stmt->fetch(PDO::FETCH_ASSOC);

        // check if username is owned by another user
        if (!empty($fetched_user) && ((int) $fetched_user['id_usuario']) !== ((int) $idUsuario)) {
            http_response_code(301);
            header("location: ../view/admin/professional/child/modify.php?id={$idUsuario}&error=El nombre de usuario {$usuario} ya está ocupado");
            exit();
        }

        // check if username stills the same
        if ($fetched_user) {
            $old_password = $fetched_user['clave'];
        }

        // check if password was provided since username is available
        if (empty($contrasena)) {
            $query = "UPDATE usuarios SET usuario = :usuario, permisos = " . ($permisos ? "b'1'" : "b'0'") . ", fecha_validez = :fechaValidez WHERE id_usuario = :idUsuario";
            $user_stmt = $db->prepare($query);
            $user_stmt->bindParam(':usuario', $usuario);
            $user_stmt->bindParam(':fechaValidez', $fechaValidez);
            $user_stmt->bindParam(':idUsuario', $idUsuario);
            $user_stmt->execute();
        } else {
            if ($contrasena === $old_password) {
                http_response_code(301);
                header("location: /view/admin/professional/child/modify.php?id={$idUsuario}&error=La contraseña no puede ser igual a la anterior");
                exit();
            }
            $query = "UPDATE usuarios SET usuario = :usuario, clave = :contrasena, permisos = " . ($permisos ? "b'1'" : "b'0'") . ", fecha_validez = :fechaValidez WHERE id_usuario = :idUsuario";
            $user_stmt = $db->prepare($query);
            $user_stmt->bindParam(':usuario', $usuario);
            $user_stmt->bindParam(':contrasena', $contrasena);
            $user_stmt->bindParam(':fechaValidez', $fechaValidez);
            $user_stmt->bindParam(':idUsuario', $idUsuario);
            $user_stmt->execute();
        }
    
    
        if (isset($_POST['lectura'])) {
            $query = "UPDATE ninos SET nombre = :nombre, apellido = :apellido, id_genero = :idGenero, id_pais = :idPais, fecha_nacimiento = :fechaNacimiento, sabe_leer = b'1' WHERE id_profesional = :idProfesional AND id_usuario = :user_id;";
        } else {
            $query = "UPDATE ninos SET nombre = :nombre, apellido = :apellido, id_genero = :idGenero, id_pais = :idPais, fecha_nacimiento = :fechaNacimiento, sabe_leer = b'0' WHERE id_profesional = :idProfesional AND id_usuario = :user_id;";
        }
    
        $child_stmt = $db->prepare($query);
        $child_stmt->bindParam(':nombre', $nombre);
        $child_stmt->bindParam(':apellido', $apellido);
        $child_stmt->bindParam(':idGenero', $genero);
        $child_stmt->bindParam(':idPais', $pais);
        $child_stmt->bindParam(':fechaNacimiento', $fechaNacimiento);
        $child_stmt->bindParam(':idProfesional', $idProfesional);
        $child_stmt->bindParam(':user_id', $idUsuario);
        $child_stmt->execute();
    
        header("location:/view/admin/professional/panel.php");
    }

    public function eliminar()
    {
        // open connection
        $db = $this->db_handler->abrirConexion();
    
        // get id
        $id = $_POST['id'];
    
        // TODO: apply soft delete for users table
        $query = "DELETE FROM ninos WHERE id_usuario = :id";
        $llamado = $db->prepare($query);
        $llamado->bindParam(':id', $id);
        $llamado->execute();
    
        $query = "DELETE FROM usuarios WHERE id_usuario = :id";
        $llamado = $db->prepare($query);
        $llamado->bindParam(':id', $id);
        $llamado->execute();
    
        header("location:../view/admin/professional/panel.php");
    }
}