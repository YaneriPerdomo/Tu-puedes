<?php

namespace Php;
require_once realpath(__DIR__ . '/Kernel.php');

use PDO;
use PDOException;

class ConexionBD {

    public function abrirConexion()
    {
        // Definir las credenciales de la base de datos
        $host = $_ENV["DB_HOST"] ?? "localhost"; // Servidor de la base de datos
        $port = $_ENV["DB_PORT"] ?? "3306"; // Database port
        $dbname = $_ENV["DB_NAME"] ?? "tu_puedes"; // Nombre de la base de datos
        $username = $_ENV["DB_USERNAME"] ?? "root"; // Nombre de usuario de la base de datos
        $password = $_ENV["DB_PASSWORD"] ?? ""; // Contraseña de la base de datos (Dejar variable vacia si el usuario no requiere contrasena)
    
        // Intentar la conexión a la base de datos
        try {
            // Crear conexión PDO utilizando método URL
            $db = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8mb4", $username, $password);
    
            // Establece atributos de la conexión
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            // En caso de error, mostrar mensaje de error
            echo "Error de conexión a la base de datos: " . $e->getMessage() . "\n";
    
            // Terminar la ejecución del script con error 500
            http_response_code(500);
            die();
        }
    
        return $db;
    }
}