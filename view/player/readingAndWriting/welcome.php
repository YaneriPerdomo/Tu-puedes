<?php

namespace View\player\they_do_read;
require_once realpath(__DIR__ . '/../../Kernel.php');

session_start();

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenida | Tú puedes</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="../../../css/reset.css">
    <link rel="icon" type="image/x-icon" href="../../../img/icono/icono.ico">
    <link rel="stylesheet" href="../../../css/bootstrap/bootstrap.css">
    <link rel="stylesheet" href="../../../css/player/welcome.css">
</head>
<body>
    <main>
        <div class="presentation-animada">
            <section class=" animated " style="margin-bottom: 0.5rem;z-index: 999;">
                <img src="/img/player/tu_puedes_welcome.png" alt="">
            </section>
            <span id="pot" style="z-index: 999; cursor:pointer;" class=" b btn_orange">
                <a href="./read.php" style="color:white;">COMENZAR</a>
            </span>
            <span style="z-index: 999;">
                <a href="/php/cerrar_sesion.php" class="btn_salir">Salir</a>
            </span>
        </div>
        <button class="logo play"  style="    background: none;border: none;">
            <i id="boton_sonido" class="bi bi-volume-mute" data-sonido ="false"></i>
        </button>
        <div class="raya-one"></div>
        <div class="raya-dos"></div>
        <div class="raya-tres"></div>
        <div class="fondo-letras"></div>
    </main>
    <audio src="/audio/welcome_jugador/eclipse-run-run-lovely-runner.mp3" class="sound_musica"   autoplay loop></audio>
    <audio src="/audio/welcome_jugador/SoundEffects Button.mp3" autoplay class="sound-button" ></audio>  
    <audio src="/audio/welcome_jugador/sound_salir.mp3" class="soundButtonSalir" autoplay></audio>    
    <script src="/js/player/welcome.js"></script>
</body>
</html>