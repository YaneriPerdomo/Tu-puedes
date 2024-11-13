<?php

// initiliaze composer autoload
require_once realpath(__DIR__ . '/php/Kernel.php');

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Principal | Tú puedes</title>
    <link rel="icon" type="image/x-icon" href="./img/icono/icono.ico">
    <link rel="stylesheet" href="./css/bootstrap/bootstrap.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="./css/index.css">
    <link rel="stylesheet" href="./css/includeHTML/cabezera.css">
    <meta name="description"
        content="Se centra en el aprendizaje de la lectura y la escritura en niños con dislexia en la  etapa de primaria para mejorar su rendimiento académico e intelectual.">
</head>

<body style="color: #332D2B">
    <div data-include="./view/includeHTMLsinPhp/header.php"></div>
    <main class="w-100">
        <div id="Hogar" class="container-fluid w-100 h-75 position-relative " style="--bs-gutter-x: none;">
            <img src="./img/escuela.png" class="img-fluid w-100 " alt="">
            <div class="detalls text-center align-self-center">
                <div class="detalls text-center align-self-center">
                    <h1>La herramienta que mejora las habilidades <br> relacionadas con la lectura y la escritura.</h1>
                    <p class="fs-4">
                        Porque sé, <span> que tú puedes.</span>
                    </p>
                    <a class="  fw-bold btn_orange btn_orange_header" href="./view/signin/log_in.php"
                        title="Entrar">COMIENZA AHORA</a>
                </div>
            </div>
        </div>
        <div class="fondo-letras" style=" background-image: url(./img/letras-efecto-blanco-negro.png);">
            <div class="container-fluid py-3" style="background: #ffeee6">
                <div class=" parte-uno  mt-3 text-center ">
                    <img src="./img/logos/logo-orange.png" class=" mb-2 img-fluid d-md-inline"
                        style="max-width: 100px; min-width: 20px">
                    <br>
                    <p class=" w-100" style="color: rgb(48, 48, 48)">
                        "Se centra en el aprendizaje de la lectura y la escritura en niños con dislexia en la etapa
                        <br>de primaria
                        <span style=" font-weight: bold; color: rgb(48, 48, 48); ">para mejorar su rendimiento académico
                            e intelectual".</span>
                    </p>
                </div>
            </div>
            <div class="container-fluid h w-100 py-5">
                <div class="row ">
                    <div class="col-md-6 col1 position-relative  ">
                        <h4>SEGURA</h4>
                        <small class="">Para que los niños ingresen al aprendizaje y se sientan seguros de que están
                            aprendiendo.</small>
                        <hr>
                        <h4>PERSONALIZADA</h4>
                        <small>Para tener una personalización más detallada de lo que los niños necesitan. Las lecciones
                            se adaptan según el desempeño para ayudarlos. </small>
                        <hr>
                        <h4>APRENDIZAJE MOTIVADORA</h4>
                        <small>Para que las funciones y desafíos sean divertidos y hacen que el aprendizaje se sienta
                            como un juego.</small>
                        <hr>
                    </div>
                    <div class="col-md-6 col2">
                        <h4>EFECTIVA</h4>
                        <small>Los niños podrán aprender de manera efectiva ya que todas las lecciones se comentan con
                            un especialista en esa área .</small>
                        <hr>
                        <h4>GRATIS</h4>
                        <small>Esta aplicación web está orientada voluntariamente a sacar lo mejor de ellos mismos, sin
                            tener que pagar. <em>Es una herramienta adicional.</em></small>
                        <hr>
                        <h4>MANTENIBLE</h4>
                        <small>La aplicación web se puede mantener a la hora de actualizar o modificar todo lo nuevo que
                            se publica para su audiencia de forma rápida y fiable.</small>
                        <hr>
                    </div>
                </div>
            </div>
            <section id="information__roles-admin">
                <div class="container-fluid w-100 ">
                    <div class="d-flex flex-wrap  text-center gap-3 justify-content-center  ">
                        <div class="hidden card-deck text-center" style="transition: all 1s ease-out;">
                            <h2>Para Familias </h2>
                            <p>Tu hijo superará sus dificultades en la escuela a través de un proceso de
                                aprendizaje,contarás con el apoyo tecnologico especializado.</p>
                            <a href="./view/signin/log_in.php" class="btn_orange"
                                style="display: inline-block;font-weight: bold; box-shadow: none;   margin-bottom: 1.4rem">COMIENZA
                                AHORA</a>
                        </div>
                        <div class="hidden card-deck text-center " style="transition: all 1s ease-out;">
                            <h2>Para Terapeutas</h2>
                            <p>Serás parte de un proyecto innovador y darás más soporte tecnológico a tus clientes.
                                Ahorrarán tiempo y aumentarán su productividad gracias a la personalización automática
                                de ejercicios.</p>
                            <a href="./view/signin/log_in.php" class="btn_orange"
                                style="display: inline-block;font-weight: bold; box-shadow: none;   margin-bottom: 1.4rem">COMIENZA
                                AHORA</a>
                        </div>
                        <div class="hidden  card-deck text-center" style="transition: all 1s ease-out;">
                            <h2>Para Docentes</h2>
                            <p>Ofrecerás a tus estudiantes un apoyo actual e innovador y en base a ello apuntarás a
                                eliminar el fracaso escolar por dificultades de lectura y escritura. Automatización de
                                recursos. Mediante personalización automática de ejercicios.</p>
                            <a href="./view/signin/log_in.php" class="btn_orange"
                                style="display: inline-block;  font-weight: bold; box-shadow: none;   margin-bottom: 1.4rem">COMIENZA
                                AHORA</a>
                        </div>
                    </div>
                </div><br><br>
            </section>
        </div>
        <section class="contacto" id="contacto">
            <section>
                <div class="container-xxl w-100  bg-white ">
                    <div class=" parte-uno  mt-2 text-center ">
                        <h2 class="" style="margin-top: 2rem;">No dude en contactar
                            <e class=" fw-bold"> CON NOSOTROS.</e>
                        </h2>
                    </div>
                </div>
                <div class="container--contacto">
                    <form class="contact-form">
                        <input type="text" name="name" placeholder="Escribe tu nombre" style="width: 100%; "
                            title="Nombre sólo acepta letras y espacios en blanco" required>
                        <input type="email" name="email" placeholder="Escribe tu email" title="Email incorrecto"
                            style="width: 100%;" required>
                        <input type="text" name="subject" placeholder="Asunto a tratar" title="El Asunto es requerido"
                            style="width: 100%;" required>
                        <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios"
                            title="Tu comentario no debe exceder los 255 caracteres" required></textarea>
                        <input type="submit" value="Enviar" class="btn_orange"
                            style="border: 0;font-weight: bold; box-shadow: none;   margin-bottom: 1.4rem">
                        <div class="contact-form-loader none">
                            <img src="./img/loader.svg" alt="Cargando" style="width: 40px;">
                        </div>
                        <div class="contact-form-response none">
                            <p>Los datos han sido enviados</p>
                        </div>
                    </form>
                </div>
            </section>
        </section>
        </div>
    </main>
    <div class="scroll scroll_top_btn hidden"><i class="bi bi-arrow-up"></i></div>
    <br><br><br><br><br>
    <div data-include="./view/includeHTMLsinPhp/footer.php"></div>
    <script src="./js/ajax/enviar_mensaje_gmail.js"> </script>
    <script src="./js/index.js" type="module"></script>
    <script src="./js/ajax/include-html.js" type="module"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" type="module"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
        </script>
</body>

</html>