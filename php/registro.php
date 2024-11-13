<?php

namespace Php;
require_once realpath(__DIR__ . '/Kernel.php');

use PDO;
use PDOException;
use Php\ConexionBD;

$db_handler = new ConexionBD();

$db = $db_handler->abrirConexion();

$idRol = $_POST['rol'];

if ($idRol == 1) {
    $usuario = $_POST['usuario'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];
    $pais = $_POST['paises'];
    $cargo = $_POST['cargo'];
    $fechaCreacion = date("Y-m-d");
    $centro = $_POST['centro'];
    $contrasena = $_POST['contrasena'];
    
    $check_query = "SELECT * FROM usuarios WHERE usuario = :usuario";
    $check_stmt = $db->prepare($check_query);
    $check_stmt->bindParam(':usuario', $usuario);
    $check_stmt->execute();

    // getting user data
    $old_user_data = $check_stmt->fetch(PDO::FETCH_ASSOC);

    if ($old_user_data) {
        http_response_code(301);
        header("location:../view/signin/log_in.php?error=El usuario ya existe");
        exit();
    }

    try {
        $query = "INSERT INTO usuarios(id_rol, usuario, clave, estado, fecha_creacion) VALUES (:idRol, :usuario, :contrasena, b'1', :fechaCreacion);";
        $llamado = $db->prepare($query);
        $llamado->bindParam(':idRol', $idRol);
        $llamado->bindParam(':usuario', $usuario);
        $llamado->bindParam(':contrasena', $contrasena);
        $llamado->bindParam(':fechaCreacion', $fechaCreacion);
        $llamado->execute();
    } catch (PDOException $e) {
        // TODO: create a log for database errors
        // echo $e->getMessage();
        http_response_code(301);
        header("location:../view/create_account.php?error=Error al crear el usuario");
    }

    $user_data = null;

    try {
        $query = "SELECT MAX(id_usuario) AS IDs FROM usuarios";
        $llamado = $db->prepare($query);
        $llamado->execute();
        $data = $llamado->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {

    }

    $idUSuario = $data['IDs'];

    $query = "INSERT INTO profesionales(id_usuario, id_cargo, id_pais, nombre, apellido, correo_electronico, centro_educativo_profesional) VALUES (:idUsuario, :idCargo, :idPais, :nombre, :apellido, :correo, :centro);";
    $llamado = $db->prepare($query);
    $llamado->bindParam(':idUsuario', $idUSuario);
    $llamado->bindParam(':idCargo', $cargo);
    $llamado->bindParam(':idPais', $pais);
    $llamado->bindParam(':nombre', $nombre);
    $llamado->bindParam(':apellido', $apellido);
    $llamado->bindParam(':correo', $correo);
    $llamado->bindParam(':centro', $centro);
    $llamado->execute();

    header("location:../view/signin/log_in.php");
} 

if ($idRol == 2) {
    $usuario = $_POST['usuario'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];
    $pais = $_POST['paises'];
    $afilicacion = $_POST['afiliacion'];
    $idRol = $_POST['rol'];
    $fechaCreacion = date("Y-m-d");
    $contrasena = $_POST['contrasena'];

    $query = "INSERT INTO usuarios(id_rol, usuario, clave, estado, fecha_creacion) VALUES (:idRol, :usuario, :contrasena, b'1', :fechaCreacion);";
    $llamado = $db->prepare($query);
    $llamado->bindParam(':idRol', $idRol);
    $llamado->bindParam(':usuario', $usuario);
    $llamado->bindParam(':contrasena', $contrasena);
    $llamado->bindParam(':fechaCreacion', $fechaCreacion);
    $llamado->execute();

    $query = "SELECT MAX(id_usuario) AS IDs FROM usuarios";
    $llamado = $db->prepare($query);
    $llamado->execute();
    $data = $llamado->fetch(PDO::FETCH_ASSOC);

    $idUSuario = $data['IDs'];

    $query = "INSERT INTO representantes(id_usuario, id_afiliacion, id_pais, nombre, apellido, correo_electronico) VALUES (:idUsuario, :idAfiliacion, :idPais, :nombre, :apellido, :correo);";
    $llamado = $db->prepare($query);
    $llamado->bindParam(':idUsuario', $idUSuario);
    $llamado->bindParam(':idAfiliacion', $afilicacion);
    $llamado->bindParam(':idPais', $pais);
    $llamado->bindParam(':nombre', $nombre);
    $llamado->bindParam(':apellido', $apellido);
    $llamado->bindParam(':correo', $correo);
    $llamado->execute();

    header("location: ../view/signin/log_in.php");
}
