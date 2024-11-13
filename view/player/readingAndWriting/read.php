<?php

namespace View\player\readingAndWriting;
require_once realpath(__DIR__ . "/../../Kernel.php");

session_start();

use Php\Lesson;
use Php\Stage;
use Php\PlayerType;

$player_type = new PlayerType(2);

$player_type->checkPlayerPermissions();

$stage_1 = new Stage(3, $_SESSION['user_id']);
$stage_2 = new Stage(4, $_SESSION['user_id']);

$stage_1_lessons_amount = $stage_1->getStageLessons();
$stage_1_lessons = [];
for ($index = 0; $index < $stage_1_lessons_amount; $index++) {
    $stage_1_lessons[$index] = new Lesson(
        14 + ($index + 1), 
        $_SESSION['user_id'], 
        (!!$index) ? 14 + $index : 15
    );
}

$stage_2_lessons_amount = $stage_2->getStageLessons();
$stage_2_lessons = [];
for ($index = 0; $index < $stage_2_lessons_amount; $index++) {
    $next = 14 + ($index + 1);
    $stage_2_lessons[$index] = new Lesson(
        $stage_1_lessons_amount + $next, 
        $_SESSION['user_id'], 
        (!!$index) ? ($stage_1_lessons_amount + $next) - 1 : 14 + $stage_1_lessons_amount
    ); 
}

$top_players = $player_type->getTopPlayers();

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aprende | Tú puedes</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/efectos_siempre/scrollbar.css">
    <link rel="icon" type="image/x-icon" href="/img/icono/icono.ico">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/player/read.css">
    <link rel="stylesheet" href="/css/efectos_siempre/scrollbar.css">
    <link rel="stylesheet" href="/css/player/responsive.css">
    
    <style>
      .container-guia > a{
            color: inherit;
  text-decoration: none;
        }
    </style>
</head>

<body style="background-image: url(/img/player/fondo.png);">
    <div data-include="../../includeHTMLsinPhp/player/header.php"></div>
    <main>
        <input type="hidden" id="lesson_input" value="1">
        <input type="hidden" id="progress_input" value="0">
        <input type="hidden" id="stars_input" value="0">
        <input type="hidden" id="stage_input" value="1">
        <div class="container-fluid w-100 h-100 mt-5">
            <div class="row">
                <div class="col-1"></div>
                <div class="col-xl-10 col-lg-12">
                    <div class="mensaje_actualizacion" mensaje_actualizacion="show">
                        <div class="mensaje_actualizacion-body">
                            <strong>¿Notas algo... Diferente?</strong>
                            <p>Hemos actualizado la página, para que el aprendizaje sea mucho mejor.</p>
                        </div>
                        <button type="button" class=" me-2 m-auto mensaje_actualizacion--button"> <i
                                class="bi bi-x-lg"></i></button>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>
            <div class="row w-100 h-100 m-0 ">
                <div class="col-1"></div>
                <div class="col-md-12 col-lg-7 ">
                    <div class="read">
                        <div class="etapa_uno_seccion_uno">
                            <div class="d-flex justify-content-between  align-items-center "
                                style="    margin: 0rem 1rem;">
                                <div>
                                    <div class=""><span class="fs-3">Etapa 1, Seccion 1</span><br>
                                        <span style="color:grey">Lecciones </span>
                                    </div>
                                </div>
                                <div class="container-guia">
                                    <a href="./guide/oneGuide.php"><i class="bi bi-journal-text"></i><span>GUIA</span></a>
                                </div>
                            </div>
                            <div class="container__styles_leccion">
                                <?php
                                    $lesson1 = $stage_1_lessons[0]->getData();
                                    $callback = !!$lesson1 
                                        ? "updateInputs({$lesson1["id_leccion"]}, {$lesson1["estrellas"]}, {$lesson1["porcentaje"]}, 1)" 
                                        : "updateInputs(15, 0, 0, 1)";
                                ?>
                                <button 
                                    type="button" 
                                    class="btn" 
                                    data-bs-toggle="modal"
                                    data-bs-target="#entrar_leccion"
                                    onclick='<?php echo $callback; ?>'
                                >
                                    <div class="styles_cuaderno"
                                        style="background-image: linear-gradient(45deg, rgb(121, 198, 12) 30%, rgb(107 175 11) 30% 50%, rgb(121, 198, 12) 50% 60%, rgb(107 175 11) 60% 65%, rgb(121, 198, 12) 55% 100%);filter: drop-shadow(2px 4px 0px rgb(97 155 15));">
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47); width: 20px; height: 15px; top: 0.5rem; left: -0.5rem; border-radius: 0.5rem;">
                                        </div>
                                        <div class="black_dos"></div>
                                        <div class="black"
                                            style="  position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47);width: 20px;height: 15px;top: 2.5rem;left: -0.5rem;border-radius: 0.5rem;">
                                        </div>
                                        <div class="carita" style="text-align: center; color:white; ">
                                            <div>
                                                <div class="estado_juego">
                                                    <img src="/img/caritas/check.png" style="width:2.5rem"
                                                        alt="">
                                                </div>
                                                <span>Lección 1</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div class="container__styles_leccion">
                                <?php
                                    $lesson2 = $stage_1_lessons[1]?->getData();
                                    
                                    $callback = !!$lesson2 
                                        ? "updateInputs({$lesson2["id_leccion"]}, {$lesson2["estrellas"]}, {$lesson2["porcentaje"]}, 1)" 
                                        : "updateInputs(16, 0, 0, 1)";
                                ?>
                                <button 
                                    type="button" 
                                    class="btn" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="<?php echo $stage_1_lessons[1]?->isLocked() ? '#no_acceso' : '#entrar_leccion' ?>"
                                    onclick='<?php echo $callback; ?>'
                                >
                                    <div class="styles_cuaderno"
                                        style="  filter: drop-shadow(2px 4px 0px #1795d1);background-image: linear-gradient(45deg, #1CB0F6 30%, #16a0e1 30% 50%, #1CB0F6 50% 60%, #16a0e1 60% 65%, #1CB0F6 56% 100%);">
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47); width: 20px; height: 15px; top: 0.5rem; left: -0.5rem; border-radius: 0.5rem;">
                                        </div>
                                        <div class="black_dos"></div>
                                        <div class="black"
                                            style="  position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47);width: 20px;height: 15px;top: 2.5rem;left: -0.5rem;border-radius: 0.5rem;">
                                        </div>
                                        <div class="carita" style="text-align: center; color:white; ">
                                            <div>
                                                <div class="estado_juego">
                                                    <img src="<?php echo $stage_1_lessons[1]?->isLocked() ? '/img/caritas/candado.png' : '/img/caritas/check.png' ?>" style="width:2.5rem"
                                                        alt="">
                                                </div>
                                                <span>Lección 2</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <?php
                                    $lesson3 = $stage_1_lessons[2]?->getData();
                                    
                                    $callback = !!$lesson3 
                                        ? "updateInputs({$lesson3["id_leccion"]}, {$lesson3["estrellas"]}, {$lesson3["porcentaje"]}, 1)" 
                                        : "updateInputs(17, 0, 0, 1)";
                                ?>
                                <button 
                                    type="button" 
                                    class="btn" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="<?php echo $stage_1_lessons[2]?->isLocked() ? '#no_acceso' : '#entrar_leccion' ?>"
                                    onclick='<?php echo $callback; ?>'
                                >
                                    <div class="styles_cuaderno"
                                        style="  filter: drop-shadow(2px 4px 0px #1795d1);background-image: linear-gradient(45deg, #1CB0F6 30%, #16a0e1 30% 50%, #1CB0F6 50% 60%, #16a0e1 60% 65%, #1CB0F6 56% 100%);">
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47); width: 20px; height: 15px; top: 0.5rem; left: -0.5rem; border-radius: 0.5rem;">
                                        </div>
                                        <div class="black_dos"></div>
                                        <div class="black"
                                            style="  position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47);width: 20px;height: 15px;top: 2.5rem;left: -0.5rem;border-radius: 0.5rem;">
                                        </div>
                                        <div class="carita" style="text-align: center; color:white; ">
                                            <div>
                                                <div class="estado_juego">
                                                    <img src="<?php echo $stage_1_lessons[2]?->isLocked() ? '/img/caritas/candado.png' : '/img/caritas/check.png' ?>" style="width:2.5rem"
                                                        alt="">
                                                </div>
                                                <span>Lección 3</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div class="container__styles_leccion">
                                <?php
                                    $lesson4 = $stage_1_lessons[3]?->getData();
                                    
                                    $callback = !!$lesson4 
                                        ? "updateInputs({$lesson4["id_leccion"]}, {$lesson4["estrellas"]}, {$lesson4["porcentaje"]}, 1)" 
                                        : "updateInputs(18, 0, 0, 1)";
                                ?>
                                <button 
                                    type="button" 
                                    class="btn" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="<?php echo $stage_1_lessons[3]?->isLocked() ? '#no_acceso' : '#entrar_leccion' ?>"
                                    onclick='<?php echo $callback; ?>'
                                >
                                    <div class="styles_cuaderno" style="background-image: linear-gradient(45deg, #ff4c92 30%, #e23b7c 30% 50%, #ff4c92 50% 60%, #e23b7c 60% 65%, #ff4c92 55% 100%);
  filter: drop-shadow(2px 4px 0px #c8366f);">
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47); width: 20px; height: 15px; top: 0.5rem; left: -0.5rem; border-radius: 0.5rem;">
                                        </div>
                                        <div class="black_dos"></div>
                                        <div class="black"
                                            style="  position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47);width: 20px;height: 15px;top: 2.5rem;left: -0.5rem;border-radius: 0.5rem;">
                                        </div>
                                        <div class="carita" style="text-align: center; color:white; ">
                                            <div>
                                                <div class="estado_juego">
                                                    <img src="<?php echo $stage_1_lessons[3]?->isLocked() ? '/img/caritas/candado.png' : '/img/caritas/check.png' ?>" style="width:2.5rem"
                                                        alt="">
                                                </div>
                                                <span>Lección 4</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <?php
                                    $lesson5 = $stage_1_lessons[4]?->getData();
                                    
                                    $callback = !!$lesson5 
                                        ? "updateInputs({$lesson5["id_leccion"]}, {$lesson5["estrellas"]}, {$lesson5["porcentaje"]}, 1)" 
                                        : "updateInputs(19, 0, 0, 1)";
                                ?>
                                <button 
                                    type="button" 
                                    class="btn" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="<?php echo $stage_1_lessons[4]?->isLocked() ? '#no_acceso' : '#entrar_leccion' ?>"
                                    onclick='<?php echo $callback; ?>'
                                >
                                    <div class="styles_cuaderno" style="background-image: linear-gradient(45deg, #d55252 30%, #c64442 30% 50%, #d55252 50% 60%, #c64442 60% 65%, #d55252 55% 100%);
  filter: drop-shadow(2px 4px 0px #b73836);">
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47); width: 20px; height: 15px; top: 0.5rem; left: -0.5rem; border-radius: 0.5rem;">
                                        </div>
                                        <div class="black_dos"></div>
                                        <div class="black"
                                            style="  position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47);width: 20px;height: 15px;top: 2.5rem;left: -0.5rem;border-radius: 0.5rem;">
                                        </div>
                                        <div class="carita" style="text-align: center; color:white; ">
                                            <div>
                                                <div class="estado_juego">
                                                    <img src="<?php echo $stage_1_lessons[4]?->isLocked() ? '/img/caritas/candado.png' : '/img/caritas/check.png' ?>" style="width:2.5rem"
                                                        alt="">
                                                </div>
                                                <span>Lección 5</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div class="container__styles_leccion">
                                <?php
                                    $lesson6 = $stage_1_lessons[5]?->getData();
                                    
                                    $callback = !!$lesson6 
                                        ? "updateInputs({$lesson6["id_leccion"]}, {$lesson6["estrellas"]}, {$lesson6["porcentaje"]}, 1)" 
                                        : "updateInputs(20, 0, 0, 1)";
                                ?>
                                <button 
                                    type="button" 
                                    class="btn" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="<?php echo $stage_1_lessons[5]?->isLocked() ? '#no_acceso' : '#entrar_leccion' ?>"
                                    onclick='<?php echo $callback; ?>'
                                >
                                    <div class="styles_cuaderno"
                                        style="background-image: linear-gradient(45deg, rgb(255, 194, 1) 30%, rgb(252, 170, 1) 30% 50%, rgb(255, 193, 1) 50% 60%, rgb(252, 170, 1) 60% 65%, rgb(255, 194, 1) 55% 100%); filter: drop-shadow(2px 4px 0px rgb(212, 180, 1));">
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47); width: 20px; height: 15px; top: 0.5rem; left: -0.5rem; border-radius: 0.5rem;">
                                        </div>
                                        <div class="black_dos"></div>
                                        <div class="black"
                                            style="  position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47);width: 20px;height: 15px;top: 2.5rem;left: -0.5rem;border-radius: 0.5rem;">
                                        </div>
                                        <div class="carita" style="text-align: center; color:white; ">
                                            <div>
                                                <div class="estado_juego">
                                                    <img src="<?php echo $stage_1_lessons[5]?->isLocked() ? '/img/caritas/candado.png' : '/img/caritas/check.png' ?>" style="width:2.5rem"
                                                        alt="">
                                                </div>
                                                <span>Lección 6</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <?php
                                    $lesson7 = $stage_1_lessons[6]?->getData();
                                    
                                    $callback = !!$lesson7 
                                        ? "updateInputs({$lesson7["id_leccion"]}, {$lesson7["estrellas"]}, {$lesson7["porcentaje"]}, 1)" 
                                        : "updateInputs(21, 0, 0, 1)";
                                ?>
                                <button 
                                    type="button" 
                                    class="btn" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="<?php echo $stage_1_lessons[6]?->isLocked() ? '#no_acceso' : '#entrar_leccion' ?>"
                                    onclick='<?php echo $callback; ?>'
                                >
                                    <div class="styles_cuaderno"
                                        style="    background-image: linear-gradient(45deg, rgb(255, 194, 1) 30%, rgb(252, 170, 1) 30% 50%, rgb(255, 193, 1) 50% 60%, rgb(252, 170, 1) 60% 65%, rgb(255, 194, 1) 55% 100%); filter: drop-shadow(2px 4px 0px rgb(212, 180, 1));">
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47); width: 20px; height: 15px; top: 0.5rem; left: -0.5rem; border-radius: 0.5rem;">
                                        </div>
                                        <div class="black_dos"></div>
                                        <div class="black"
                                            style="  position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47);width: 20px;height: 15px;top: 2.5rem;left: -0.5rem;border-radius: 0.5rem;">
                                        </div>
                                        <div class="carita" style="text-align: center; color:white; ">
                                            <div>
                                                <div class="estado_juego">
                                                    <img src="<?php echo $stage_1_lessons[6]?->isLocked() ? '/img/caritas/candado.png' : '/img/caritas/check.png' ?>" style="width:2.5rem"
                                                        alt="">
                                                </div>
                                                <span>Lección 7</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div class="container__styles_leccion">
                                <?php
                                    $lesson8 = $stage_1_lessons[7]?->getData();
                                    
                                    $callback = !!$lesson8 
                                        ? "updateInputs({$lesson8["id_leccion"]}, {$lesson8["estrellas"]}, {$lesson8["porcentaje"]}, 1)" 
                                        : "updateInputs(22, 0, 0, 1)";
                                ?>
                                <button 
                                    type="button" 
                                    class="btn" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="<?php echo $stage_1_lessons[7]?->isLocked() ? '#no_acceso' : '#entrar_leccion' ?>"
                                    onclick='<?php echo $callback; ?>'
                                >
                                    <div class="styles_cuaderno"
                                        style="background-image: linear-gradient(45deg, rgb(255, 194, 1) 30%, rgb(252, 170, 1) 30% 50%, rgb(255, 193, 1) 50% 60%, rgb(252, 170, 1) 60% 65%, rgb(255, 194, 1) 55% 100%); filter: drop-shadow(2px 4px 0px rgb(212, 180, 1));">
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47); width: 20px; height: 15px; top: 0.5rem; left: -0.5rem; border-radius: 0.5rem;">
                                        </div>
                                        <div class="black_dos"></div>
                                        <div class="black"
                                            style="  position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47);width: 20px;height: 15px;top: 2.5rem;left: -0.5rem;border-radius: 0.5rem;">
                                        </div>
                                        <div class="carita" style="text-align: center; color:white; ">
                                            <div>
                                                <div class="estado_juego">
                                                    <img src="<?php echo $stage_1_lessons[7]?->isLocked() ? '/img/caritas/candado.png' : '/img/caritas/check.png' ?>"
                                                        style="width:2.5rem; height: 3rem;" alt="">
                                                </div>
                                                <span
                                                    style="color:rgb(47, 47, 47); background: rgb(47, 47, 47,0.1); border-radius:0.4rem; padding: 0.2rem">Lección
                                                    Final</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div><br><br>
                        <div class="etapa_uno_seccion_dos">
                            <div class="d-flex justify-content-between  align-items-center" style="margin: 0rem 1rem;">
                                <div>
                                    <div class=""><span class="fs-3">Etapa 1, Seccion 2</span><br> <span
                                            style="color:grey">Lecciones </span></div>
                                </div>
                                <div class="container-guia">
                                    <a href="./guide/twoGuide.php"><i class="bi bi-journal-text"></i><span>GUIA</span></a>
                                </div>
                            </div>
                            <div class="container__styles_leccion">
                                <?php
                                    $lesson9 = $stage_2_lessons[0]?->getData();
                                    
                                    $callback = !!$lesson9 
                                        ? "updateInputs({$lesson9["id_leccion"]}, {$lesson9["estrellas"]}, {$lesson9["porcentaje"]}, 2)" 
                                        : "updateInputs(23, 0, 0, 1)";
                                ?>
                                <button 
                                    type="button" 
                                    class="btn" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="<?php echo $stage_2_lessons[0]?->isLocked() ? '#no_acceso' : '#entrar_leccion' ?>"
                                    onclick='<?php echo $callback; ?>'
                                >
                                    <div class="styles_cuaderno">
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47); width: 20px; height: 15px; top: 0.5rem; left: -0.5rem; border-radius: 0.5rem;">
                                        </div>
                                        <div class="black_dos"></div>
                                        <div class="black"
                                            style="  position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47);width: 20px;height: 15px;top: 2.5rem;left: -0.5rem;border-radius: 0.5rem;">
                                        </div>
                                        <div class="carita" style="text-align: center; color:white; ">
                                            <div>
                                                <div class="estado_juego">
                                                    <img src="<?php echo $stage_2_lessons[0]?->isLocked() ? '/img/caritas/candado.png' : '/img/caritas/check.png' ?>" style="width:2.5rem"
                                                        alt="">
                                                </div>
                                                <span>Lección 1</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div class="container__styles_leccion">
                                <?php
                                    $lesson10 = $stage_2_lessons[1]?->getData();
                                    
                                    $callback = !!$lesson10 
                                        ? "updateInputs({$lesson10["id_leccion"]}, {$lesson10["estrellas"]}, {$lesson10["porcentaje"]}, 2)" 
                                        : "updateInputs(24, 0, 0, 1)";
                                ?>
                                <button 
                                    type="button" 
                                    class="btn" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="<?php echo $stage_2_lessons[0]?->isLocked() ? '#no_acceso' : '#entrar_leccion' ?>"
                                    onclick='<?php echo $callback; ?>'
                                >
                                    <div class="styles_cuaderno"
                                        style="  filter: drop-shadow(2px 4px 0px #1795d1);background-image: linear-gradient(45deg, #1CB0F6 30%, #16a0e1 30% 50%, #1CB0F6 50% 60%, #16a0e1 60% 65%, #1CB0F6 56% 100%);">
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47); width: 20px; height: 15px; top: 0.5rem; left: -0.5rem; border-radius: 0.5rem;">
                                        </div>
                                        <div class="black_dos"></div>
                                        <div class="black"
                                            style="  position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47);width: 20px;height: 15px;top: 2.5rem;left: -0.5rem;border-radius: 0.5rem;">
                                        </div>
                                        <div class="carita" style="text-align: center; color:white; ">
                                            <div>
                                                <div class="estado_juego">
                                                    <img src="<?php echo $stage_2_lessons[1]?->isLocked() ? '/img/caritas/candado.png' : '/img/caritas/check.png' ?>" style="width:2.5rem"
                                                        alt="">
                                                </div>
                                                <span>Lección 2</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <?php
                                    $lesson11 = $stage_2_lessons[2]?->getData();
                                    
                                    $callback = !!$lesson11 
                                        ? "updateInputs({$lesson11["id_leccion"]}, {$lesson11["estrellas"]}, {$lesson11["porcentaje"]}, 2)" 
                                        : "updateInputs(25, 0, 0, 1)";
                                ?>
                                <button 
                                    type="button" 
                                    class="btn" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="<?php echo $stage_2_lessons[2]?->isLocked() ? '#no_acceso' : '#entrar_leccion' ?>"
                                    onclick='<?php echo $callback; ?>'
                                >
                                    <div class="styles_cuaderno"
                                        style=" filter: drop-shadow(2px 4px 0px #1795d1);background-image: linear-gradient(45deg, #1CB0F6 30%, #16a0e1 30% 50%, #1CB0F6 50% 60%, #16a0e1 60% 65%, #1CB0F6 56% 100%);">
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47); width: 20px; height: 15px; top: 0.5rem; left: -0.5rem; border-radius: 0.5rem;">
                                        </div>
                                        <div class="black_dos"></div>
                                        <div class="black"
                                            style="  position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47);width: 20px;height: 15px;top: 2.5rem;left: -0.5rem;border-radius: 0.5rem;">
                                        </div>
                                        <div class="carita" style="text-align: center; color:white; ">
                                            <div>
                                                <div class="estado_juego">
                                                    <img src="<?php echo $stage_2_lessons[2]?->isLocked() ? '/img/caritas/candado.png' : '/img/caritas/check.png' ?>" style="width:2.5rem"
                                                        alt="">
                                                </div>
                                                <span>Lección 3</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div class="container__styles_leccion">
                                <?php
                                    $lesson12 = $stage_2_lessons[3]?->getData();
                                    
                                    $callback = !!$lesson12 
                                        ? "updateInputs({$lesson12["id_leccion"]}, {$lesson12["estrellas"]}, {$lesson12["porcentaje"]}, 2)" 
                                        : "updateInputs(26, 0, 0, 2)";
                                ?>
                                <button 
                                    type="button" 
                                    class="btn" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="<?php echo $stage_2_lessons[3]?->isLocked() ? '#no_acceso' : '#entrar_leccion' ?>"
                                    onclick='<?php echo $callback; ?>'
                                >
                                    <div class="styles_cuaderno"
                                        style="background-image: linear-gradient(45deg, rgb(255, 194, 1) 30%, rgb(252, 170, 1) 30% 50%, rgb(255, 193, 1) 50% 60%, rgb(252, 170, 1) 60% 65%, rgb(255, 194, 1) 55% 100%); filter: drop-shadow(2px 4px 0px rgb(212, 180, 1));">
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47); width: 20px; height: 15px; top: 0.5rem; left: -0.5rem; border-radius: 0.5rem;">
                                        </div>
                                        <div class="black_dos"></div>
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47);width: 20px;height: 15px;top: 2.5rem;left: -0.5rem;border-radius: 0.5rem;">
                                        </div>
                                        <div class="carita" style="text-align: center; color:white; ">
                                            <div>
                                                <div class="estado_juego">
                                                    <img src="<?php echo $stage_2_lessons[3]?->isLocked() ? '/img/caritas/candado.png' : '/img/caritas/check.png' ?>" style="width:2.5rem"
                                                        alt="">
                                                </div>
                                                <span
                                                    style="color: rgb(47, 47, 47);background: rgb(47, 47, 47, 0.1); border-radius: 0.4rem; padding: 0.2rem;">Lección
                                                    4</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <?php
                                    $lesson13 = $stage_2_lessons[4]?->getData();
                                    
                                    $callback = !!$lesson13 
                                        ? "updateInputs({$lesson13["id_leccion"]}, {$lesson13["estrellas"]}, {$lesson13["porcentaje"]}, 2)" 
                                        : "updateInputs(27, 0, 0, 2)";
                                ?>
                                <button 
                                    type="button" 
                                    class="btn" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="<?php echo $stage_2_lessons[4]?->isLocked() ? '#no_acceso' : '#entrar_leccion' ?>"
                                    onclick='<?php echo $callback; ?>'
                                >
                                    <div class="styles_cuaderno"
                                        style="background-image: linear-gradient(45deg, rgb(255, 194, 1) 30%, rgb(252, 170, 1) 30% 50%, rgb(255, 193, 1) 50% 60%, rgb(252, 170, 1) 60% 65%, rgb(255, 194, 1) 55% 100%); filter: drop-shadow(2px 4px 0px rgb(212, 180, 1));">
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47); width: 20px; height: 15px; top: 0.5rem; left: -0.5rem; border-radius: 0.5rem;">
                                        </div>
                                        <div class="black_dos"></div>
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47);width: 20px;height: 15px;top: 2.5rem;left: -0.5rem;border-radius: 0.5rem;">
                                        </div>
                                        <div class="carita" style="text-align: center; color:white; ">
                                            <div>
                                                <div class="estado_juego">
                                                    <img src="<?php echo $stage_2_lessons[4]?->isLocked() ? '/img/caritas/candado.png' : '/img/caritas/check.png' ?>" style="width:2.5rem"
                                                        alt="">
                                                </div>
                                                <span
                                                    style="color: rgb(47, 47, 47);background: rgb(47, 47, 47, 0.1); border-radius: 0.4rem; padding: 0.2rem;">Lección
                                                    5</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div class="container__styles_leccion">
                                <?php
                                    $lesson14 = $stage_2_lessons[5]?->getData();
                                    
                                    $callback = !!$lesson14 
                                        ? "updateInputs({$lesson14["id_leccion"]}, {$lesson14["estrellas"]}, {$lesson14["porcentaje"]}, 2)" 
                                        : "updateInputs(28, 0, 0, 2)";
                                ?>
                                <button 
                                    type="button" 
                                    class="btn" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="<?php echo $stage_2_lessons[5]?->isLocked() ? '#no_acceso' : '#entrar_leccion' ?>"
                                    onclick='<?php echo $callback; ?>'
                                >
                                    <div class="styles_cuaderno"
                                        style="background-image: linear-gradient(45deg, rgb(255, 194, 1) 30%, rgb(252, 170, 1) 30% 50%, rgb(255, 193, 1) 50% 60%, rgb(252, 170, 1) 60% 65%, rgb(255, 194, 1) 55% 100%); filter: drop-shadow(2px 4px 0px rgb(212, 180, 1));">
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47); width: 20px; height: 15px; top: 0.5rem; left: -0.5rem; border-radius: 0.5rem;">
                                        </div>
                                        <div class="black_dos"></div>
                                        <div class="black"
                                            style="position: absolute;width: 100%;height: 100%;background: rgb(47, 47, 47);width: 20px;height: 15px;top: 2.5rem;left: -0.5rem;border-radius: 0.5rem;">
                                        </div>
                                        <div class="carita" style="text-align: center; color:white; ">
                                            <div>
                                                <div class="estado_juego">
                                                    <img src="<?php echo $stage_2_lessons[5]?->isLocked() ? '/img/caritas/candado.png' : '/img/caritas/check.png' ?>"
                                                        style="width:2.5rem; height: 3rem;" alt="">
                                                </div>
                                                <span
                                                    style="color:rgb(47, 47, 47); background: rgb(47, 47, 47,0.1); border-radius:0.4rem; padding: 0.2rem">Lección
                                                    Final</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-5  col-xl-3 text-center">
                    <div class="progreso_tabla">
                        <?php
                            // getting stages stats
                            $stage_1_stats = $stage_1->getProgress();
                            $stage_2_stats = $stage_2->getProgress();

                            // getting totals
                            $total_stars = ($stage_1_stats["stars"] ?? 0) + ($stage_2_stats["stars"] ?? 0);
                            $total_progress = (($stage_1_stats["progress"] ?? 0) + ($stage_2_stats["progress"] ?? 0)) / (count($stage_1_lessons) + count($stage_2_lessons));
                        ?>
                        <div class="progreso_usuario-flex">
                            <span class="fs-4 ">Tu Progreso</span>
                            <div class="num_start">
                                <i class="bi bi-star-fill"></i>
                                <strong><?php echo $total_stars; ?></strong>
                                <e>Estrellas</e>
                            </div>
                        </div>
                        <div class="rayita"></div>
                        <div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75"
                            aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped bg-warning" style="width: <?php echo $total_progress; ?>%"><?php echo number_format($total_progress, 2); ?>%</div>
                        </div>
                        <div class="rayita"></div>
                        <div class="">
                            <a href="./progress.php" class="boton_revisar">
                                <img src="" alt="">
                                <span>REVISAR</span>
                            </a>
                        </div>
                    </div><br><br>
                    <div class="leaderboard progreso_tabla">
                        <span class="fs-4" style="margin-bottom: 1rem; display: inline-block;">Tabla de
                        clasificación </span>
                        <div class="d-flex  justify-content-around">
                            <div class="">
                                <span class="fs-5 week" style="cursor:pointer;color: #ff864c">Top 10 reciente:</span>
                            </div>
                        </div>
                        <div class="selection_week_month" style="height: fit-content; max-height: 400px; background: rgb(239, 239, 239); overflow-y: scroll;">
                            <table class="selection_week">
                                <thead>
                                    <th>Usuario</th>
                                    <th>Estrellas</th>
                                </thead>
                                <tbody>
                                <?php
                                    foreach ($top_players as $player) {
                                        echo "<tr>
                                            <td>{$player["usuario"]}</td>
                                            <td>{$player["score"]}</td>
                                        </tr>";
                                    }
                                ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>
        </div>
        </div>
    </main>
    <div data-include="../../includeHTMLsinPhp/player/footer.php"></div>
    <div 
        id="entrar_leccion" 
        class="modal fade" 
        data-bs-backdrop="static" 
        data-bs-keyboard="false" 
        tabindex="-1"
        aria-labelledby="staticBackdropLabel" 
        aria-hidden="true"
    >
        <div class=" modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header modal-header--comenzar ">
                    <i class="bi bi-volume-up voz_comenzar me-2" style="font-size:2rem"></i>
                    <span class="modal-title fs-5" id="staticBackdropLabel">¡Vamos a Comenzar!</span>
                </div>
                <div class="modal-body">
                    <div class="d-flex  justify-content-evenly">
                        <div><i class="bi bi-stopwatch"></i>Porcentaje: <span id="modal_percentage">0%</span></div>
                        <div><i class="bi bi-star-fill"></i>Estrella(s): <span id="modal_stars">0</span></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                    <a id="modal_url" href="./stageOne/lesson1.php"><button type="button" class="btn btn-primary">Si</button></a>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade " id="no_acceso" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class=" modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header modal-header--not_acceso" style="    flex-direction: column;  ">
                    <span style="    display: block; width: 1%;     margin-right: 3rem;"
                        class="animation__icon-delete">⚠️</span>
                </div>
                <div class="modal-body">
                    <div class="d-flex  justify-content-evenly fs-5">
                        </i>No podrás ingresar a esta lección, hasta que hayas completado la anterior.</div>
                </div>
                <div class="modal-footer text-center">
                    <button type="button" class="btn btn-warning" data-bs-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>
    <div class="containerResults" style="display: none;">
            <div class="w-auto text-center"
                style="max-width: 500px; min-width: 100px; background: white !important; border-radius: 1rem;">
                <h2 class=""> ¡Completaste la etapa numero uno! </h2>
                <div class="first">
                    <p>¡Misión cumplida! Has demostrado que eres capaz de cualquier cosa. ¡Estamos muy orgullosos de ti!</p>
                    <button class="siguiente">Siguiente <i class="bi bi-caret-right"></i></button>
                </div>
                <div class="last" style="display: none;">
                    <span class="fs-4 motivationalMessage"></span>
                    <span> Como recompensa por tu increíble hazaña</span><br>
                    <p>Te otorgamos 40 estrellas. ¡Celebremos tu triunfo!</p>
                    <hr>
                    <strong class ="btnContinua">Listo <i class="bi bi-caret-right"></i></strong></a>
                </div>
            </div>
        </div>
    <div class="scroll scroll_top_btn hidden"><i class="bi bi-arrow-up"></i></div>
    <script>
        function updateInputs(lesson, stars, progress, stage) {
            console.log(lesson, stars, progress);
            document.querySelector("#lesson_input").value = lesson;
            document.querySelector("#stars_input").value = stars;
            document.querySelector("#progress_input").value = progress;
            document.querySelector("#stage_input").value = stage;
        }

        const $lesson_modal = document.querySelector("#entrar_leccion");

        $lesson_modal.addEventListener("focus", (event) => {
            const $lesson_input = document.querySelector("#lesson_input");
            const $stars_input = document.querySelector("#stars_input");
            const $progress_input = document.querySelector("#progress_input");
            const $stage_input = document.querySelector("#stage_input");
            console.log($lesson_input, $stars_input, $progress_input);
            const $modal_url = document.querySelector("#modal_url");
            const $modal_percentage = document.querySelector("#modal_percentage");
            const $modal_stars = document.querySelector("#modal_stars");
            $modal_url.setAttribute("href", `./stage${$stage_input.value === '1' ? 'One' : 'Two' }/lesson${$lesson_input.value - 14}.php`);
            $modal_percentage.innerHTML = `${$progress_input.value}%`;
            $modal_stars.innerHTML = $stars_input.value;
        });
    </script>
    <script src="/js/scrollbar.js"></script>
    <script src="/js/player/read.js" type="module"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
        </script>
    <script src="/js/ajax/include-html.js"></script>
</body>

</html>