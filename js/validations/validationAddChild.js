
let $formChilds = document.querySelector("form");

let $user = document.querySelector("[name='usuario']");
let $name = document.querySelector("[name='nombre']")
let $lastName = document.querySelector("[name='apellido']")
let $passWord = document.querySelector("[name='contrasena']")
let $passWordAgain = document.querySelector("[name='contrasenaAgain']")
let ExpreUsuario = new RegExp("[A-Za-z0-9]{6,30}$");
let expresionNombre = new RegExp(`^[A-Za-zÑñÁáÉéÍíÓóÚú]+(?: [A-Za-zÑñÁáÉéÍíÓóÚú]+)*$`);

let $stringValidationR = document.querySelector(".stringValidationR")

let $arrayInputsC = [$user, $name, $lastName, $passWord, $passWordAgain]
let $warningSpanPerfil = document.querySelector(".warningR > small")
let $warningSmallNoVacioPerfil = document.querySelector(".warningR > .noVacioR");
let $arrayWarningsPerfil = [$warningSmallNoVacioPerfil, $warningSpanPerfil, $stringValidationR];

$formChilds.addEventListener("submit", (e) => {
    // prevenir el envio del formulario

    e.preventDefault();
    for (let i = 0; i < $arrayWarningsPerfil.length; i++) {
        $arrayWarningsPerfil[i].innerHTML = ""
    }

    let enter = false,
        count = 0,
        warningWrite = "";
    let warningWriteNoVacio = "",
        arrayString = [];
    let contrasenaBooleano = false;
    $arrayInputsC.forEach(el => {
        el.classList.remove("noValidation");
    })

    if ($passWord.value == "") {
        warningWrite += "No puede dejar el campo de contraseña vacío <br>";
        enter = true;
        count++;
        $passWord.classList.add("noValidation");
    }

    if ($passWordAgain.value == "") {
        warningWrite += "No puede dejar el campo de contraseña vacío <br>";
        enter = true;
        count++;
        $passWordAgain.classList.add("noValidation");

    }

    if ($passWord.value != $passWordAgain.value) {
        warningWriteNoVacio += "No coinciden las contraseñas <br>";
        enter = true;
        $passWord.classList.add("noValidation");
        $passWordAgain.classList.add("noValidation");
        contrasenaBooleano = true;
    }

    if ($user.value == "") {
        warningWrite += "No puede dejar el campo de usuario vacío <br>";
        enter = true;
        count++;
        $user.classList.add("noValidation");

    } else if (!(ExpreUsuario.exec($user.value))) {
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
    }
    if ($lastName.value == "") {
        warningWrite += "No puede dejar el campo de apellido vacío <br>";
        enter = true;
        count++;
        $lastName.classList.add("noValidation")
    } else if (!(expresionNombre.exec($lastName.value))) {
        arrayString.push("apellido");
        $lastName.classList.add("noValidation")
    }
    if (count == 5) {
        $arrayInputsC.forEach(e => {
            e.classList.add("noValidation")
        })
        $warningSpanPerfil.innerHTML = "Complete todos los campos";
    } else if (enter) {
        if (count == 1) {

            $warningSpanPerfil.innerHTML = "Complete el campo que falta <br>";
        }
        if (count > 1) {

            $warningSpanPerfil.innerHTML = "Complete los campos que faltan <br>";
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


function validarFechaN() {
    let inputN = document.getElementById('fechaNacimiento');
    const fechaActual = new Date();
    const fechaSeleccionada = new Date(inputN.value);
    if (fechaSeleccionada > fechaActual) {
        alert('Por favor, seleccione una fecha válida.');
        inputN.value = '';
    }
}
function validarFechaV() {
    let inputV = document.getElementById('fechaValidez');
    const fechaActual = new Date();
    const fechaSeleccionada = new Date(inputV.value);
    if (fechaSeleccionada < fechaActual) {
        alert('Por favor, seleccione una fecha válida.');
        inputV.value = '';
    }
}