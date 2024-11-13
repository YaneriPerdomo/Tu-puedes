
//Validar la ventana modal para cambiar la contraseña vieja a una nueva 
//Etiqueta form
let $form = document.querySelector(".cambiarContraseña");
//all the inputs on my page
let $contraseñaVieja = document.querySelector("[name = 'oldcontrasena']");
let $contrasenaNueva = document.querySelector("[name='contrasena'");
let $otraVezContrasenaNueva = document.querySelector("[name='contrasenaval']")

//Array of the inputs
let $arrayInputs = [$contrasenaNueva, $contraseñaVieja, $otraVezContrasenaNueva];
let $warningSmall = document.querySelector("form > small")
let $warningSmallTwo = document.querySelector("form > .SmallErrorTwo");
let $arrayWarnings = [$warningSmall, $warningSmallTwo]

//Evento de la etiqueta form
$form.addEventListener("submit", e => {
  // prevent submit
  e.preventDefault();

  let repetirContraseña = false;
  let enter = false,
    count = 0,
    warningWrite = "";
  let warningWriteNoVacio = "",
    arrayString = [];

  let contrasenaBooleano = false;

  $arrayInputs.forEach(e => {
    e.classList.remove("noValidation")
  });

  $arrayWarnings.forEach(e => {
    e.innerHTML = ""
  });

  if ($contraseñaVieja.value == "") {
    warningWrite += "No puede dejar el campo de nombre vacío <br>";
    enter = true;
    count++;
    $contraseñaVieja.classList.add("noValidation");
  }
  if ($otraVezContrasenaNueva.value == "") {
    warningWrite += "No puede dejar el campo de nombre vacío <br>";
    enter = true;
    count++;
    $otraVezContrasenaNueva.classList.add("noValidation");
  }

  if ($contrasenaNueva.value == "") {
    warningWrite += "No puede dejar el campo de nombre vacío <br>";
    enter = true;
    count++;
    $contrasenaNueva.classList.add("noValidation");
  }
  
  if ($contraseñaVieja.value == $contrasenaNueva.value) {
    warningWriteNoVacio += "Por su seguridad, no utilice la misma contraseña. <br>";
    enter = true;
    $otraVezContrasenaNueva.classList.add("noValidation");
    $contrasenaNueva.classList.add("noValidation");
    repetirContraseña = true;
  }
  if ($contrasenaNueva.value != $otraVezContrasenaNueva.value) {
    warningWriteNoVacio += "No coinciden las contraseñas <br>";
    enter = true;
    $contrasenaNueva.classList.add("noValidation");
    $otraVezContrasenaNueva.classList.add("noValidation");
    contrasenaBooleano = true;
  }

  if (count == 3) {
    $arrayInputs.forEach(input => {
      input.classList.add("noValidation");
    });

    $warningSmall.innerHTML = "Complete todos los campos";
  } else if (enter) {
    if (count == 1) {
       if (repetirContraseña) {
        return $warningSmall.innerHTML = "Por su seguridad, no utilice la misma contraseña. <br>";
      } else if (contrasenaBooleano) {
        return $warningSmall.innerHTML = warningWriteNoVacio;
      }
      $warningSmallTwo.innerHTML = "Complete el campo que falta <br>";
      $warningSmall.innerHTML = warningWriteNoVacio;
    } else if (count == 2) {
      if (repetirContraseña) {
        return $warningSmall.innerHTML = "Por su seguridad, no utilice la misma contraseña. <br>";
      } else if (contrasenaBooleano) {
        return $warningSmall.innerHTML = warningWriteNoVacio;
      }
      $warningSmallTwo.innerHTML = "Complete los campos que faltan <br>";
      $warningSmall.innerHTML = warningWriteNoVacio;
    } else {
      $warningSmall.innerHTML = warningWriteNoVacio
    }
  }

  if (!enter) {
    $form.submit();
  }
});