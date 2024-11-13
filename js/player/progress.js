
const $progresoAudio = document.querySelector(".progresoAudio")
const $progresoEtapaUnoAudio = document.querySelector(".progresoEtapaUnoAudio")
const $progresoEtapaDosAudio = document.querySelector(".progresoEtapaDosAudio")
$progresoAudio.addEventListener("click" , e => {
    let texto = "Es tu progreso. Durante todo el aprendizaje"
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto); 
})

$progresoEtapaUnoAudio.addEventListener("click" , e => {
    let texto = "Es tu progreso, con respecto a la etapa número 1, y contiene 14 lecciones"
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

$progresoEtapaDosAudio.addEventListener("click" , e => {
    let texto = "Es tu progreso, con respecto a la etapa número 2, y contiene 13 lecciones"
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})