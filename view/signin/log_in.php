<!doctype html>
<html lang="es">
<head>
    <title>Inicia sesión | Tú puedes</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="icon" type="image/x-icon" href="../../img/icono/icono.ico">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Croissant+One&family=Inclusive+Sans&family=Montserrat:ital,wght@0,100;0,500;1,100&family=Nova+Square&family=Nunito:wght@1000&family=Open+Sans:wght@300;400&family=Oswald:wght@300;400;500;600;700&family=Poppins:ital,wght@0,700;1,400&family=Quicksand:wght@300&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&family=Rubik:ital,wght@0,500;0,600;1,500&family=Tilt+Neon&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="../../css/iniciar_crear_cuenta/log_in.css">
    <link rel="stylesheet" href="../../css/includeHTML/cabezera.css">
    <style>
        .noValidation {
            transition: border 0.2s linear;
            border: solid 0.1px #d55252 !important;
        }
    </style>
</head>

<body>
    <!--logo--->
    <figure class="container-logo position-absolute  " style="margin-left: 0.5rem;">
        <a class="navbar-brand fw-medium fs-3" href="./../../index.php" style="color: rgb(48, 48, 48);">
            <img src="../../img/logos/logo-orange.png" style="width: 6rem;" alt="">
        </a>
    </figure>
    <!--Cuerpo--->
    <main>
        <div class="container__img">
            <div>
                <img src="../../img/iniciar_crear_cuenta/terapeuta_nina.png" alt="">
            </div>
            <div>
                <span style=" text-align: center;">Eres <b>Capaz</b></span>
                <img src="../../img/iniciar_crear_cuenta/representante_nino.png" alt=""
                    style="object-position: center;">
            </div>
            <div>
                <img src="../../img/iniciar_crear_cuenta/docente_ninos.png" alt="" style="object-position:left">
            </div>
        </div>
        <div class="container- container__user">
            <div class="container__user-form">
                <h1 class="text-uppercase fw-semibold text-center ">Inicia Sesión</h1>
                <form 
                    action="../../php/inicioSesion.php" 
                    autocomplete="off" 
                    id="form-inicio" 
                    class="body_start"
                    method="POST">
                    <div id="warning_inicio" class="text-center ">
                        <span>
                            <?php 
                                if (isset($alerta))
                                    echo $alerta; 
                                if (isset($_GET["error"])) {
                                    echo "
                                    <script>
                                        let error = '{$_GET['error']}';
                                        if (window.location.search.includes('error')) {
                                            // Use history.replaceState to modify the URL without reloading the page
                                            const url = new URL(window.location);
                                            url.searchParams.delete('error');  // Remove the 'error' parameter

                                            // Update the URL in the browser's address bar
                                            window.history.replaceState({}, document.title, url.pathname);
                                        }
                                        error = error.replace(/_/g, ' ');
                                        alert(error);
                                    </script>
                                    ";
                                }
                            ?>
                        </span>
                    </div>
                    <label for="">Usuario <i class="bi bi-person-arms-up mb-1"></i></label><br>
                    <input type="text" id="usuario_inicio" name="usuario_inicio" placeholder="Introduce tu usuario"
                        class="w-100 "><br>
                    <label for="">Contraseña <i class="bi bi-key-fill mb-1"></i></label><br>
                    <input type="password" id="contrasena_inicio" name="contrasena_inicio" class="w-100 mb-2 "
                        placeholder="Introduce tu contraseña"><br>
                    <div class="d-none">
                        <label for="">Confirmar contraseña <i class="bi bi-key-fill mb-1"></i></label><br>
                        <input type="password" id="contrasena_inicio_confirmar" value=""
                            name="contrasena_inicio_confirmar" class="w-100 mb-2"
                            placeholder="Introduce tu contraseña otra vez"><br>

                    </div>
                    <div class="form__btn" style="margin-bottom: 0.6rem;">
                        <button class="mt-2  form__btn--detalle">Entrar <i class="bi bi-caret-right"></i></button>
                    </div>
                    <span style=" margin-top: 0.6rem; text-align:center; display:block">¿No registrado? <a
                            href="./../create_account.php"
                            style="text-decoration: none; color:#fc7c45; margin-top:  0.4rem; margin-bottom: 0.5rem; text-align:center;"
                            class="titleOrange"> Crear una cuenta</a></span>
                </form>
            </div>
        </div>
    </main>
    <script src="../../js/validations/validation_login.js"></script>
    <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" 
        crossorigin="anonymous"
    >
    </script>
</body>

</html>