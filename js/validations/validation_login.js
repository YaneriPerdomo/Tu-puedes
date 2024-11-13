"use strict";
const form_inicio = document.getElementById("form-inicio");
const warning_span = document.querySelector("#warning_inicio > span");
const warning_inicio = document.getElementById("warning_inicio");
const usuario_inicio = document.getElementById("usuario_inicio");
const contrasena_inicio_confimar = document.getElementById("contrasena_inicio_confirmar") || null;
const contrasena_inicio = document.getElementById("contrasena_inicio");
let tres_campos_rojos = [usuario_inicio, contrasena_inicio, /*contrasena_inicio_confimar */];
warning_inicio.style.display = "none";
const $contrasena = document.querySelector("#contrasena_inicio");
const $contrasenaAgain = document.querySelector("#contrasena_inicio_confirmar");
$contrasena.addEventListener("input", e => {
    console.log(e.target.value)
    $contrasenaAgain.value = e.target.value
})

document.addEventListener("DOMContentLoaded", e => {
    $contrasenaAgain.value = $contrasena.value

})

document.addEventListener("DOMContentLoaded", e => {
    usuario_inicio.innerHTML = "";
    contrasena_inicio.innerHTML = "";
    contrasena_inicio_confimar.innerHTML = ""
})
form_inicio.addEventListener("submit", (e) => {
    for (let i = 0; i < tres_campos_rojos.length; i++) {
        tres_campos_rojos[i].classList.remove("noValidation");
    }
    let entrar = false;
    let warning_white = "";
    let contador = 0;
    
    if (contrasena_inicio.value == "") {
        warning_white += "No puede dejar el campo contraseña vacìo <br>";
        entrar = true;
        contador++;
        contrasena_inicio.classList.add("noValidation");
    }
   
    if (usuario_inicio.value == "") {
        warning_white += "No puede dejar el campo de usuario vacío <br>";
        entrar = true;
        contador++;
        usuario_inicio.classList.add("noValidation");
    }
    if (contador == 2) {
        warning_span.innerHTML = "Complete todos los campos";
        warning_inicio.classList.add("warning_not_vali");
        warning_inicio.style.display = "block";
        e.preventDefault();
    }
    else if (entrar == true) {
        warning_span.innerHTML = warning_white;
        warning_inicio.classList.add("warning_not_vali");
        warning_inicio.style.display = "block";
        e.preventDefault();
    }
});
