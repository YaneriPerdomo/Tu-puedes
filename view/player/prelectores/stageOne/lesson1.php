<?php

namespace View\player\prelectores\stageOne;
require_once realpath(__DIR__ . "/../../../Kernel.php");

use Php\Stage;
use Php\Lesson;
use Php\PlayerType;

// active session variable
session_start();

// check for player permissions
$player_type = new PlayerType(1);
$player_type->checkPlayerPermissions();

// init stage
$stage = new Stage(1, $_SESSION['user_id']);

// check for lesson permissions
$lesson = new Lesson(1, $_SESSION['user_id']);
$lesson->startLesson();

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lección 1 | Tú puedes</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
    <script src="https://pie-meister.github.io/PieMeister-with-Progress.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="icon" type="image/x-icon" href="/img/icono/icono.ico">
    <link rel="stylesheet" href="/css/player/they_do_read/lecciones.css">
    <link rel="stylesheet" href="/css/player/they_do_not_read/lecciones_alteradas.css">
    <style>
        main {
            background-image: url(/img/player/fondo.png);
        }
    </style>
</head>

<body>
    <main>
        <div class="actividyContainer">
            <div class="arrowContainer">
                <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#btnSalir">
                    <i class="bi bi-arrow-left-circle-fill fs-1" style="color:gray"></i>
                </button>
            </div>
            <div class="progressContainer">
                <div style="flex-grow: 2">
                    <div class="progress" style="background: rgb(47, 47, 47);" role="progressbar"
                        aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: 10%; background: #ff7d3f">
                            10%
                        </div>
                    </div>
                </div>
            </div>
            <div class="startContainer">
                <div class="bi bi-star-fill fs-1 text-warning me-2"></div>
                <span class="start text-warning fs-3">0</span>
            </div>
            <div class="timeContainer">
                <span style="    padding-right: 1.5rem;">Seg</span>
                <span class="countDownNext fs-4"></span>
                <i class="bi bi-stopwatch-fill fs-1"></i>
            </div>
        </div>
        <div class="letterContainer">
            <div class="container-xxl">
                <div class="tableContainer" data-next="1" data-letter="d">
                    <button>b</button>
                    <button>b</button>
                    <button>b</button>
                    <button>d</button>
                    <button>b</button>
                    <button>b</button>
                    <button>b</button>
                    <button>b</button>
                    <button>b</button>
                    <button>b</button>
                    <button>b</button>
                    <button>b</button>
                </div>
            </div>
        </div>
        <div style="height: 75px;" class="stripes">
            <div class="stripeOne"></div>
            <div class="stripeTwo"></div>
            <div class="stripeThree"></div>
        </div>
        <div class="messengerUserContainer">
            <div class="messengerInformation animate__backInDown" style="display:none">
                <i class="bi bi-volume-up me-1 repeatDictation" style="display: none;"></i>
                <p> Encuentra el elemento que has escuchado.</p>
            </div>
        </div>
        <audio src="/audio/welcome_jugador/SoundEffects Button.mp3"   class="letterSound"></audio>
        <audio src="/audio/welcome_jugador/wrong.mp3" class="wrongSound" data-wrong="false"></audio>
        <audio src="/audio/welcome_jugador/correct.mp3" class="correctSound"></audio>
        <audio src="/audio/welcome_jugador/finalJuego.mp3"   class="endLeccion"></audio>
        <audio src="/audio/welcome_jugador/siguiente.mp3"   class="sonidoSiguiente"></audio>
        <audio src="/audio/welcome_jugador/ceroIntentos.mp3"   class="ceroIntentos"></audio>
        <div class="logoPresentation">
            <div>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <span>Cargado...</span>
            </div>
        </div>
        <div class="countDownBody " style="display:none">
            <div class="">
                <div class="hookOne"></div>
                <div class="hookTwo"></div>
                <div class="hookTres"></div>
                <h2 class="fs-1">3</h2>
                <b class="mb-2">¡Comencemos!</b>
            </div>
        </div>
        </div>
        </div>
        <div class="containerResults" style="display: none;">
            <div class="w-auto text-center"
                style="max-width: 500px; min-width: 100px; background: white !important; border-radius: 1rem;">
                <h2 class=""> ¡Completaste la lección! </h2>
                <div class="first">
                    <b>En el primer ejercicio de encontrar la letra b.</b><br>
                    <span class="correctFailedB"></span><br>
                    <hr>
                    <b>En el segundo ejercicio de encontrar la letra l.</b><br>
                    <span class="correctFailedL"></span><br>
                    <hr>
                    <b>En el tercero ejercicio de encontrar la letra q.</b><br>
                    <span class="correctFailedQ"></span><br>
                    <hr>
                    <b>En el cuarto ejercicio de encontrar la letra n.</b><br>
                    <span class="correctFailedN"></span><br>
                    <hr>
                    <button class="siguiente">Siguiente <i class="bi bi-caret-right"></i></button>
                </div>
                <div class="last" style="display: none;">
                    <span class="fs-4 motivationalMessage"></span>
                    <h3 class="fs-1 percentage">20%</h3>
                    <span>¡Has ganado <span class="totalStar"></span> Estrellas!</span><br>
                    <hr>
                    <a 
                        href="../read.php" 
                        class="text-decoration-none btnContinua mt-3"
                    >
                        <strong>
                            CONTINUAR <i class="bi bi-caret-right"></i>
                        </strong>
                    </a>
                </div>
            </div>
        </div>
        <div class="modal fade " id="btnSalir" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header modal-header--comenzar ">
                        <i class="bi bi-volume-up me-1 fs-5 cuidado" style="cursor: pointer;"></i>
                        <span class="modal-title fs-5" id="staticBackdropLabel">¡Cuidado!</span>
                    </div>
                    <div class="modal-body">
                        <p style="margin-bottom: 0.5rem;">¿Vas a abandonar tu lección y perderás todo el progreso?</p>
                        <span>¿Estás seguro de que quieres abandonar?</span>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn " data-bs-dismiss="modal">No</button>
                        <a href="../read.php">
                            <button type="button" class="btn ">Si</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
    ></script>
    <script src="/js/player/they_do_not_read/etapa_1_seccion_1/leccion_1.js" type="module"></script>
</body>

</html>