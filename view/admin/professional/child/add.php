<?php

namespace View\admin\professional\child;
require_once realpath(__DIR__ . "/../../../Kernel.php");

use Php\Admin;

$admin = new Admin();

session_start();

if (!isset($_SESSION["id_role"])) {
  session_unset();
  session_destroy();
  session_abort();
  http_response_code(301);
  header("Location: /index.php");
  exit();
}

$admin->check_role_id($_SESSION["id_role"]);

if (isset($_SESSION['mensaje'])) {
    echo '<script>alert("' . $_SESSION['mensaje'] . '");</script>';
    unset($_SESSION['mensaje']); // Limpiar el mensaje después de mostrarlo
}

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agrega | Tú puedes</title>
    <link rel="icon" type="image/x-icon" href="/img/icono/icono.ico">
    <link rel="stylesheet" href="/css/includeHTML/header_admin.css">
    <link rel="stylesheet" href="/css/admin/admin.css">
    <link rel="stylesheet" href="/css/efectos_siempre/scrollbar.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/presentacion.css">
    <style>
        body {
            background-image: url(/img/player/fondo.png);
        }

        .logo figure img {
            max-width: 100px;
        }

        header {
            height: 78.8px;
            background: #ff7d3f;
            width: 100%;

        }

        .d-flex_rapido {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }
    </style>
</head>

<body>
    <div data-include="/view/includeHTMLsinPhp/admin/header_admin_alumni.php"></div>
    <br>
    <main>
        <div class="containerAdmin" style="max-width: 700px; min-width: 100px;">
            <h1>Agregar usuario</h1>
            <hr>
            <p>
                Introduce los siguientes datos para crear un nuevo usuario. favor, asegúrate de la veracidad de los datos
                introducidos.
            </p>
            <form 
                action="/php/Admin.php" 
                method="POST" 
                class="container-main__ada-alumno"
            >
            <div id="" class="text-center warningR" style="margin-bottom: 0.5rem" ;>
                <small class="siVacioR" id=""></small>
                <small class="noVacioR" id=""></small>
                <small class="stringValidationR" id=""></small>
            </div>
                <div class="wrapper">
                    <input type="hidden" name="call" value="1">
                    <input type="radio" name="gender" id="option-1" class="only-one" value="1" checked style="display:none">
                    <input type="radio" name="gender" id="option-2" class="only-one" value="2" style="display:none">
                    <label for="option-1" class="option option-1">
                        <div class="dot"></div>
                        <span>Niño</span>
                    </label>
                    <label for="option-2" class="option option-2">
                        <div class="dot"></div>
                        <span>Niña</span>
                    </label>
                </div>
                <label for="usuario">Usuario</label>
                <input
                    id="usuario" 
                    name="usuario" 
                    type="text" 
                    placeholder="Introduce el nombre de usuario"
                >
                <br>
                <label for="nombre">Nombre</label>
                <input
                    id="nombre" 
                    name="nombre" 
                    type="text" 
                    placeholder="Introduce el nombre del usuario"
                >
                <br>
                <label for="apellido">Apellido</label>
                <input
                    id="apellido" 
                    name="apellido" 
                    type="text" 
                    placeholder="Introduce el apellido del usuario"
                >
                <br>
                <label for="pais">Pais</label>
                <select name="paises" id="pais">
                    <option value="1">México</option>
                    <option value="2">Belice</option>
                    <option value="3">Costa Rica</option>
                    <option value="4">El Salvador</option>
                    <option value="5">Guatemala</option>
                    <option value="6">Honduras</option>
                    <option value="7">Nicaragua</option>
                    <option value="8">Panamá</option>
                    <option value="9">Antigua y Barbuda</option>
                    <option value="10">Bahamas</option>
                    <option value="11">Barbados</option>
                    <option value="12">Cuba</option>
                    <option value="13">Dominica</option>
                    <option value="14">Granada</option>
                    <option value="15">Haití</option>
                    <option value="16">Jamaica</option>
                    <option value="17">Puerto Rico</option>
                    <option value="18">República Dominicana</option>
                    <option value="19">San Cristóbal y Nevis</option>
                    <option value="20">Santa Lucía</option>
                    <option value="21">San Vicente y las Granadinas</option>
                    <option value="22">Trinidad y Tobago</option>
                    <option value="23">Argentina</option>
                    <option value="24">Bolivia</option>
                    <option value="25">Brasil</option>
                    <option value="26">Chile</option>
                    <option value="27">Colombia</option>
                    <option value="28">Ecuador</option>
                    <option value="29">Guyana</option>
                    <option value="30">Paraguay</option>
                    <option value="31">Perú</option>
                    <option value="32">Surinam</option>
                    <option value="33">Uruguay</option>
                    <option value="34" selected>Venezuela</option>
                </select>
                <label for="fechaNacimiento">Fecha de nacimiento</label>
                <input 
                    id="fechaNacimiento"
                    name="fechaNacimiento" 
                    type="date" 
                    placeholder="Fecha de nacimiento"
                    onchange="validarFechaN()"
                >
                <label for="fechaValidez">Valido hasta</label>
                <input 
                    id="fechaValidez" 
                    name="fechaValidez" 
                    type="date"
                    onchange="validarFechaV()"
                >
                <label 
                    for="lectura" 
                    style="text-align: center; margin-right: 0.3rem; "
                >
                    ¿El jugador sabe leer? Si no está
                    marcado, los ejercicios que aparecen serán para prelectores y principiantes en la lectura y la
                    escritura.
                </label>
                <br>
                <input
                    id="lectura" 
                    name="lectura" 
                    type="checkbox"
                    style="width: auto;"
                >
                <br>
                <label for="permisos" style="text-align: center; margin-right: 0.3rem; ">
                    Permisos para que el jugador entre
                        en el aprendizaje.
                </label>
                <br>
                <input
                    id="permisos" 
                    name="permisos" 
                    type="checkbox" 
                    class="test" style="width: auto;"
                >
                <br>
                <label for="contrasena">Contraseña</label>
                <input 
                    id="contrasena"
                    name="contrasena" 
                    type="password" 
                    placeholder="Introduce la contraseña del usuario"
                >
                <label for="contrasenaAgain">Confirmar contraseña</label>
                <input
                    id="contrasenaAgain" 
                    name="contrasenaAgain" 
                    type="password" 
                    placeholder="Introduce la contraseña contraseña del usuario"
                >      
                <div class="containerButtonNino">
                    <a href="../panel.php" class="buttonReturn">
                        <i class="bi bi-arrow-left me-1"></i>VOLVER
                    </a>
                    <input type="submit" value="Agregar" class="buttonOrange"><br>
                </div>
            </form>
        </div>
    </main>
    <br><br><br><br><br><br><br>
    <div data-include="/view/includeHTMLsinPhp/admin/footer_admin.php"></div>
    <?php 
        if (isset($_GET["error"])) {
            echo "
            <script>
                let error = '{$_GET['error']}';
                if (window.location.search.includes('error')) {
                    // Use history.replaceState to modify the URL without reloading the page
                    const url = new URL(window.location);
                    url.searchParams.delete('error');  // Remove the 'error' parameter

                    // Update the URL in the browser's address bar
                    window.history.replaceState({}, document.title, url.pathname);
                }
                error = error.replace(/_/g, ' ');
                alert(error);
            </script>
            ";
        }
    ?>
    <script src="/js/ajax/include-html.js"></script>
    <script src="../../../../js/validations/validationAddChild.js"></script>
    <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" 
        crossorigin="anonymous"
    >
    </script>
</body>

</html>