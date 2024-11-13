<?php

namespace Php;
require_once realpath(__DIR__ . '/Kernel.php');

use PDO;
use Php\ConexionBD;

$admin_profile = new ProfileAdmin();

if (isset($_POST['call'])) {
    switch ($_POST['call']) {
        case 1:
            $admin_profile->modificar();
            break;
        case 2:
            $admin_profile->eliminar();
            break;
        case 3:
            $admin_profile->cambiarContrasena();
            break;
    }
}

class ProfileAdmin
{
    public ConexionBD $db_handler;
    
    public function __construct()
    {
        $this->db_handler = new ConexionBD();
    }

    function modificar()
    {
        // start session global variable
        session_start();

        // getting values from session
        $idProfesional = $_SESSION['id'];
        $idUsuario = $_SESSION['idUsuario'];
        $current_username = $_SESSION['usuario'];

        // open db connection
        $db = $this->db_handler->abrirConexion();
    
        $usuario = $_POST['usuario'];
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $correo = $_POST['correo'];
        $pais = $_POST['paises'];
        $centro = $_POST['centro'];
        $id_cargo = $_POST['cargo'];

        if ($current_username != $usuario) {
            $check_username_availability_query = "SELECT usuario FROM usuarios WHERE usuario = :usuario";
            $check_username_availability_stmt = $db->prepare($check_username_availability_query);
            $check_username_availability_stmt->bindParam(':usuario', $usuario);
            $check_username_availability_stmt->execute();
            $result = $check_username_availability_stmt->fetch();

            if ($result) {
                header("location:../view/admin/representative/user/profile.php?error=El nombre de usuario $usuario ya está ocupado.");
                return;
            }
        }
    
        $update_user_query = "UPDATE usuarios SET usuario = :usuario WHERE id_usuario = :idUsuario";
    
        $update_user_stmt = $db->prepare($update_user_query);
        $update_user_stmt->bindParam(':usuario', $usuario);
        $update_user_stmt->bindParam(':idUsuario', $idUsuario);
        $update_user_stmt->execute();
    
        $update_professional_query = "UPDATE profesionales SET id_cargo = :idCargo, id_pais = :idPais, nombre = :nombre, apellido = :apellido, correo_electronico = :correo, centro_educativo_profesional = :centro WHERE id_profesional = :idProfesional;";
    
        $update_professional_stmt = $db->prepare($update_professional_query);
        $update_professional_stmt->bindParam(':idCargo', $id_cargo);
        $update_professional_stmt->bindParam(':idPais', $pais);
        $update_professional_stmt->bindParam(':nombre', $nombre);
        $update_professional_stmt->bindParam(':apellido', $apellido);
        $update_professional_stmt->bindParam(':correo', $correo);
        $update_professional_stmt->bindParam(':centro', $centro);
        $update_professional_stmt->bindParam(':idProfesional', $idProfesional);
        $update_professional_stmt->execute();

        // updating session variables
        $_SESSION['usuario'] = $usuario;
        $_SESSION['nombre'] = $nombre;
        $_SESSION['apellido'] = $apellido;
        $_SESSION['correo'] = $correo;
        $_SESSION['nombre_completo'] = "{$nombre} {$apellido}";
        $_SESSION['cargo'] = $id_cargo;
        $_SESSION['centro'] = $centro;
        $_SESSION['id_pais'] = $pais;

        // goes to dashboard
        header("location:../view/admin/professional/panel.php");
    }
    
    function eliminar()
    {
        session_start();
        $idProfesional = $_SESSION['id'];
        $idUsuario = $_SESSION['idUsuario'];
        $db = $this->db_handler->abrirConexion();

        $get_children_query = "SELECT id_usuario FROM ninos WHERE id_profesional = :idProfesional";
        $get_children_stmt = $db->prepare($get_children_query);
        $get_children_stmt->bindParam(':idProfesional', $idProfesional);
        $get_children_stmt->execute();

        $children_ids = $get_children_stmt->fetchAll(PDO::FETCH_COLUMN);
        $children_ids = join(",", $children_ids);
        
        $delete_children_lessons_query = "DELETE FROM lecciones_completadas WHERE id_usuario IN (:children_ids)";
        $delete_children_lessons_stmt = $db->prepare($delete_children_lessons_query);
        $delete_children_lessons_stmt->bindParam(':children_ids', $children_ids);
        $delete_children_lessons_stmt->execute();
    
        $delete_childrens_query = "DELETE FROM ninos WHERE id_usuario IN (:children_ids)";
        $delete_childrens_stmt = $db->prepare($delete_childrens_query);
        $delete_childrens_stmt->bindParam(':children_ids', $children_ids);
        $delete_childrens_stmt->execute();
    
        $delete_professional_query = "DELETE FROM profesionales WHERE id_usuario = :id";
        $delete_professional_stmt = $db->prepare($delete_professional_query);
        $delete_professional_stmt->bindParam(':id', $idUsuario);
        $delete_professional_stmt->execute();
    
        $delete_user_query = "DELETE FROM usuarios WHERE id_usuario = :id";
        $delete_user_stmt = $db->prepare($delete_user_query);
        $delete_user_stmt->bindParam(':id', $idUsuario);
        $delete_user_stmt->execute();    
        session_unset();

        header("location:../vista/signin/log_in.php");
    }
    
    function cambiarContrasena()
    {
        session_start();
        $idProfesional = $_SESSION['id'];
        $idUsuario = $_SESSION['idUsuario'];
        $db = $this->db_handler->abrirConexion();
    
        echo ($idProfesional . "hi");
        echo ($idUsuario);
    
        if (isset($_POST['contrasena'])) {
            $contrasena = $_POST['contrasena'];
    
            $query = "UPDATE usuarios SET clave = :contrasena WHERE id_usuario = :idUsuario";
            $llamado = $db->prepare($query);
            $llamado->bindParam(':contrasena', $contrasena);
            $llamado->bindParam(':idUsuario', $idUsuario);
            $llamado->execute();
            header("location:../vista/admin/profesional/panel.php");
        }
    }
}
