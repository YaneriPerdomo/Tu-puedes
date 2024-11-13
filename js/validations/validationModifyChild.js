
let $formChilds = document.querySelector("form");

let $user = document.querySelector("[name='usuario']");
let $name = document.querySelector("[name='nombre']")
let $lastName = document.querySelector("[name='apellido']")
let $passWord = document.querySelector("[name='contrasena']")
let $passWordAgain = document.querySelector("[name='contrasenaAgain']")
let ExpreUsuario = new RegExp("[A-Za-z0-9]{6,30}$");
let expresionNombre = new RegExp(`^[A-Za-zÑñÁáÉéÍíÓóÚú]+(?: [A-Za-zÑñÁáÉéÍíÓóÚú]+)*$`);

let $stringValidationR = document.querySelector(".stringValidationR")

let $arrayPassWord = [$passWord, $passWordAgain]
let $arrayInputsC = [$user, $name, $lastName]
let $warningSpanPerfil = document.querySelector(".warningR > small") 
let $warningSmallNoVacioPerfil = document.querySelector(".warningR > .noVacioR") ;
let $arrayWarningsPerfil = [$warningSmallNoVacioPerfil, $warningSpanPerfil, $stringValidationR];

$formChilds.addEventListener("submit", (e) => {
    // prevenir el envio del formulario

    for (let i = 0; i < $arrayWarningsPerfil.length; i++) {    
        $arrayWarningsPerfil[i].innerHTML = "";
    }

    for (let i = 0; i < $arrayPassWord.length; i++) {
        $arrayPassWord[i].classList.remove("noValidation")
        
    }
    
    e.preventDefault();
    let enter = false,
        count = 0,
        warningWrite = "";
      let warningWriteNoVacio = "",
        arrayString = [];
        $arrayInputsC.forEach(el => {
            el.classList.remove("noValidation");
          })
   
          
          if ($passWord.value != $passWordAgain.value) {
            warningWriteNoVacio += "No coinciden las contraseñas <br>";
            enter = true;
            $passWord.classList.add("noValidation");
            $passWordAgain.classList.add("noValidation");
        }

    if($user.value ==  ""){
        warningWrite += "No puede dejar el campo de usuario vacío <br>";
        enter = true;
        count++;
        $user.classList.add("noValidation");
    }else if (!(ExpreUsuario.exec($user.value))) {
        $user.classList.add("noValidation")
        if ($user.value.length < 6) {
          warningWriteNoVacio += "Tu usuario debe tener entre 6 y 10 caracteres. <br>"
          enter = true;
        } else {
          warningWriteNoVacio += "No debe contener caracteres especiales. <br> "
          enter = true;
        }
    }
    if ($name.value == "") {
        warningWrite += "No puede dejar el campo de nombre vacío <br>";
        enter = true;
        count++;
        $name.classList.add("noValidation")
      } else if (!(expresionNombre.exec($name.value))) {
        $name.classList.add("noValidation")
        arrayString.push("nombre");
        enter = true;
      }
      if ($lastName.value == "") {
        warningWrite += "No puede dejar el campo de apellido vacío <br>";
        enter = true;
        count++;
        $lastName.classList.add("noValidation")
      } else if (!(expresionNombre.exec($lastName.value))) {
        arrayString.push("apellido");
        enter = true;
        $lastName.classList.add("noValidation")
      }

      console.info(count)
    if (count == 3) {
    $arrayInputsC.forEach(e => {
      e.classList.add("noValidation")
    })
    $warningSpanPerfil.innerHTML = "Complete todos los campos";
  } else if (enter) { 
    if(count == 1){     
        $warningSpanPerfil.innerHTML = "Complete el campo que falta <br>";
     } 
    if (count > 1 || count == 0) {
        if(count == 0){
        
        }else{
            $warningSpanPerfil.innerHTML = "Complete los campos que faltan <br>";
        }
        $warningSmallNoVacioPerfil.innerHTML = warningWriteNoVacio;
      switch (arrayString.length) {
        case 0:
          return $stringValidationR.innerHTML = ""
          break;
        case 1:
           return $stringValidationR.innerHTML = `El ${arrayString[0]} introducido no es inválido`
          break;
        case 2:
          return $stringValidationR.innerHTML = `El ${arrayString[0]} y  ${arrayString[1]}  introducidos no son válidos`
          break;
        case 3:
          return $stringValidationR.innerHTML = `El ${arrayString[0]},  ${arrayString[1]} y ${arrayString[2]}  introducidos no son válidos`
          break;
        default:
          break;
      }
    } else {
      $warningSmallNoVacioPerfil.innerHTML = warningWriteNoVacio;
    }
  }
  if (!enter) {
    $formChilds.submit();
  }
})  