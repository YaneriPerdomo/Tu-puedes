<?php

namespace View\player\readingAndWriting\stageTwo;
require_once realpath(__DIR__ . '/../../../Kernel.php');

use Php\Stage;
use Php\Lesson;
use Php\PlayerType;

// active session variable
session_start();

// check for player permissions
$player_type = new PlayerType(2);
$player_type->checkPlayerPermissions();

// init stage
$stage = new Stage(4, $_SESSION['user_id']);

// check for lesson permissions
$lesson = new Lesson(27, $_SESSION['user_id']);
$lesson->startLesson();

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lección 13 | Tú puedes</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
    <script src="https://pie-meister.github.io/PieMeister-with-Progress.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="icon" type="image/x-icon" href="../../../../img/icono/icono.ico">
    <link rel="stylesheet" href="../../../../css/player/they_do_read/lecciones.css">
    <link rel="stylesheet" href="../../../../css/player/they_do_read/alteraciones_leccion_7.css">
    <style>
        main {
            background-image: url(../../../../img/player/fondo.png);
        }

        @keyframes swing {


            0% {
                transform: scale(1);
            }

            10%,
            20% {
                transform: scale(0.9) rotate(-3deg);
            }

            30%,
            50%,
            70%,
            90% {
                transform: scale(1.1) rotate(3deg);
            }

            40%,
            60%,
            80% {
                transform: scale(1.1) rotate(-3deg);
            }

            100% {
                transform: scale(1) rotate(0);
            }
        }

        /* Apply the swing animation to an element */
        .swing {
            transform-origin: top center;
            animation: swing 2s;
        }
    </style>
</head>

<body>
    <main>
        <div class="actividyContainer">
            <div class="arrowContainer">
                <button type="span" class="btn " data-bs-toggle="modal" data-bs-target="#btnSalir">
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
                <span style="padding-right: 1.5rem;" class="seg-min">Seg</span>
                <span class="countDownNext fs-4"></span>
                <i class="bi bi-stopwatch-fill fs-1"></i>
            </div>
        </div>
        <div class="letterContainer">
            <div class="container-xxl">
                <div class="tableContainer" data-next="1" data-correct-word="">
                    <button draggable="false"></button>
                    <button draggable="false"></button>
                    <button draggable="false"></button>
                    <button draggable="false"></button>
                    <button draggable="false"></button>
                    <button draggable="false"></button>
                    <button draggable="false"></button>
                </div>
                <br>
                <div class="lettersDrag">
                    <button draggable="true" style="color:green"></button>
                    <button draggable="true">1</button>
                    <button draggable="true">2</button>
                    <button draggable="true">3</button>
                    <button draggable="true">4</button>
                </div>
                <hr>
                <div class="verificar">
                    <input type="hidden">
                </div>
                <div class="containerIntentos">
                    <span class="intentos">
                        <span class="intentoText"> Intentos:</span> 
                        <span class="number">3</span>
                    </span>
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
                <p>Construye la palabra correcta.</p>
            </div>
        </div>
        <audio src="../../../../audio/welcome_jugador/SoundEffects Button.mp3" class="letterSound"></audio>
        <audio src="../../../../audio/welcome_jugador/wrong.mp3" class="wrongSound" data-wrong="false"></audio>
        <audio src="../../../../audio/welcome_jugador/correct.mp3" class="correctSound"></audio>
        <audio src="../../../../audio/welcome_jugador/finalJuego.mp3" class="endLeccion"></audio>
        <audio src="../../../../audio/welcome_jugador/siguiente.mp3" class="sonidoSiguiente"></audio>
        <audio src="../../../../audio/welcome_jugador/ceroIntentos.mp3" class="ceroIntentos"></audio>
        <div class="logoPresentation" >
            <div>
                <div class="spinner-border" role="status" >
                    <span class="visually-hidden">Loading...</span>
                </div>
                <span>Cargado...</span>
            </div>
        </div>
        <div class="countDownBody " style="display: none;">
            <div class="">
                <div class="hookOne"></div>
                <div class="hookTwo"></div>
                <div class="hookTres"></div>
                <h2 class="fs-1">3</h2>
                <b class="mb-2 text-center text_1_3">¡Comencemos!</b>
            </div>
        </div>
        </div>
        </div>
        <div class="containerResults" style="display: none;">
            <div class="w-auto text-center"
                style="max-width: 500px; min-width: 100px; background: white !important; border-radius: 1rem;">
                <h2 class=""> ¡Completaste la lección! </h2>
                <div class="first">
                    <b>A lo largo de la lección.</b><br>
                    <span class="correctFailed"></span>
                    <hr>
                    <span class="siguiente">Siguiente <i class="bi bi-caret-right"></i></span>
                </div>
                <div class="last" style="display: none;">
                    <span class="fs-4 motivationalMessage"></span>
                    <h3 class="fs-1 percentage">20%</h3>
                    <span>¡Has ganado <span class="totalStar"></span> Estrellas!</span><br>
                    <hr>
                    <a href="../read.php" class="text-decoration-none btnContinua mt-3"><strong>CONTINUAR <i
                                class="bi bi-caret-right"></i></strong></a>
                </div>
            </div>
        </div>
        <div class="modal fade " id="btnSalir" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header modal-header--comenzar ">
                        <span class="modal-title fs-5" id="staticBackdropLabel">¡Cuidado!</span>
                    </div>
                    <div class="modal-body ">
                        <p style="margin-bottom: 0.5rem;">¿Vas a abandonar tu lección y perderás todo el progreso?</p>
                        <span>¿Estás seguro de que quieres abandonar?</span>
                    </div>
                    <div class="modal-footer">
                        <span type="span" class="btn " data-bs-dismiss="modal">No</span>
                        <a href="../read.php">
                            <span type="span" class="btn ">Si</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <script src="../../../../js/player/onBeforeUnload.js" type="module"></script>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <script src="../../../../js/player/they_do_read/etapa_1_seccion_1/leccion_13.js" type="module"></script>
</body>

</html>