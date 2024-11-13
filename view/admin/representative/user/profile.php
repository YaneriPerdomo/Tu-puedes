<?php

namespace View\admin\representative\user;
require_once realpath(__DIR__ . "/../../../Kernel.php");

use Php\Representantes;

$representative = new Representantes();

session_start();

if (!isset($_SESSION["id_role"])) {
  session_unset();
  session_destroy();
  session_abort();
  http_response_code(301);
  header("Location: /index.php");
  exit();
}

$representative->check_role_id($_SESSION["id_role"]);

?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Perfil | Tú puedes</title>
  <link rel="icon" type="image/x-icon" href="../../../../img/icono/icono.ico">
  <link rel="stylesheet" href="../../../../css/includeHTML/header_admin.css">
  <link rel="stylesheet" href="../../../../css/admin/admin.css">
  <link rel="stylesheet" href="../../../../css/efectos_siempre/scrollbar.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
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


    .noValidation {
      transition: border 0.2s linear;
      border: solid 0.1px #d55252 !important;
    }
  </style>
</head>

<body>
  <div data-include="../../../includeHTMLsinPhp/admin/header_admin_user.php"></div>
  <br>
  <main>
    <div class="containerAdmin">
      <h1>Mi perfil</h1>
      <hr>
      <p>Aquí <span style="color: #fc7c45; font-size: 18px;">puedes editar tu perfil de usuario.</span> </p>
      <form action="/php/ProfileRepresentante.php" method="POST" class="container__main--perfil formR">
        <input type="hidden" name="call" value="2" />
        <legend style="text-align: center;">Datos del usuario</legend>
        <div id="" class="text-center warningR" style="margin-bottom: 0.5rem" ;>
          <small class="siVacioR" id=""></small>
          <small class="noVacioR" id=""></small>
          <small class="stringValidationR" id=""></small>
        </div>
        <label for="usuario">Usuario</label>
        <input 
          id="usuario"
          name="usuario" 
          type="text" 
          placeholder="Ingrese tu usuario" 
          class="" 
          value="<?php echo $_SESSION['usuario'] ?? ''; ?>"
        >
        <br>
        <label for="nombre">Nombre</label>
        <input 
          id="nombre"
          name="nombre" 
          type="text" 
          placeholder="Ingrese tu nombre" 
          class=""
          value="<?php echo $_SESSION['nombre'] ?? ''; ?>" 
        >
        <br>
        <label for="apellido">Apellido</label>
        <input 
          id="apellido"
          name="apellido" 
          type="text" 
          placeholder="Ingrese tu apellido" 
          value="<?php echo $_SESSION['apellido'] ?? ''; ?>"
        >
        <br>
        <label for="correo">Correo Electrónico</label>
        <input 
          id="correo"
          name="correo" 
          type="text" 
          placeholder="Ingrese tu correo electrónico" 
          value="<?php echo $_SESSION['correo'] ?? ''; ?>"
        >
        <br>
        <label for="afiliacion">Afinidad</label>
        <br>
        <select name="afiliacion" id="afiliacion">
          <?php
            $relationships = [
              ["id" => "1", "label" => "Madre"],
              ["id" => "2", "label" => "Padre"],
              ["id" => "3", "label" => "Abuelo"],
              ["id" => "4", "label" => "Abuela"],
              ["id" => "5", "label" => "Bisabuelo"],
              ["id" => "6", "label" => "Bisabuela"],
              ["id" => "7", "label" => "Tío"],
              ["id" => "8", "label" => "Tía"],
              ["id" => "9", "label" => "Sobrino"],
              ["id" => "10", "label" => "Sobrina"],
              ["id" => "11", "label" => "Primo"],
              ["id" => "12", "label" => "Prima"],
              ["id" => "13", "label" => "Vecino"],
              ["id" => "14", "label" => "Vecina"],
              ["id" => "15", "label" => "Suegro"],
              ["id" => "16", "label" => "Suegra"],
              ["id" => "17", "label" => "Cuñado"],
              ["id" => "18", "label" => "Cuñada"],
              ["id" => "19", "label" => "Yerno"],
              ["id" => "20", "label" => "Nuera"],
              ["id" => "21", "label" => "Pareja"],
              ["id" => "22", "label" => "Otro"],
            ];

            foreach ($relationships as $relationship) {
              $selected = ($_SESSION['afiliacion'] == $relationship['id']) ? 'selected' : '';
              echo "<option value='{$relationship['id']}' $selected>{$relationship['label']}</option>";
            }
          ?>
        </select>
        <label for="">Pais</label>
        <select name="paises" id="pais">
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
              echo "<option value='{$option['id']}' selected='{($option[id] === $_SESSION[id_pais])}'>{$option['label']}</option>";
            }
          ?>
        </select>
        <label for="">Tipo de cuenta Tu Puedes</label>
        <input type="text" value="Representante" readonly class="tipo--cuenta">
        <div class="change__clave" style="text-align: center; text-decoration:none">
          <button type="button" style="color: #309cb7 ; background: none; border: 0; font-weight: 500;"
            data-bs-toggle="modal" data-bs-target="#exampleModal"> Cambia tu contraseña </button>
          <br>
          <small>Cambia tu contraseña en cualquier momento.</small>
        </div>
        <hr>
        <div class="perfil--vistazo"
          style="display: flex; align-items: center; justify-content: center; flex-wrap:wrap; gap:1rem">
          <a href="../panel.php" class="btn__volver" style="border-radius: 0.5rem;   text-align: center; display: block; color: rgb(220, 55, 55);   color: #fc7c45; text-decoration: none; padding: 0.6rem; border: solid 2px #fc7c45;">VOLVER</a>
          <button type="button" class="btn__delete" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
            style=" border-radius: 0.5rem; text-align: center; display: block; color: rgb(220, 55, 55);  margin-left: 0.5rem; background: #b67bf9; color: white; text-decoration: none; padding: 0.6rem 0.6rem; cursor: pointer; border:0">ELIMINAR
          </button>
          <div class="form-btn-keep">
            <input 
              type="submit" 
              value="GUARDAR CAMBIOS" 
              class="form__btn--detalles"
              style="border-radius: 0.5rem; width: 100%;"
            >
            <br>
          </div>
        </div>
      </form>
    </div>
  </main>

  <script>
  </script>
  <!-- Modal Change -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Cambia tu contraseña </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form action="/php/ProfileRepresentante.php" method="POST" class="cambiarContraseña">
            <input type="hidden" name="call" value="3" />
            <small id="warning" class="d-block text-center"></small>
            <small class="SmallErrorTwo" style="color: #d55252;" class="d-block text-center"></small>
            <input name="oldcontrasena" type="password" autofocus class="modal__password"
              placeholder="Contraseña actual">
            <input name="contrasena" type="password" class="modal__password" placeholder="Nueva contraseña">
            <input name="contrasenaval" type="password" class="modal__password" placeholder="Confirmar contraseña">

        </div>
        <div class="modal-footer">
          <button type="button" class=" form__btn--detalles" sytle="font-weight: 500"
            data-bs-dismiss="modal">Cerrar</button>
          <button type="submit" class="btn btn-primary btnGuardarCambios">Guardar cambios</button>
        </div>
        </form>
      </div>
    </div>
  </div>

  <!--Modal delete-->
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
          <p style="text-align: center;">Mediante esta opción puedes eliminar completamente tu cuenta de
            <span>Representante</span> en Tu puedes. <br>

            Al eliminar tu cuenta, dejarás de tener acceso a Tu puedes tanto a través de la web como de las aplicaciones
            móviles. Todos los
            usuarios que hayas dado de alta también serán eliminados por lo que tampoco podrán acceder a la plataforma.
            <br><br>
            Para confirmar la eliminación de la cuenta, escribe en el siguiente recuadro ELIMINAR
          </p>
          <input type="text" class="write-delete">
        </div>
        <div class="modal-footer d-flex  justify-content-center ">
          <form action="/php/ProfileRepresentante.php" method="POST">
            <input type="hidden" name="call" value="4" />
            <button type="submit" class="btn btn-primary btn__confirmar filter-sepia"
              style="border: solid 0.2rem #ff1717; background: white; color: #ff1717; border-radius: 0;"
              disabled>CONFIRMAR</button>
          </form>
          <button type="button" class="btn btn-secondary "
            style="    background: #ff4040; border: 0; border-radius: 0; padding: 0.7em;"
            data-bs-dismiss="modal">CANCELAR</button>
        </div>
      </div>
    </div>
  </div>
  <br><br>
  <div data-include="../../../includeHTMLsinPhp/admin/footer_admin.php"></div>
  <script src="../../../../js/admin/profile.js"></script>
  <script src="../../../../js/ajax/include-html.js"></script>
  <script src="../../../../js/validations/validationPasswordPerfil.js"></script>
  <script src="../../../../js/validations/validationRepresentanteAdmin.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"></script>
</body>

</html>