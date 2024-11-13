/*Variables */
const $flotando = document.querySelector(".presentation-animada > section");
const $floating_animation = document.querySelector(".animated")
const $bi_volumen =document.querySelector(".logo")
const $boton_sonido = document.querySelector("#boton_sonido");
const $musica =document.querySelector(".sound_musica")

/*Espere 2 segundos y luego se agregará la animación infinita del logo.*/
setTimeout(() => {
    $flotando.removeAttribute("class")
    $flotando.setAttribute("class", "floating")
}, 2000);

/*Funcion para que el usuario pueda activar el audio y al mismo tiempo guardarlo en el almacenamiento local. */
function sonido_fondo () {
    const musica_true = ()=> {
    $musica.play();
    $boton_sonido.setAttribute("data-sonido", "false");
    $boton_sonido.classList.replace("bi-volume-mute","bi-volume-up")
    localStorage.setItem("audio" , "true")
    }

    const musica_false = () => {
        $musica.pause();
        $boton_sonido.setAttribute("data-sonido", "true");
        $boton_sonido.classList.replace("bi-volume-up","bi-volume-mute" )
        localStorage.setItem("audio" , "false")
    }

    $bi_volumen.addEventListener("click" , (e) => {

    if($boton_sonido.dataset.sonido == "true"){
        musica_true()
        }else{
        musica_false()
        }
    });

    /*
    document.addEventListener("DOMContentLoaded", (e) => {
        console.log(localStorage.getItem("theme"))
        if(localStorage.getItem("theme") === null){
            localStorage.setItem("theme", "true")
        }
        if(localStorage.getItem("theme") == "true"){
            musica_true()
        }
        if(localStorage.getItem("theme") === "false"){
            musica_false()
        }
    })
    */
}

sonido_fondo()

//Estos dos eventos sirven para activar el sonido correspondiente en cada uno de los botones.

//Boton comenzar
const $botton_comenzar =document.querySelector("#pot")
$botton_comenzar.addEventListener("mousemove" , e=> {
       const $sound_button =document.querySelector(".sound-button")
        $sound_button.play()
})
//Boton salir
const $soundButtonSalir = document.querySelector(".soundButtonSalir")
const $button_salir =document.querySelector(".btn_salir")
$button_salir.addEventListener("mousemove", e => {
    $soundButtonSalir.play()
})


