<?php

namespace View\player\prelectores\guide;

session_start();

?><!DOCTYPE html>
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
            <h3><b>Guía de la etapa 1, sección 1</b></h3>
            <p class="text-secondary">A continuación, se presentan algunas lecciones a modo de ejemplo explicativo:</p>
            <hr>
            <section>
                <h5 class="textOrange"><b> <i class="bi bi-volume-up sound"
                            data-talk="Encuentra el elemento que has escuchado...¡A jugar a los detectives de letras! Escucharás un sonido y tendrás que buscar la letra que hace ese sonido. ¡Es como un juego de espías, pero con letras! ¿Estás listo para encontrar la letra escondida?"></i>
                        1. Encuentra el elemento que has escuchado.</b></h5>
                <p class="text-secondary"><b>"¡A jugar a los detectives de letras!"</b> Escucharás un sonido y tendrás
                    que buscar
                    la letra que hace ese sonido. ¡Es como un juego de espías, pero con letras! ¿Estás listo para
                    encontrar la letra escondida?</p>
                <div class="row text-center">
                    <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center;">
                        <i class="bi bi-volume-up me-1 fs-1 sound " style="color:rgb(47,47,47)"
                            data-talk="Encuentra la letra b."></i>
                    </div>
                    <div class="col-12 col-lg-6 containerButton">
                        <button data-example="one">d</button>
                        <button data-example="one">d</button>
                        <button data-example="one">b</button>
                    </div>
                </div>
            </section>
            <hr>
            <section>
                <h5 class="textOrange"><b><i class="bi bi-volume-up me-1  sound "
                            data-talk="Encuentra el elemento oculto que es diferente a los demás. ¡Encuentra al diferente! Todos son iguales... ¡menos uno! ¿Puedes descubrir cuál es?"></i>2.
                        Encuentra el elemento oculto que es diferente a los demás.</b></h5>
                <p class="text-secondary"><b>"¡Encuentra al diferente!"</b>Todos son iguales... ¡menos uno! ¿Puedes
                    descubrir cuál es?</p>
                <div class="row text-center">
                    <div class="col-12 containerButton">
                        <button data-example="two">7</button>
                        <button data-example="two">f</button>
                        <button data-example="two">f</button>
                        <button data-example="two">3</button>
                        <button data-example="two">f</button>
                        <button data-example="two">3</button>
                    </div>
                </div>
            </section>
            <hr>
            <section>
                <h5 class="textOrange"><b><i class="bi bi-volume-up me-1  sound "
                            data-talk="Seleccione el dibujo que comienza con la letra indicada en el recuadro... ¡Encuentra el dibujo que empieza con la misma letra! ¡Es como buscar un tesoro escondido"></i>3.
                        Seleccione el dibujo que comienza con la letra indicada en el recuadro</b>
                </h5>
                <p class="text-secondary"><b>¡Encuentra el dibujo que empieza con la misma letra!</b> ¡Es como buscar un
                    tesoro escondido!</p>
                <div class="row">
                    <div class="col-12">
                        <div class="text-center d-flex justify-content-center">
                        <span class="theLetter">c</span>
                        </div>
                        <div class="containerColButton mt-2">
                            <div class="wordButtons  text-center">
                                <button>
                                    <img src="../../../../img/player/casa.png" alt="Casa" class="img-fluid"
                                        data-example="three"><br>
                                    <small class="font-size: .6em;">Casa</small>
                                </button>
                                <button>
                                    <img src="../../../../img/player/lapiz.png" alt="Lapiz" class="img-fluid"
                                        data-example="three"><br>
                                    <small class="font-size: .6em;">Lapiz</small>
                                </button>
                                <button>
                                    <img src="../../../../img/player/banana.png" alt="Banan" class="img-fluid"
                                        data-example="three"><br>
                                    <small class="font-size: .6em;">Banana</small>
                                </button>
                            </div>
                        </div>
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
    <script src="../../../../js/player/they_do_not_read/oneGuide.js" type="module"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
        </script>
</body>

</html>