<?php

namespace View\admin\professional\user;
require_once "../../../Kernel.php";

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

?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Perfil | Tú puedes</title>
  <link rel="icon" type="image/x-icon" href="/img/icono/icono.ico">
  <link rel="stylesheet" href="/css/includeHTML/header_admin.css">
  <link rel="stylesheet" href="/css/admin/admin.css">
  <link rel="stylesheet" href="/css/efectos_siempre/scrollbar.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
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
<div data-include="/view/includeHTMLsinPhp/admin/header_admin_user.php"></div>
  <br>
  <main>
    <div class="containerAdmin">
      <h1>Mi perfil</h1>
      <hr>
      <p>Aquí <span style="color: #fc7c45; font-size: 18px;">puedes editar tu perfil de usuario.</span> Sólo te pido los
        datos mínimos, pero si puedes completar tu perfil con algo más de información me será de gran ayuda.</p>
      <form action="/php/ProfileAdmin.php" method="POST" class="container__main--perfil">
        <input type="hidden" name="call" value="1" />
        <legend style="text-align: center;">Datos del usuario</legend>
        <div id="w" class="warningPerfil text-center" style="margin-bottom: 0.5rem" ;>
          <small style="color: #d55252;" class="siVacio"></small>
          <small class="noVacio" style="color: #d55252;"></small>
          <small class="stringValidation" style="color: #d55252;"></small>
        </div>
        <label for="usuario">Usuario</label>
        <input 
          id="usuario"
          name="usuario" 
          type="text" 
          placeholder="Ingrese tu usuario" 
          value="<?php echo $_SESSION['usuario'] ?? '' ?>"
        />
        <br>
        <label for="">Nombre</label>
        <input 
          id="nombre"
          name="nombre" 
          type="text" 
          placeholder="Ingrese tu nombre" 
          value="<?php echo $_SESSION['nombre'] ?? '' ?>" 
        />
        <br>
        <label for="apellido">Apellido</label>
        <input 
          id="apellido"
          name="apellido" 
          type="text" 
          placeholder="Ingrese tu apellido" 
          value="<?php echo $_SESSION['apellido'] ?? '' ?>"
        />
        <br>
        <label for="correo">Correo Electronico</label>
        <input 
          id="correo"
          name="correo" 
          type="text" 
          placeholder="Ingrese tu correo electronico"
          value="<?php echo $_SESSION['correo'] ?? '' ?>"
        />
        <br>
        <div class="cargos">
          <label for="cargo">Cargo Profesional</label><br>
          <select 
            id="cargo"
            name="cargo"
          >
            <?php
              // Opciones de cargo
              $charge_options = [
                ["id" => 1, "label" => "Docente"],
                ["id" => 2, "label" => "Terapeuta"],
              ];

              foreach ($charge_options as $option) {
                $selected = ($option['id'] === $_SESSION['cargo']) ? 'selected' : '';
                echo "<option value='{$option['id']}' $selected>{$option['label']}</option>";
              }
            ?>
          </select>
          <br>
        </div>
        <label for="pais">Pais</label>
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
        <div class="container__lugar_trabajo">
          <label 
            for="centro" 
            class="nombre_centro_escolar"
          >
            Nombre del Centro escolar o
            profesional
          </label>
          <br>
          <input 
            id="centro"
            type="text" 
            class="nombre_centro_escolar" 
            name="centro"
            placeholder="Nombre del Centro escolar o profesional"
            value="<?php echo $_SESSION['centro'] ?? '' ?>"
          >
          <br data-br-delete>
        </div>
        <label for="tipocuenta">Tipo de cuenta Tu Puedes</label>
        <input 
          id="tipocuenta"
          type="text" 
          value="Profesional" 
          name="tipocuenta"
          readonly 
          class="tipo--cuenta"
        >
          <div class="change__clave" style="text-align: center; text-decoration:none">
            <button 
              type="button" 
              style="color: #309cb7 ; background: none; border: 0; font-weight: 500;"
              data-bs-toggle="modal" 
              data-bs-target="#exampleModal"
            > 
              Cambia tu contraseña 
            </button>
            <br>
            <small>Cambia tu contraseña en cualquier momento.</small>
          </div>
        <hr>
        <div 
          class="perfil--vistazo"
          style="display: flex; align-items: center; justify-content: center; flex-wrap:wrap; gap:1rem"
        >
          <a 
            href="../panel.php" 
            class="btn__volver"
            style="border-radius: 0.5rem;   text-align: center; display: block; color: rgb(220, 55, 55);   color: #fc7c45; text-decoration: none; padding: 0.6rem; border: solid 2px #fc7c45;"
          >
            VOLVER
          </a>
          <button 
            type="button" 
            class="btn__delete" 
            data-bs-toggle="modal" 
            data-bs-target="#staticBackdrop"
            style=" border-radius: 0.5rem; text-align: center; display: block; color: rgb(220, 55, 55);  margin-left: 0.5rem; background: #b67bf9; color: white; text-decoration: none; padding: 0.6rem 0.6rem; cursor: pointer; border:0">ELIMINAR
          </button>
          <div 
            class="form-btn-keep"
          >
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
    // // TODO: dolar symbol should be not necesary
    // //Etiqueta form
    // let $formEditarPerfil = document.querySelector(`[class="container__main--perfil"]`);
    // //all the inputs on my page
    // let $usuario = document.querySelector("[name='usuario']") || "0";
    // let $nombre = document.querySelector("[name='nombre']") || "0";
    // let $apellido = document.querySelector("[name='apellido']") || "0";
    // let $correo = document.querySelector("[name='correo']") || "0";
    // let $centro = document.querySelector("[name='centro']") || "0";

    // let ExpreUsuario = new RegExp("[A-Za-z0-9]{6,30}$");
    // let expresionCorreo = new RegExp(`[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}`);
    // let expresionNombre = new RegExp(`^[A-Za-zÑñÁáÉéÍíÓóÚú]+(?: [A-Za-zÑñÁáÉéÍíÓóÚú]+)*$`);
    // let expresionCentro = new RegExp(`^[A-Za-zÑñÁáÉéÍíÓóÚú,.()]+(?: [A-Za-zÑñÁáÉéÍíÓóÚú,.()]+)*$`)
    // //Array of the inputs
    // let $arrayInputsPerfil = [$usuario, $nombre, $apellido, $correo, $centro]
    // let $warningSpanPerfil = document.querySelector(".warningPerfil > small") 
    // let $warningSmallNoVacioPerfil = document.querySelector(".warningPerfil > .noVacio") ;
    // let $warningString = document.querySelector(".stringValidation") ;
    // let $arrayWarningsPerfil = [$warningSmallNoVacioPerfil, $warningSpanPerfil, $warningString];

    // //Evento de la etiqueta form
    // $formEditarPerfil.addEventListener("submit", e => {
    //   // prevent form submit
    //   e.preventDefault();

    //   let 
    //     enter = false,
    //     count = 0,
    //     warningWrite = "";
      
    //   let
    //     warningWriteNoVacio = "",
    //     arrayString = [] ;
      
    //   $arrayInputsPerfil.forEach(e => {
    //     e.classList.remove("noValidation")
    //   })

    //   $arrayWarningsPerfil.forEach(e => {
    //     e.innerHTML = ""
    //   })
    //   if ($usuario.value == "") {
    //     warningWrite += "No puede dejar el campo de usuario vacío <br>";
    //     enter = true;
    //     count++;
    //     $usuario.classList.add("noValidation")
    //   } else if (!(ExpreUsuario.exec($usuario.value))) {
    //     $usuario.classList.add("noValidation")
    //     if ($usuario.value.length < 6) {
    //       warningWriteNoVacio += "Tu usuario debe tener entre 6 y 30 caracteres. <br>"
    //       enter = true;
    //     } else {
    //       warningWriteNoVacio += "No debe contener caracteres especiales. <br> "
    //       enter = true;
    //     }
    //   }
    //   if ($nombre.value == "") {
    //     warningWrite += "No puede dejar el campo de nombre vacío <br>";
    //     enter = true;
    //     count++;
    //     $nombre.classList.add("noValidation")
    //   } else if (!(expresionNombre.exec($nombre.value))) {
    //     $nombre.classList.add("noValidation")
    //     arrayString.push("nombre");
    //   }
    //   if ($apellido.value == "") {
    //     warningWrite += "No puede dejar el campo de nombre vacío <br>";
    //     enter = true;
    //     count++;
    //     $apellido.classList.add("noValidation")
    //   } else if (!(expresionNombre.exec($apellido.value))) {
    //     arrayString.push("apellido");
    //     $apellido.classList.add("noValidation")
    //   }
    //   if ($correo.value == "") {
    //     warningWrite += "No puede dejar el campo de nombre vacío <br>";
    //     enter = true;
    //     count++;
    //     $correo.classList.add("noValidation")
    //   } else if (!(expresionCorreo.exec($correo.value))) {
    //     warningWriteNoVacio += "Correo electrónico no válido <br>"
    //     enter = true;
    //     $correo.classList.add("noValidation")
    //   }
    //   if ($centro.value == "") {
    //     warningWrite += "No puede dejar el campo de nombre vacío <br>";
    //     enter = true;
    //     count++;
    //     $centro.classList.add("noValidation")
    //   } else if (!(expresionCentro.exec($centro.value))) {
    //     arrayString.push("centro")
    //     $centro.classList.add("noValidation")
    //   }


    //   if (count == 5) {
    //     $arrayInputsPerfil.forEach(e => {
    //       e.classList.add("noValidation")
    //     })
    //     $warningSpanPerfil.innerHTML = "Complete todos los campos";
    //     e.preventDefault();
    //   } else if (enter) {
    //     if(count == 1){
    //       $warningSpanPerfil.innerHTML = "Complete el campo que falta <br>";
    //     } 
    //     if (count > 1) {
    //       $warningSpanPerfil.innerHTML = "Complete los campos que faltan <br>";
    //       $warningSmallNoVacioPerfil.innerHTML = warningWriteNoVacio;
    //       console.log(arrayString.length)
    //       console.info(arrayString)
    //       e.preventDefault()
    //       switch (arrayString.length) {
    //         case 0:
    //           $warningString.innerHTML = ""
    //           break;
    //         case 1:
    //           $warningString.innerHTML = `El ${arrayString[0]} introducido no es inválido`
    //           break;
    //         case 2:
    //           $warningString.innerHTML = `El ${arrayString[0]} y  ${arrayString[1]}  introducidos no son válidos`
    //           break;
    //         case 3:
    //           $warningString.innerHTML = `El ${arrayString[0]},  ${arrayString[1]} y ${arrayString[2]}  introducidos no son válidos`
    //           break;
    //         default:
    //           break;
    //       }
    //     } else {
    //       $warningSmallNoVacioPerfil.innerHTML = warningWriteNoVacio;
    //       e.preventDefault()
    //     }
    //   }

    //   if (!enter) {
    //     $formEditarPerfil.submit();
    //   }
    // })
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
          <form action="/php/ProfileAdmin.php" method="POST" class="cambiarContraseña">
            <input type="hidden" name="call" value="3" />
            <small id="warning"  class="d-block text-center"></small>
            <small class="SmallErrorTwo"  style="color: #d55252;" class="d-block text-center"></small>
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
            <span>Profesional</span> en Tu puedes. <br>

            Al eliminar tu cuenta, dejarás de tener acceso a Tu puedes tanto a través de la web como de las aplicaciones
            móviles. Todos los
            usuarios que hayas dado de alta también serán eliminados por lo que tampoco podrán acceder a la plataforma.
            <br><br>
            Para confirmar la eliminación de la cuenta, escribe en el siguiente recuadro ELIMINAR
          </p>
          <input type="text" class="write-delete">
        </div>
        <div class="modal-footer d-flex  justify-content-center ">
          <form action="/php/ProfileAdmin.php" method="POST">
            <input type="hidden" name="call" value="2" />
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
  <script src="../../../../js/validations/validationProfesionalAdmin.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
</body>

</html>