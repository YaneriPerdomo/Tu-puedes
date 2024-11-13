<?php

namespace Php;
require_once realpath(__DIR__ . '/Kernel.php');

use PDO;
use Php\ConexionBD;

$db_handler = new ConexionBD();
$db = $db_handler->abrirConexion();

$usuario = $_POST['usuario_inicio'];
$contrasena = $_POST['contrasena_inicio'];
$contrasenaVal = $_POST['contrasena_inicio_confirmar'];

// check if the password is confirmed (maybe an innecesary step)
if ($contrasena === $contrasenaVal) {

    $user_query = "SELECT * FROM usuarios WHERE usuario = :usuario AND clave = :contrasena";
    $user_stmt = $db->prepare($user_query);
    $user_stmt->bindParam(':usuario', $usuario);
    $user_stmt->bindParam(':contrasena', $contrasena);
    $user_stmt->execute();

    $user_data = $user_stmt->fetch(PDO::FETCH_ASSOC);

    if ($usuario === $user_data['usuario'] && $contrasena === $user_data['clave']) {
        // depending on rol id
        switch ($user_data['id_rol']) {
            // PROFESSIONAL
            case 1:
                // prepare profesional query
                $professional_query = "SELECT * FROM profesionales WHERE id_usuario = :user_id";
                $professional_stmt = $db->prepare($professional_query);
                $professional_stmt->bindParam(':user_id', $user_data['id_usuario']);
                $professional_stmt->execute();
                $professional_data = $professional_stmt->fetch(PDO::FETCH_ASSOC);

                if (!isset($professional_data['id_profesional'])) {
                    http_response_code(400);
                    header("location: ../view/signin/log_in.php?error=Hubo un problema al cargar el perfil, contacta al administrador.");
                    break;
                }
                
                // start session global variable
                session_start();

                // set session variables
                $_SESSION['idUsuario'] = $user_data['id_usuario']  ?? null;
                $_SESSION['usuario'] = $user_data['usuario']  ?? null;
                $_SESSION['id'] = $professional_data['id_profesional'] ?? null;
                $_SESSION['nombre'] = $professional_data['nombre']  ?? null;
                $_SESSION['apellido'] = $professional_data['apellido']  ?? null;
                $_SESSION['correo'] = $professional_data['correo_electronico']  ?? null;
                $_SESSION['nombre_completo'] = "{$professional_data['nombre']} {$professional_data['apellido']}";
                $_SESSION['cargo'] = $professional_data['id_cargo']  ?? null;
                $_SESSION['centro'] = $professional_data['centro_educativo_profesional'] ?? null;
                $_SESSION['id_pais'] = $professional_data['id_pais'] ?? null;
                $_SESSION['id_role'] = $user_data['id_rol'] ?? 1;

                // redirect to the professional panel
                header("location:../view/admin/professional/panel.php");
                break;
            // CHILD MANAGER
            case 2:
                // getting child manager (parents) data
                $child_manager_query = "SELECT * FROM representantes WHERE id_usuario = " . $user_data['id_usuario'];
                $child_manager_stmt = $db->prepare($child_manager_query);
                $child_manager_stmt->execute();

                // get associative array of the data
                $child_manager_data = $child_manager_stmt->fetch(PDO::FETCH_ASSOC);

                // start session global variable
                session_start();

                // set session variables
                $_SESSION['idUsuario'] = $user_data['id_usuario'];
                $_SESSION['usuario'] = $user_data['usuario'];
                $_SESSION['id'] = $child_manager_data['id_representante'];
                $_SESSION['nombre'] = $child_manager_data['nombre'];
                $_SESSION['apellido'] = $child_manager_data['apellido'];
                $_SESSION['correo'] = $child_manager_data['correo_electronico'];
                $_SESSION['nombre_completo'] = "{$child_manager_data['nombre']} {$child_manager_data['apellido']}";
                $_SESSION['afiliacion'] = $child_manager_data['id_afiliacion'];
                $_SESSION['id_pais'] = $child_manager_data['id_pais'];
                $_SESSION['id_role'] = $user_data['id_rol'] ?? 2;

                // redirect to the child manager panel
                header("location: ../view/admin/representative/panel.php");
                break;
            // CHILD
            case 3:
                $child_query = "SELECT
                                    ninos.nombre,
                                    ninos.apellido,
                                    ninos.sabe_leer, 
                                    usuarios.permisos AS permisos 
                                FROM ninos 
                                INNER JOIN usuarios 
                                    ON usuarios.id_usuario = ninos.id_usuario
                                WHERE ninos.id_usuario = :id_usuario";
                $child_stmt = $db->prepare($child_query);
                $child_stmt->bindParam(':id_usuario', $user_data['id_usuario']);
                $child_stmt->execute();

                $child_data = $child_stmt->fetch(PDO::FETCH_ASSOC);

                if ($child_data['permisos']) {
                    // start session
                    session_start();
                    
                    // set session values
                    $_SESSION['user_id'] = $user_data['id_usuario'];
                    $_SESSION['id_role'] = $user_data['id_rol'] ?? 3;
                    $_SESSION['usuario'] = $user_data['usuario'];
                    $_SESSION['nombre'] = $child_data['nombre'];
                    $_SESSION['apellido'] = $child_data['apellido'];
                    $_SESSION['sabe_leer'] = $child_data['sabe_leer'];
                    
                    // redirect user
                    if ($child_data['sabe_leer'] !== 1) {
                        http_response_code(301);
                        header("location: ../view/player/prelectores/welcome.php");
                        break;
                    } else {
                        http_response_code(301);
                        header("location: ../view/player/readingAndWriting/welcome.php");
                        break;
                    }
                } else {
                    http_response_code(301);
                    header("location: ../view/signin/log_in.php?error=No tienes permisos.");
                    break;
                }
        }
    } else {
        echo "
            <script>
                alert('Usuario o contraseña incorrectos');
                window.location.href = '../view/signin/log_in.php'; 
            </script>
        "; //
    }
} else {
    echo "
        <script>
            alert('Las contraseñas no coinciden');
            window.location.href = '../view/signin/log_in.php'; 
        </script>
    "; //
}
