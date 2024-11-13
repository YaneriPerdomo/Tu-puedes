let $rolProfesional = document.querySelector("#Professional");
let $rolRepresentante = document.querySelector("#Representante")
$rolProfesional.addEventListener("click", e => {
    $rolRepresentante.setAttribute("data-representante", false)
    $rolProfesional.setAttribute("data-profesional", true)
})
$rolRepresentante.addEventListener("click", e => {
    $rolRepresentante.setAttribute("data-representante", true)
    $rolProfesional.setAttribute("data-profesional", false)
})
//Etiqueta form
let $form = document.querySelector("form");
//all the inputs on my page
let $usuario = document.querySelector(`[name="usuario"]`);
let $nombre = document.querySelector("[name='nombre']");
let $apellido = document.querySelector("[name='apellido']");
let $correo = document.querySelector("[name='correo']");
let $centro = document.querySelector("[name = 'centro']");
let $contrasena = document.querySelector("[name='contrasena'");
let $otraVezContrasena = document.querySelector("[name='contrasena_inicio_confirmar']")
let ExpreUsuario = new RegExp("[A-Za-z0-9]{6,30}$");
let expresionCorreo = new RegExp(`[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}`);
let expresionNombre = new RegExp(`^[A-Za-zÑñÁáÉéÍíÓóÚú]+(?: [A-Za-zÑñÁáÉéÍíÓóÚú]+)*$`);
let expresionCentro = new RegExp(`^[A-Za-zÑñÁáÉéÍíÓóÚú,.()]+(?: [A-Za-zÑñÁáÉéÍíÓóÚú,.()]+)*$`)
//Array of the inputs
let $arrayInputs = [$usuario, $nombre, $apellido, $correo, $centro, $contrasena, $otraVezContrasena]
let $warningSpan = document.querySelector("#warning > small")
let $warningSmallNoVacio = document.querySelector("#warning > .noVacio");
let $warningString = document.querySelector(".stringValidation");
let $arrayWarnings = [$warningSmallNoVacio, $warningSpan,$warningString];

//Evento de la etiqueta form
$form.addEventListener("submit", e => {
    let enter = false,
        count = 0,
        warningWrite = "";
    warningWriteNoVacio = "",
        arrayString = [];
        $arrayInputs.forEach(e => {
                e.classList.remove("noValidation")
            })
    if ($rolProfesional.getAttribute("data-profesional") == "true") {
        
        $arrayWarnings.forEach(e => {
            e.innerHTML = ""
        })
        if ($usuario.value == "") {
            warningWrite += "No puede dejar el campo de usuario vacío <br>";
            enter = true;
            count++;
            $usuario.classList.add("noValidation")
        }else if(!(ExpreUsuario.exec($usuario.value))) {
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
            warningWrite += "No puede dejar el campo de nombre vacío <br>";
            enter = true;
            count++;
            $apellido.classList.add("noValidation")
        } else if (!(expresionNombre.exec($apellido.value))) {
            arrayString.push("apellido");
            $apellido.classList.add("noValidation")
        }
        if ($correo.value == "") {
            warningWrite += "No puede dejar el campo de nombre vacío <br>";
            enter = true;
            count++;
            $correo.classList.add("noValidation")
        } else if (!(expresionCorreo.exec($correo.value))) {
            warningWriteNoVacio += "Correo electrónico no válido <br>"
            enter = true;
            $correo.classList.add("noValidation")
        }
        if ($centro.value == "") {
            warningWrite += "No puede dejar el campo de nombre vacío <br>";
            enter = true;
            count++;
            $centro.classList.add("noValidation")
        } else if (!(expresionCentro.exec($centro.value))) {
            arrayString.push("centro")
            $centro.classList.add("noValidation")
        }
        if ($otraVezContrasena.value == "") {
            warningWrite += "No puede dejar el campo de nombre vacío <br>";
            enter = true;
            count++;
            $otraVezContrasena.classList.add("noValidation")
        }
        if ($contrasena.value == "") {
            warningWrite += "No puede dejar el campo de nombre vacío <br>";
            enter = true;
            count++;
            $contrasena.classList.add("noValidation")
        }

        if ($contrasena.value != $otraVezContrasena.value) {
            warningWriteNoVacio += "No coinciden las contraseñas <br>";
            enter = true;
            $contrasena.classList.add("noValidation")
            $otraVezContrasena.classList.add("noValidation")
        }

        if (count == 7) {
            $arrayInputs.forEach(e => {
                e.classList.add("noValidation")
            })
            $warningSpan.innerHTML = "Complete todos los campos";
            e.preventDefault()
        } else if (enter) {
            if (count > 1) {
                e.preventDefault()
                $warningSpan.innerHTML = "Complete los campos que faltan <br>";
                $warningSmallNoVacio.innerHTML = warningWriteNoVacio;
                console.log(arrayString.length)
                console.info(arrayString)
                switch (arrayString.length) {
                    case 0:
                        $warningString.innerHTML =""
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
                $warningSmallNoVacio.innerHTML = warningWriteNoVacio;
                e.preventDefault()
            }
        }
    } else {
       
        $arrayWarnings.forEach(e => {
            e.innerHTML = ""
        })
        if ($usuario.value == "") {
            $usuario.classList.add("noValidation")
            warningWrite += "No puede dejar el campo de usuario vacío <br>";
            enter = true;
            count++;
        }else if(!(ExpreUsuario.exec($usuario.value))) {
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
            warningWrite += "No puede dejar el campo de nombre vacío <br>";
            enter = true;
            count++;
        } else if (!(expresionNombre.exec($apellido.value))) {
            arrayString.push("apellido")
            $apellido.classList.add("noValidation")
        }
        if ($correo.value == "") {
            warningWrite += "No puede dejar el campo de nombre vacío <br>";
            enter = true;
            count++;
            $correo.classList.add("noValidation")
        } else if (!(expresionCorreo.exec($correo.value))) {
            warningWriteNoVacio += "Correo electrónico no válido <br>"
            enter = true;
            $correo.classList.add("noValidation")
        }
        if ($otraVezContrasena.value == "") {
            warningWrite += "No puede dejar el campo de nombre vacío <br>";
            enter = true;
            count++;
            $otraVezContrasena.classList.add("noValidation")
        }
        if ($contrasena.value == "") {
            warningWrite += "No puede dejar el campo de nombre vacío <br>";
            enter = true;
            count++;
            $contrasena.classList.add("noValidation")

        }

        if ($contrasena.value != $otraVezContrasena.value) {
            warningWriteNoVacio += "No coinciden las contraseñas <br>";
            enter = true;
            $otraVezContrasena.classList.add("noValidation")
            $contrasena.classList.add("noValidation")

        }

        if (count == 6) {
            $arrayInputs.forEach(e => {
                e.classList.add("noValidation")
            })
            $warningSpan.innerHTML = "Complete todos los campos";
            e.preventDefault()
        } else if (enter) {
            if (count > 1) {
                e.preventDefault()
                $warningSpan.innerHTML = "Complete los campos que faltan <br>";
                $warningSmallNoVacio.innerHTML = warningWriteNoVacio;
                console.log(arrayString.length)
                console.info(arrayString)
                switch (arrayString.length) {
                    case 0:
                        $warningString.innerHTML =""
                        break;
                    case 1:
                        $warningString.innerHTML = `El ${arrayString[0]} introducido no es inválido`
                        break;
                    case 2:
                        $warningString.innerHTML = `El ${arrayString[0]} y  ${arrayString[1]}  introducidos no son válidos`
                        break;
                    default:
                        break;
                }
            } else {
                $warningSmallNoVacio.innerHTML = warningWriteNoVacio;
                e.preventDefault()
            }
        }
    }
})

console.log("Yane perdomo");
const d = document;
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const form = document.querySelector("form");
const warning = document.querySelector("#warning > span");
const contrasena = document.getElementById("contrasena");
const submit = document.getElementsByClassName("crear_cuenta");
const usuario = document.getElementById("usuario");
const contrasena_2 = document.getElementById("contrasena_2");
//Evento que permitarà lo siguiente: La persona selecionarà su rol correspondiente.
d.addEventListener("click", (e) => {
    //Variables
    let representante = document.querySelector("#Representante");
    let type_radio = [representante];
    let container__lugar_trabajo = document.querySelector(".container__lugar_trabajo");
    let $cargos = document.querySelector(".cargos");
    let $afiliaciones = document.querySelector(".afiliaciones");
    let $Professional_border = document.querySelector("#Professional");
    let $rol = document.querySelector("#rol");
    //Loop
    /*
    for(i = 0; i < type_radio.length; i++){
        type_radio[i].classList.remove("border-b")
    }*/
    //Condicion-Dom
    if (e.target.matches("#Representante")) {
        container__lugar_trabajo.classList.add("none");
        representante.classList.add("border-b");
        $Professional_border.classList.remove("border-b");
        $afiliaciones.classList.remove("none");
        $cargos.classList.add("none");
        $rol.value = "2";
        $arrayInputs.forEach(e => {
            e.classList.remove("noValidation");
            e.value = ""
        })
        $arrayWarnings.forEach(e => {
            e.innerHTML = ""
        })
    }
    //Condicion-Dom--(type assertion) == (<type>).
    if (e.target.matches("#Professional")) {
        $Professional_border.classList.add("border-b");
        representante.classList.remove("border-b");
        $afiliaciones.classList.add("none");
        $cargos.classList.remove("none");
        container__lugar_trabajo.classList.remove("none");
        $rol.value = "1";
        $arrayInputs.forEach(e => {
            e.classList.remove("noValidation");
            e.value = ""
        })
        $arrayWarnings.forEach(e => {
            e.innerHTML = ""
        })
    }
    //Condicion-Dom
});