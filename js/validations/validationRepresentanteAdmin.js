


    //Etiqueta form
    let $formR = document.querySelector(`.formR`);
    //all the inputs on my page
    let $usuario = document.querySelector(`[name="usuario"]`);
    let $nombre = document.querySelector("[name='nombre']");
    let $apellido = document.querySelector("[name='apellido']");
    let $correo = document.querySelector("[name='correo']");
    let ExpreUsuario = new RegExp("[A-Za-z0-9]{6,30}$");
    let expresionCorreo = new RegExp(`[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}`);
    let expresionNombre = new RegExp(`^[A-Za-zÑñÁáÉéÍíÓóÚú]+(?: [A-Za-zÑñÁáÉéÍíÓóÚú]+)*$`);
    let expresionCentro = new RegExp(`^[A-Za-zÑñÁáÉéÍíÓóÚú,.()]+(?: [A-Za-zÑñÁáÉéÍíÓóÚú,.()]+)*$`)
    //Array of the inputs
    let $arrayInputsR = [$usuario, $nombre, $apellido, $correo] ;
    let $warningSpanR = document.querySelector(".warningR > small") || null;
    let $warningSmallNoVaciorR = document.querySelector(".warningR > .noVacioR") || null;
    let $warningStringR = document.querySelector(".stringValidationR") || null;
    let $arrayWarningsR = [$warningSmallNoVaciorR, $warningSpanR, $warningStringR] || null;

    //Evento de la etiqueta form
    $formR.addEventListener("submit", e => {
      // prevent submit
      e.preventDefault();

      // validate inputs
      let enter = false,
        count = 0,
        warningWrite = "";
      let warningWriteNoVacio = "",
        arrayString = [];

      $arrayInputsR.forEach((input) => {
        input.classList.remove("noValidation");
      });

      $arrayWarningsR.forEach(el => {
        el.innerHTML = "";
      });

      if ($usuario.value == "") {
        $usuario.classList.add("noValidation");
        warningWrite += "No puede dejar el campo de usuario vacío <br>";
        enter = true;
        count++;
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
        $nombre.classList.add("noValidation")
        warningWrite += "No puede dejar el campo de nombre vacío <br>";
        enter = true;
        count++;
      } else if (!(expresionNombre.exec($nombre.value))) {
        arrayString.push("nombre");
        $nombre.classList.add("noValidation")
      }
      if ($apellido.value == "") {
        $apellido.classList.add("noValidation")
        warningWrite += "No puede dejar el campo de apellido vacío <br>";
       
        enter = true;
        count++;
      } else if (!(expresionNombre.exec($apellido.value))) {
        arrayString.push("apellido")
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

      if (count == 4) {
        $warningSpanR.innerHTML = "Complete todos los campos";
        $arrayInputsR.forEach(input => {
          input.classList.add("noValidation");
        })
      
      } else if (enter) {
        if(count == 1) {
          $warningSpanR.innerHTML = "Complete el campo que falta <br>";   
        }
        if (count > 1) {
          $warningSpanR.innerHTML = "Complete los campos que faltan <br>";
          $warningSmallNoVaciorR.innerHTML = warningWriteNoVacio;
          console.log(arrayString.length)
          console.info(arrayString)
          switch (arrayString.length) {
            case 0:
              $warningStringR.innerHTML = ""
              break;
            case 1:
              $warningStringR.innerHTML = `El ${arrayString[0]} introducido no es inválido`
              break;
            case 2:
              $warningStringR.innerHTML = `El ${arrayString[0]} y  ${arrayString[1]}  introducidos no son válidos`
              break;
            default:
              break;
          }
        } else {
          $warningSmallNoVaciorR.innerHTML = warningWriteNoVacio;
        }
      }

      if (!enter) {
        console.log("Enviando formulario");
        $formR.submit();
      }
    });