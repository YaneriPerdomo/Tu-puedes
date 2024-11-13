"use strict";
let $date_difference = document.querySelector('[type="date"]');
let $bottom_date = document.querySelector(".bottom_date");
let $container_modal = document.querySelector(".container-modal");
let $container_modal_2 = document.querySelector(".conjunto");
let $bottom_cerrar = document.querySelector(".bottom_cerrar");
let $body = document.querySelector("body");
document.addEventListener("click", (e) => {
    if (e.target.matches(".bottom_date")) {
        if ($date_difference.value.substring(0, 4).length == 0) {
            alert('Introduzca la fecha');
            return false;
        }
        let date = new Date();
        let result = Number(date.getFullYear()) - Number($date_difference.value.substring(0, 4));
        if (result >= 17) {
            $container_modal.style.display = "none";
            $body.removeChild($body.children[2]);
        }
        else {
            $container_modal_2.innerHTML = `<div class="container__text" style="padding:0rem 1rem"><p>Lo siento, no puedes acceder como administrador puesto de que eres un menor de edad. Ponte en contacto con tus padres,  docentes o terapeutas.</p></div><div style="display: flex;flex-direction: column; align-items: center;"> <button class="bottom_cerrar" style=" cursor: pointer;  background: none; border: 0; font-weight: bold; color: #0d6efd;">OK</button>  </div>`;
        }
    }
    if (e.target.matches(".bottom_cerrar")) {
        window.history.back();
    }
});
