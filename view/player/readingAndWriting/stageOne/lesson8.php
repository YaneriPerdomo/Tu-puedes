<?php

namespace View\player\readingAndWriting\stageOne;
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
$stage = new Stage(3, $_SESSION['user_id']);

// check for lesson permissions
$lesson = new Lesson(22, $_SESSION['user_id']);
$lesson->startLesson();

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lección 14 | Tú puedes</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
    <script src="https://pie-meister.github.io/PieMeister-with-Progress.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="icon" type="image/x-icon" href="../../../../img/icono/icono.ico">
    <link rel="stylesheet" href="../../../../css/player/they_do_read/lecciones.css">
    <style>
        main {
            background-image: url(../../../../img/player/fondo.png);
        }

        .tableContainer_2 {
            font-size: 2rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            text-align: center;
            justify-content: center;
        }

        .tableContainer_2>button {
            cursor: pointer;
            border: 0rem;
            border-bottom: #d9713f solid 3px;
            background: #ff864c;
            color: white;
            font-weight: 500;
            width: 4rem;
            font-size: 2rem;
            /* padding: 0.5rem; */
            text-align: center;
            border-radius: 0.5rem;
        }

        .tableContainer_2>button:hover {
            transition: all linear 0.4s;
            background: #ffa94f;
            transform: translateY(-4px);
            transition: all 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
            box-shadow: -0rem 0.3rem #7e4f1e;
            filter: brightness(110%);
        }

        .tableContainer_3> button {
    cursor: pointer;
    border: 0rem;
    border-bottom: #d9713f solid 3px;
    background: #ff864c;
    color: white;
    font-weight: 500;
    width: 4rem;
    font-size: 2rem;
    /* padding: 0.5rem; */
    text-align: center;
    border-radius: 0.5rem;
}
 
.tableContainer_3> button:hover {
    transition: all linear 0.4s;
    background: #ffa94f;
    transform: translateY(-4px);
    transition: all 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
    box-shadow: -0rem 0.3rem #7e4f1e;
    filter: brightness(110%);
}

.tableContainer_3 {
    font-size: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    text-align: center;
    justify-content: center;
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
                <div class="tableContainer" data-next="1">
                    <button>q</button>
                    <button>p</button>
                    <button>q</button>
                    <button>q</button>
                    <button>q</button>
                    <button>q</button>
                    <button>q</button>
                    <button>q</button>
                    <button>q</button>
                    <button>q</button>
                    <button>q</button>
                    <button>q</button>
                    <button>q</button>
                    <button>q</button>
                    <button>q</button>
                    <button>q</button>
                    <button>q</button>
                    <button>q</button>
                    <button>q</button>
                    <button>q</button>
                    <button>fin</button>
                    <button>gro</button>
                    <button>gap</button>
                    <button>q</button>
                    <button>vil</button>
                    <button>fio</button>
                    <button>gap</button>
                    <button>q</button>
                    <button>fro</button>
                    <button>no</button>
                    <button>hi</button>
                    <button>fil</button>
                    <button>fu</button>
                    <button>fla</button>
                    <button>flu</button>
                    <button>pal</button>
                    <button>q</button>
                    <button>fin</button>
                    <button>dil</button>
                    <button>col</button>
                    <button>wor</button>
                    <button>q</button>
                    <button>flu</button>
                    <button>flu</button>
                    <button>fla</button>
                    <button>q</button>
                    <button>dap</button>
                    <button>gla</button>
                    <button>flu</button>
                    <button>q</button>
                    <button>flu</button>
                    <button>fli</button>
                    <button>flu</button>
                    <button>gal</button>
                    <button>flu</button>
                    <button>flu</button>
                    <button>q</button>
                    <button>fal</button>
                    <button>flu</button>
                    <button>flu</button>
                    <button>flu</button>
                    <button>flu</button>
                    <button>fla</button>
                    <button>fla</button>
                    <button>q</button>
                    <button>gal</button>
                    <button>q</button>
                    <button>q</button>
                    <button>gal</button>
                    <button>flu</button>
                    <button>flu</button>
                    <button>flu</button>
                </div>
                <div class="twoEjercicio" style="display:none">
                    <div class="tableContainer_2" data-next_2="1" data-correct-letter="arreglo">
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>

                    </div>
                    <br>
                    <div class="containerIntentos">
                        <span class="intentos">
                            Intentos: <span class="number">3</span>
                        </span>
                    </div>
                </div>
                <div class="tresEjercicio" style="display:none">
                    <div class="tableContainer_3" data-next_3="1" data-correct-letter="">
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>
                        <button>j</button>

                    </div>
                    <br>
                    <div class="containerIntentos">
                        <span class="intentos">
                            Intentos: <span class="number">3</span>
                        </span>
                    </div>
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
                <p> Encuentra el elemento que has escuchado.</p>
            </div>
        </div>
        <audio src="../../../../audio/welcome_jugador/SoundEffects Button.mp3" autoplay class="letterSound"></audio>
        <audio src="../../../../audio/welcome_jugador/wrong.mp3" class="wrongSound" data-wrong="false"></audio>
        <audio src="../../../../audio/welcome_jugador/correct.mp3" class="correctSound"></audio>
        <div class="logoPresentation" >
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
                <b class="mb-2 text_1_3">¡Comencemos!</b>
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
                    <span class="correctFailedFia"></span><br>
                    <hr>
                    <b>En el segundo ejercicio de encontrar la letra l.</b><br>
                    <span class="correctFailedDar"></span><br>
                    <hr>
                    <b>En el tercero ejercicio de encontrar la letra q.</b><br>
                    <span class="correctFailedQue"></span><br>
                    <hr>
                    <b>En el cuarto ejercicio de encontrar la letra n.</b><br>
                    <span class="correctFailedFiz"></span><br>
                    <hr>
                    <button class="siguiente">Siguiente <i class="bi bi-caret-right"></i></button>
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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <script src="../../../../js/player/they_do_read/etapa_1_seccion_1/leccion_8.js" type="module"></script>
</body>

</html>