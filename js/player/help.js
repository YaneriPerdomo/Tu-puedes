const $preguntas_fs_audio = document.querySelector(".preguntas_fs_audio")
const $pregunta_1_audio = document.querySelector(".pregunta_1_audio")
const $pregunta_2_audio = document.querySelector(".pregunta_2_audio")
const $pregunta_3_audio = document.querySelector(".pregunta_3_audio")
const $pregunta_4_audio = document.querySelector(".pregunta_4_audio")
$preguntas_fs_audio.addEventListener("click" , e => {
    let texto = "Preguntas Frecuentes";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto); 
})

$pregunta_2_audio.addEventListener("click" , e => {
    let texto = "¿Cómo puedo ver mi progreso dentro de mi aprendizaje?. ¡Es fácil! Depende del dispositivo, pero si lo estás usando en una computadora o tableta, a la derecha puedes ver tu progreso, para más detalles puedes presionar el botón, revisar, en ese mismo botón se cargará una nueva ventana mostrando tu progreso completo, igual a tu progreso en cada etapa que hayas completado. Si lo estás usando en un teléfono móvil, verás tu nombre de usuario en la parte superior derecha, así que tócalo y aparecerá allí"
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto); 
})

$pregunta_1_audio.addEventListener("click" , e => {
    let texto = "¿Por qué no puedo editar mi perfil?. Recuerda que tu administrador o mejor dicho tu representante o docente pudo crear tu usuario, por lo que solo él puede editar tu perfil.";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto); 
})

$pregunta_3_audio.addEventListener("click" , e => {
    let texto = "¿Qué es la tabla de calificación?. La tabla de calificación incluye a los mejores usuarios que han ganado la mayoría de las estrellas cada semana, y mes en cada una de las lecciones que hacen."
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto); 
})

$pregunta_4_audio.addEventListener("click" , e => {
    let texto = "¿Cómo elimino mi usuario?.Recuerda que tu administrador o mejor dicho tu representante o docente pudo crear tu usuario, por lo que solo tendrá esa autorización, de igual manera cada usuario dentro del aprendizaje, tiene su período de vigencia."
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto); 
})