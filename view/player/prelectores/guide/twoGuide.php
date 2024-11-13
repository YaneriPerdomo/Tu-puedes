<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guia | Tú Puedes</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="../../../../css/reset.css">
    <link rel="stylesheet" href="../../../../css/efectos_siempre/scrollbar.css">
    <link rel="icon" type="image/x-icon" href="../../../../img/icono/icono.ico">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="../../../../css/player/help.css">
    <link rel="stylesheet" href="../../../../css/player/responsive.css">
    <link rel="stylesheet" href="../../../../css/player/guides.css">
</head>

<body style="background-image: url(../../../../img/player/fondo.png); height: 100vh" class="d-flex flex-column">
    <div data-include="../../../includeHTMLsinPhp/player/guides/header.php"></div>
    <main style="flex-grow: 2" class="mb-5">
        <div class="container-xxl w-100 h-100 mt-5"
            style="    background: white;border-radius: 0.5rem;padding: 1rem;border: 1px solid rgb(239, 239, 239);box-shadow: 0px 1px 2px rgb(215 215 215);">
            <h3><b>Guía de la etapa 1, sección 2</b></h3>
            <p class="text-secondary">A continuación, se presentan algunas lecciones a modo de ejemplo explicativo:</p>
            <hr>
            <section>
                <h5 class="textOrange"><b><i class="bi bi-volume-up me-1  sound "
                            data-talk="Completa la palabra...¡Cazadores de palabras! encuentren la parte oculta de la palabra, y júntenla."></i>1.
                        Completa la palabra.</b></h5>
                <p class="text-secondary"><b>¡Cazadores de palabras!</b> Encuentren la parte oculta de la palabra, y júntenla.
                </p>
                <div class="row text-center">
                    <div class="col-12 mt-4 d-flex justify-content-center">
                        <strong class="palabra box">
                            <span class="one">Pe</span>
                            <span class="two">__</span>
                            <span class="tres">ta</span>
                        </strong>
                    </div>
                    <div class="containerColButton mt-2">
                        <div class="wordButtons">
                            <button style="  width: 3rem;" data-example='one'>lo</button>
                            <button style="  width: 3rem;" data-example='one'>10</button>
                            <button style="  width: 3rem;" data-example='one'>0l</button>
                            <button style="  width: 3rem;" data-example='one'>li</button>
                            <button style="  width: 3rem;" data-example='one'>lu</button>
                        </div>
                    </div>
                </div>
            </section>
            <hr>
            <section class="oneExample">
                <h5 class="textOrange"><b><i class="bi bi-volume-up me-1  sound "
                            data-talk="Leer la lectura y contesta la pregunta... ¡Acepta el reto! Lee la historia con mucha atención, y luego resuelve el misterio, respondiendo las preguntas."></i>2.
                        Leer la lectura y contesta la pregunta.</b>
                </h5>
                <p class="text-secondary"><b> ¡Acepta el reto!</b> Lee la historia con mucha atención, y luego resuelve
                    el misterio, respondiendo las preguntas.</p>
                <div class="row">
                    <div class="col-12 text-center">
                        <h3 class="title">
                            <i class="bi bi-volume-up me-1"
                                data-talk="Mi leon Julio. Este es mi león, mi león se llama Julio. Julio es muy peligroso. Es de color anaranjado. A Julio le gusta gobernar y comer carne."
                                style="cursor: pointer;"></i>
                            <em>Mi leon Julio.</em>
                        </h3>
                        <p>Este es mi león, mi león se llama Julio. <br> Julio es muy peligroso. Es de color amarillo.
                            <br> A Julio le gusta gobernar y comer carne.
                        </p>

                        <h4 class="mb-3">
                            <i class="bi bi-volume-up me-1" data-talk="¿Quien es Julio?" style="cursor: pointer;"></i>
                            <em>¿Quien es Julio?</em>
                        </h4>
                        <div class="containerColButton">
                            <div class="wordButtons text-center">
                                <button>
                                    <img src="../../../../img/player/imagesLeccion9/lion.png" alt="Leon"
                                        class="img-fluid" data-example="three" style="  height: 60px;">
                                </button>
                                <button>
                                    <img src="../../../../img/player/imagesLeccion9/cat.png" alt="Gato"
                                        class="img-fluid" data-example="three"  style="  height: 60px;">
                                </button>
                                <button>
                                    <img src="../../../../img/player/imagesLeccion9/dog.png" alt="Perro"
                                        class="img-fluid" data-example="three"  style="  height: 60px;">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </main><br><br>
    <audio src="../../../../audio/welcome_jugador/correct.mp3" class="correctSound"></audio>
    <audio src="../../../../audio/welcome_jugador/wrong.mp3" class="wrong"></audio>
    <audio src="../../../../audio/welcome_jugador/SoundEffects Button.mp3" class="mainSound"></audio>
    <script src="../../../../js/player/they_do_not_read/twoGuide.js" type="module"></script>
    <div data-include="../../../includeHTMLsinPhp/player/footer.php"></div>
    <script src="../../../../js/ajax/include-html.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
        </script>
</body>

</html>
