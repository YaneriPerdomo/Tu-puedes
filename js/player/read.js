
//Variables, evento 1
const $selection_week = document.querySelector(".selection_week");
const $week = document.querySelector(".week");
const $selection_month = document.querySelector(".selection_month");
const $month = document.querySelector(".month")
const $month_week = [$week, $month]

document.addEventListener("click", (e) => {
    if (e.target.matches(".siguiente")) {
        let $last = document.querySelector(".last");
        let $first = document.querySelector(".first");
        $first.style.display = "none";
        $last.classList.add("animationBounceOut");
        $last.removeAttribute("style");
        $sonidoSiguiente.play();
    }


    if (e.target.matches(".btnContinua")) {
        let $containerResults = document.querySelector(".containerResults");
        $containerResults.style.display = "none"
    }

    
})

//Evento 2 para verificar el almacenamiento local.
document.addEventListener("DOMContentLoaded", (e) => {
    //Variable
    const $mensaje_actualizacion = document.querySelector(".mensaje_actualizacion")

    //Condiciones
    if (localStorage.getItem("mensaje_actualizacion") === null) {
        localStorage.setItem("mensaje_actualizacion", "show")
    }
    if (localStorage.getItem("mensaje_actualizacion") == "hidden") {
        $mensaje_actualizacion.style.display = "none"
    }
  
})

//Evento 3 para eliminar el mensaje que ofrece la página para avisar al usuario que ha sido actualizada.
//Variables, evento 3
let $mensaje_actualizacion__button = document.querySelector(".mensaje_actualizacion--button");
let $eliminar_hijo = document.querySelector(".col-xl-10 ");
$mensaje_actualizacion__button.addEventListener("click", (e) => {
    const $mensaje_actualizacion = document.querySelector(".mensaje_actualizacion");
    $mensaje_actualizacion.setAttribute("mensaje_actualizacion", "hidden")
    localStorage.setItem("mensaje_actualizacion", "hidden")
    $eliminar_hijo === null || $eliminar_hijo === void 0 ? void 0 : $eliminar_hijo.removeChild($eliminar_hijo.children[0]);
});

//Variables, evento 4
const $voz_no_acceso = document.querySelector(".voz_no_acceso");
const $voz_comenzar = document.querySelector(".voz_comenzar");
const $voz_mensaje_actualizacion = document.querySelector(".mensaje__actualizacion--audio");
const $etapaUnoSeccionUno_audio = document.querySelector(".etapaUnoSeccionUno_audio");
const $etapaUnoSeccionDos_audio = document.querySelector(".etapaUnoSeccionDos_audio");
const $etapaUnoSeccionUnoL1_audio = document.querySelector(".etapaUnoSeccionUnoL1_audio");
const $etapaUnoSeccionUnoL2_audio = document.querySelector(".etapaUnoSeccionUnoL2_audio");
const $etapaUnoSeccionUnoL3_audio = document.querySelector(".etapaUnoSeccionUnoL3_audio");
const $etapaUnoSeccionUnoL4_audio = document.querySelector(".etapaUnoSeccionUnoL4_audio");
const $etapaUnoSeccionUnoL5_audio = document.querySelector(".etapaUnoSeccionUnoL5_audio");
const $etapaUnoSeccionUnoL6_audio = document.querySelector(".etapaUnoSeccionUnoL6_audio")
const $etapaUnoSeccionUnoL7_audio = document.querySelector(".etapaUnoSeccionUnoL7_audio");
const $etapaUnoSeccionUnoLFinal_audio = document.querySelector(".etapaUnoSeccionUnoLFinal_audio");
const $etapaUnoSeccionDosL1_audio = document.querySelector(".etapaUnoSeccionDosL1_audio");
const $etapaUnoSeccionDosL2_audio = document.querySelector(".etapaUnoSeccionDosL2_audio");
const $etapaUnoSeccionDosL3_audio = document.querySelector(".etapaUnoSeccionDosL3_audio")
const $etapaUnoSeccionDosL4_audio = document.querySelector(".etapaUnoSeccionDosL4_audio");
const $etapaUnoSeccionDosL5_audio = document.querySelector(".etapaUnoSeccionDosL5_audio");
const $etapaUnoSeccionDosLFinal_audio = document.querySelector(".etapaUnoSeccionDosLFinal_audio");
const $guiaAudio = document.querySelector(".guiaAudio");
const $revisar_audio = document.querySelector(".revisar_audio");
const $progreso_audio = document.querySelector(".progreso_audio")

$progreso_audio.addEventListener("click", e => {
    let texto = "Es tu Progreso";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
}

)

$revisar_audio.addEventListener("mouseover", e => {
    let texto = "REVISAR";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})
//Evento 4 (conjunto) sobre voz artificial, esto más que nada para usuarios que no saben leer.
$voz_no_acceso.addEventListener("click", e => {
    let texto = "No podrás ingresar a esta lección, hasta que hayas completado la anterior.";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$voz_comenzar.addEventListener("click", e => {
    let texto = "Vamos a comenzar, ¡¡¡Sè que tu puedes!!!";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$voz_mensaje_actualizacion.addEventListener("click", e => {
    let texto = "¿Notas algo Diferente? Hemos actualizado la página, para que el aprendizaje sea mucho mejor";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$etapaUnoSeccionUno_audio.addEventListener("click", e => {
    let texto = "Etapa 1, Seccion 1. En la parte inferior están todas las lecciones";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$etapaUnoSeccionDos_audio.addEventListener("click", e => {
    let texto = "Etapa 1, Seccion 2. En la parte inferior están todas las lecciones";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$etapaUnoSeccionUnoL1_audio.addEventListener("click", e => {
    let texto = "Leccion numero uno";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$etapaUnoSeccionUnoL2_audio.addEventListener("click", e => {
    let texto = "Leccion numero dos";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$etapaUnoSeccionUnoL3_audio.addEventListener("click", e => {
    let texto = "Leccion numero tres";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$etapaUnoSeccionUnoL4_audio.addEventListener("click", e => {
    let texto = "Leccion numero 4";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$etapaUnoSeccionUnoL5_audio.addEventListener("click", e => {
    let texto = "Leccion numero 5";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$etapaUnoSeccionUnoL6_audio.addEventListener("click", e => {
    let texto = "Leccion numero 6";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$etapaUnoSeccionUnoL7_audio.addEventListener("click", e => {
    let texto = "Leccion numero 7";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$etapaUnoSeccionUnoLFinal_audio.addEventListener("click", e => {
    let texto = "Leccion final";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$etapaUnoSeccionDosL1_audio.addEventListener("click", e => {
    let texto = "Leccion numero uno";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$etapaUnoSeccionDosL2_audio.addEventListener("click", e => {
    let texto = "Leccion numero dos ";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$etapaUnoSeccionDosL3_audio.addEventListener("click", e => {
    let texto = "Leccion numero tres ";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$etapaUnoSeccionDosL4_audio.addEventListener("click", e => {
    let texto = "Leccion numero 4 ";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$etapaUnoSeccionDosL5_audio.addEventListener("click", e => {
    let texto = "Leccion numero 5 ";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$etapaUnoSeccionDosLFinal_audio.addEventListener("click", e => {
    let texto = "Leccion Final ";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})