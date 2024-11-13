//Etiqueta form
let $formEditarPerfil = document.querySelector(`[class="container__main--perfil"]`);
//all the inputs on my page
let $usuario = document.querySelector(`[name="usuario"]`) || "0";
let $nombre = document.querySelector("[name='nombre']") || "0";
let $apellido = document.querySelector("[name='apellido']") || "0";
let $correo = document.querySelector("[name='correo']") || "0";
let $centro = document.querySelector("[name = 'centro']") || "0";

let ExpreUsuario = new RegExp("[A-Za-z0-9]{6,30}$");
let expresionCorreo = new RegExp(`[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}`);
let expresionNombre = new RegExp(`^[A-Za-zÑñÁáÉéÍíÓóÚú]+(?: [A-Za-zÑñÁáÉéÍíÓóÚú]+)*$`);
let expresionCentro = new RegExp(`^[A-Za-zÑñÁáÉéÍíÓóÚú,.()]+(?: [A-Za-zÑñÁáÉéÍíÓóÚú,.()]+)*$`)
//Array of the inputs
let $arrayInputsPerfil = [$usuario, $nombre, $apellido, $correo, $centro]
let $warningSpanPerfil = document.querySelector(".warningPerfil > small") 
let $warningSmallNoVacioPerfil = document.querySelector(".warningPerfil > .noVacio") ;
let $warningString = document.querySelector(".stringValidation") ;
let $arrayWarningsPerfil = [$warningSmallNoVacioPerfil, $warningSpanPerfil, $warningString];

//Evento de la etiqueta form
$formEditarPerfil.addEventListener("submit", e => {
  // prevenir el envio del formulario
  e.preventDefault();

  //Variables
  let enter = false,
    count = 0,
    warningWrite = "";
  let warningWriteNoVacio = "",
    arrayString = [];
  $arrayInputsPerfil.forEach(e => {
    e.classList.remove("noValidation");
  })

  $arrayWarningsPerfil.forEach(e => {
    e.innerHTML = "";
  });

  if ($usuario.value == "") {
    warningWrite += "No puede dejar el campo de usuario vacío <br>";
    enter = true;
    count++;
    $usuario.classList.add("noValidation")
  } else if (!(ExpreUsuario.exec($usuario.value))) {
    $usuario.classList.add("noValidation")
    if ($usuario.value.length < 6) {
      warningWriteNoVacio += "Tu usuario debe tener entre 6 y 30 caracteres. <br>"
      enter = true;
    } else {
      warningWriteNoVacio += "No debe contener caracteres especiales. <br> "
      enter = true;
    }
  }
  if ($nombre.value == "") {
    warningWrite += "No puede dejar el campo de nombre vacío <br>";
    enter = true;
    count++;
    $nombre.classList.add("noValidation")
  } else if (!(expresionNombre.exec($nombre.value))) {
    $nombre.classList.add("noValidation")
    arrayString.push("nombre");
  }
  if ($apellido.value == "") {
    warningWrite += "No puede dejar el campo de apellido vacío <br>";
    enter = true;
    count++;
    $apellido.classList.add("noValidation")
  } else if (!(expresionNombre.exec($apellido.value))) {
    arrayString.push("apellido");
    $apellido.classList.add("noValidation")
  }
  if ($correo.value == "") {
    warningWrite += "No puede dejar el campo de correo electrónico vacío <br>";
    enter = true;
    count++;
    $correo.classList.add("noValidation")
  } else if (!(expresionCorreo.exec($correo.value))) {
    warningWriteNoVacio += "Correo electrónico no válido <br>"
    enter = true;
    $correo.classList.add("noValidation")
  }
  if ($centro.value == "") {
    warningWrite += "No puede dejar el campo de centro vacío <br>";
    enter = true;
    count++;
    $centro.classList.add("noValidation")
  } else if (!(expresionCentro.exec($centro.value))) {
    arrayString.push("centro")
    $centro.classList.add("noValidation")
  }


  if (count == 5) {
    $arrayInputsPerfil.forEach(e => {
      e.classList.add("noValidation")
    })
    $warningSpanPerfil.innerHTML = "Complete todos los campos";
  } else if (enter) {
    if(count == 1){
      $warningSpanPerfil.innerHTML = "Complete el campo que falta <br>";
    } 
    if (count > 1) {
      $warningSpanPerfil.innerHTML = "Complete los campos que faltan <br>";
      $warningSmallNoVacioPerfil.innerHTML = warningWriteNoVacio;

      switch (arrayString.length) {
        case 0:
          $warningString.innerHTML = ""
          break;
        case 1:
          $warningString.innerHTML = `El ${arrayString[0]} introducido no es inválido`
          break;
        case 2:
          $warningString.innerHTML = `El ${arrayString[0]} y  ${arrayString[1]}  introducidos no son válidos`
          break;
        case 3:
          $warningString.innerHTML = `El ${arrayString[0]},  ${arrayString[1]} y ${arrayString[2]}  introducidos no son válidos`
          break;
        default:
          break;
      }
    } else {
      $warningSmallNoVacioPerfil.innerHTML = warningWriteNoVacio;
    }
  }

  if (!enter) {
    $formEditarPerfil.submit();
  }
})
