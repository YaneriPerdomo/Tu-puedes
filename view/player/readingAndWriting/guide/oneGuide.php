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
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
        crossorigin="anonymous">
    <link rel="stylesheet" href="../../../../css/player/help.css">
    <link rel="stylesheet" href="../../../../css/player/responsive.css">
    <link rel="stylesheet" href="../../../../css/player/guides.css">
</head>

<body style="background-image: url(../../../../img/player/fondo.png); height: 100vh" class="d-flex flex-column">
    <div data-include="../../../includeHTMLsinPhp/player/guides/header.php"></div>
    <main style="flex-grow: 2" class="mb-5">
        <div class="container-xxl w-100 h-100 mt-5" style="background: white;border-radius: 0.5rem;padding: 1rem;border: 1px solid rgb(239, 239, 239);box-shadow: 0px 1px 2px rgb(215 215 215);">
            <h3><b>Guía de la etapa 1, sección 1</b></h3>
            <p class="text-secondary">A continuación, se presentan algunas lecciones a modo de ejemplo explicativo:</p>
            <hr>
            <section>
                <h5 class="textOrange"><b> <i class="bi bi-volume-up sound" data-talk="Encuentra el elemento que has escuchado...¡A jugar a los detectives de letras! Escucharás un sonido y tendrás que buscar la letra que hace ese sonido. ¡Es como un juego de espías, pero con letras! ¿Estás listo para encontrar la letra escondida?"></i> 1. Encuentra el elemento que has escuchado.</b></h5>
                <p class="text-secondary"><b>¡A jugar a los detectives de letras!</b> Escucharás un sonido y tendrás que buscar la letra que hace ese sonido.</p>
                <div class="row text-center">
                    <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center;">
                        <i class="bi bi-volume-up me-1 fs-1 sound " style="color:rgb(47,47,47)" data-talk="Encuentra la letra b."></i>
                    </div>
                    <div class="col-12 col-lg-6 containerButton">
                        <button data-example="one">q</button>
                        <button data-example="one">d</button>
                        <button data-example="one">b</button>
                        <button data-example="one">p</button>
                        <button data-example="one">d</button>
                        <button data-example="one">q</button>
                    </div>
                </div>
            </section>
            <hr>
          
        
            <section>
                <h5 class="textOrange"><b><i class="bi bi-volume-up me-1 sound" data-talk="¡Encuentra la palabra correcta!, Hay tres, pero solo una es correcta. ¿Cuál es?"></i>2. Selecciona, la letra correcta de las tres palabras.</b>
                </h5>
                <p class="text-secondary"><b>¡Encuentra la palabra correcta!</b>  Hay tres, pero solo una es correcta. ¿Cuál es?</p>
                <div class="row">
                    <div class="col-12">
                        <div class="text-center d-flex justify-content-center">
                        <div class="theLetter" >
                            <figure>
                                <img src="../../../../img/player/piscina.png" style="width: 90px;" class="fluid-img"  alt="">
                            </figure>
                        </div>
                        </div>
                        <div class="containerColButton mt-2">
                            <div class="wordButtons text-center">
                                <button class="font-size: .6em;" data-example='three'> pisicina </button>
                                <button class="font-size: .6em;" data-example='three'> piscina </button>
                                <button  class="font-size: .6em;" data-example='three'> picina </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h5 class="textOrange"><b><i class="bi bi-volume-up me-1 sound" data-talk="¡Hay algo extraño en la palabra!Es una letra que no debería estar ahí... ¿Puedes encontrarla?"></i>3. Encuentra el error oculto.</b></h5>
                <p class="text-secondary"><b>¡Hay algo extraño en la palabra!</b> Es una letra que no debería estar ahí... ¿Puedes encontrarla?</p>
                <div class="text-center">
                    <div class="containerButton d-flex justify-content-center">
                        <button data-example="two" class="m-0">g</button>
                        <button data-example="two" class="m-0">a</button>
                        <button data-example="two" class="m-0">m</button>
                        <button data-example="two" class="m-0">a</button>
                        <button data-example="two" class="m-0">d</button>
                        <button data-example="two" class="m-0">o</button>
                        <button data-example="two" class="m-0">r</button>
                    </div>
                </div>
            </section>
    </main>
    <audio src="../../../../audio/welcome_jugador/correct.mp3" class="correctSound"></audio>
    <audio src="../../../../audio/welcome_jugador/correct.mp3" class="correctSound"></audio>
    <audio src="../../../../audio/welcome_jugador/wrong.mp3" class="wrong"></audio>
    <audio src="../../../../audio/welcome_jugador/SoundEffects Button.mp3" class="mainSound"></audio>
    <div data-include="../../../includeHTMLsinPhp/player/footer.php"></div>
    <script src="../../../../js/ajax/include-html.js"></script>
    <script src="../../../../js/player/they_do_read/oneGuide.js" type="module"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" 
        crossorigin="anonymous">
    </script>
</body>
</html>