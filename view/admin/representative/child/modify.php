<?php

namespace View\admin\representative\child;
require_once realpath(__DIR__ . "/../../../Kernel.php");

use Php\Representantes;

$child_manager = new Representantes();

session_start();

if (!isset($_SESSION["id_role"])) {
  session_unset();
  session_destroy();
  session_abort();
  http_response_code(301);
  header("Location: /index.php");
  exit();
}

$child_manager->check_role_id($_SESSION["id_role"]);

$child_data = null;

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $child_data = $child_manager->get_child($id);
}

if (!$child_data) {
    http_response_code(301);
    header("Location: ../panel.php?error=No se encontró el recurso requerido.");
}

if (isset($_GET["error"])) {
    echo "
    <script>
        let error = '{$_GET['error']}';
        if (window.location.search.includes('error')) {
            // Use history.replaceState to modify the URL without reloading the page
            const url = new URL(window.location);
            url.searchParams.delete('error');  // Remove the 'error' parameter

            // Update the URL in the browser's address bar
            window.history.replaceState({}, document.title, url.toString());
        }
        error = error.replace(/_/g, ' ');
        alert(error);
    </script>
    ";
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
    <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
        crossorigin="anonymous"
    >
    <style>
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
    <div data-include="../../../includeHTMLsinPhp/admin/header_admin_alumni.php"></div>
    <br>
    <main>
        <div class="containerAdmin" style=" max-width: 700px; min-width: 100px;">
            <h1>Editar usuario</h1>
            <hr>
            <p>Datos del usuario </p>
            <form 
                action="../../../../php/Representantes.php" 
                method="POST" 
                class="container-main__ada-alumno"
            >
                <div id="" class="text-center warningR" style="margin-bottom: 0.5rem" ;>
                    <small class="siVacioR" id=""></small>
                    <small class="noVacioR" id=""></small>
                    <small class="stringValidationR" id=""></small>
                </div>
                <input type="hidden" name="id" value="<?php echo $child_data['id_usuario']; ?>">
                <div class="wrapper">
                    <input type="hidden" name="call" value="2">
                    <input 
                        type="radio" 
                        name="gender" 
                        id="option-1" 
                        class="only-one" 
                        value="1" 
                        style="display:none"
                        <?php echo $child_data['id_genero'] === 1 ? 'checked' : ''; ?>
                    >
                    <input 
                        type="radio" 
                        name="gender" 
                        id="option-2" 
                        class="only-one" 
                        value="2" 
                        style="display:none"
                        <?php echo $child_data['id_genero'] === 2 ? 'checked' : ''; ?>
                    >
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
                    type="text" 
                    name="usuario" 
                    placeholder="Introduce el nombre del usuario"
                    value="<?php echo $child_data['usuario']; ?>"
                >
                <br>
                <label for="nombre">Nombre</label>
                <input 
                    id="nombre"
                    name="nombre" 
                    type="text" 
                    placeholder="Introduce el nombre del usuario"
                    value="<?php echo $child_data['nombre']; ?>"
                >
                <br>
                <label for="apellido">Apellido</label>
                <input 
                    id="apellido"
                    name="apellido" 
                    type="text" 
                    placeholder="Introduce el apellido del usuario"
                    value="<?php echo $child_data['apellido']; ?>"
                >
                <br>
                <label for="pais">Pais</label>
                <select 
                    name="paises" 
                    id="pais"
                >
                    <?php
                        $country_options = [
                            ["id" => 1, "label" => 'México'],
                            ["id" => 2, "label" => 'Belice'],
                            ["id" => 3, "label" => 'Costa Rica'],
                            ["id" => 4, "label" => 'El Salvador'],
                            ["id" => 5, "label" => 'Guatemala'],
                            ["id" => 6, "label" => 'Honduras'],
                            ["id" => 7, "label" => 'Nicaragua'],
                            ["id" => 8, "label" => 'Panamá'],
                            ["id" => 9, "label" => 'Antigua y Barbuda'],
                            ["id" => 10, "label" => 'Bahamas'],
                            ["id" => 11, "label" => 'Barbados'],
                            ["id" => 12, "label" => 'Cuba'],
                            ["id" => 13, "label" => 'Dominica'],
                            ["id" => 14, "label" => 'Granada'],
                            ["id" => 15, "label" => 'Haití'],
                            ["id" => 16, "label" => 'Jamaica'],
                            ["id" => 17, "label" => 'Puerto Rico'],
                            ["id" => 18, "label" => 'República Dominicana'],
                            ["id" => 19, "label" => 'San Cristóbal y Nevis'],
                            ["id" => 20, "label" => 'Santa Lucía'],
                            ["id" => 21, "label" => 'San Vicente y las Granadinas'],
                            ["id" => 22, "label" => 'Trinidad y Tobago'],
                            ["id" => 23, "label" => 'Argentina'],
                            ["id" => 24, "label" => 'Bolivia'],
                            ["id" => 25, "label" => 'Brasil'],
                            ["id" => 26, "label" => 'Chile'],
                            ["id" => 27, "label" => 'Colombia'],
                            ["id" => 28, "label" => 'Ecuador'],
                            ["id" => 29, "label" => 'Guyana'],
                            ["id" => 30, "label" => 'Paraguay'],
                            ["id" => 31, "label" => 'Perú'],
                            ["id" => 32, "label" => 'Surinam'],
                            ["id" => 33, "label" => 'Uruguay'],
                            ["id" => 34, "label" => 'Venezuela'],
                        ];

                        foreach ($country_options as $option) {
                            echo "<option value='{$option['id']}' selected='{($option[id] === $child_data[id_pais])}'>{$option['label']}</option>";
                        }
                    ?>
                </select>
                <label for="fechaNacimiento">Fecha de nacimiento</label>
                <input 
                    id="fechaNacimiento"
                    name="fechaNacimiento" 
                    type="date" 
                    placeholder="Fecha de nacimiento"
                    onchange="validarFechaN()"
                    value="<?php echo $child_data['fecha_nacimiento']; ?>"
                >
                <label for="fechaValidez">Valido hasta</label>
                <input 
                    id="fechaValidez"
                    name="fechaValidez" 
                    type="date"
                    placeholder="Fecha de validez"
                    onchange="validarFechaV()"
                    value="<?php echo date('Y-m-d', strtotime($child_data['fecha_validez'])); ?>"
                >
                <label 
                    for="lectura" 
                    style="text-align: center; margin-right: 0.3rem;"
                >
                    ¿El jugador sabe leer? Si no está marcado, 
                    los ejercicios que aparecen serán para prelectores 
                    y principiantes en la lectura y la escritura.
                </label>
                <br>
                <input 
                    id="lectura"
                    name="lectura" 
                    type="checkbox" 
                    style="width: auto;"
                    <?php echo $child_data['sabe_leer'] === 1 ? 'checked' : ''; ?>
                >
                <br>
                <label 
                    for="permisos" 
                    style="text-align: center; margin-right: 0.3rem;"
                >
                    Permisos para que el jugador entre
                    en el aprendizaje.
                </label>
                <br>
                <input 
                    id="permisos"
                    name="permisos" 
                    type="checkbox" 
                    style="width: auto;"
                    <?php echo $child_data['permisos'] === 1 ? 'checked' : ''; ?>
                >
                <br>
                <label for="contrasena">Contraseña</label><br>
                <small>El niño ya tiene asignada una contraseña. Si quieres modificarla escribe la nueva, si no, deja el
                    campo en blanco.</small>
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
                    <a 
                        href="../panel.php" 
                        class="buttonReturn"
                    >
                        <i class="bi bi-arrow-left me-1"></i> VOLVER
                    </a>
                    <button 
                        type="button" 
                        class="btn__delete" 
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"
                        style="border-radius: 0.5rem; text-align: center; display: block; color: rgb(220, 55, 55);  margin-left: 0.5rem; background: #b67bf9; color: white; text-decoration: none; padding: 0.6rem 0.6rem; cursor: pointer; border:0"
                    >
                        ELIMINAR
                    </button>
                    <input 
                        type="submit" 
                        value="Guardar cambios" 
                        class="buttonOrange"
                    >
                    <br>
                </div>
            </form>
        </div>
    </main>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" style="    flex-direction: column;    background: #ff4040; ">
          <span style="    display: block; width: 1%;     margin-right: 3rem;" class="animation__icon-delete">❌</span>
          <h1 class="modal-title fs-5 w-100 " id="staticBackdropLabel" style="color: white;text-align: center; ">¿Estás
            seguro?</h1>
        </div>
        <div class="modal-body">
          <p class="text-center">
          Si eliminas al usuario, ya no podrás acceder a su información ni al aprendizaje.  
          </p>
        </div>
        <div class="modal-footer d-flex  justify-content-center ">
          <form action="/php/Representantes.php" method="POST">
            <input type="hidden" name="call" value="3" />
            <input type="hidden" name="id" value="<?php echo $_GET['id']; ?>">
            <button type="submit" class="btn btn-primary btn__confirmar filter-sepia"
              style="border: solid 0.2rem #ff1717; background: white; color: #ff1717; border-radius: 0;"
              >CONFIRMAR</button>
          </form>
          <button type="button" class="btn btn-secondary "
            style="    background: #ff4040; border: 0; border-radius: 0; padding: 0.7em;"
            data-bs-dismiss="modal">CANCELAR</button>
        </div>
      </div>
    </div>
  </div>
    <br><br><br><br><br><br><br>
    <div data-include="../../../includeHTMLsinPhp/admin/footer_admin.php"></div>
    <script src="../../../../js/ajax/include-html.js"></script>
    <script src="../../../../js/validations/validationModifyChild.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
        </script>
</body>

</html>