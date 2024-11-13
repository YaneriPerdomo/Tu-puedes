<?php
session_start();
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ayuda | Tú Puedes</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="../../../css/reset.css">
    <link rel="stylesheet" href="../../../css/efectos_siempre/scrollbar.css">
    <link rel="icon" type="image/x-icon" href="../../../img/icono/icono.ico">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="../../../css/player/help.css">
    <link rel="stylesheet" href="../../../css/player/responsive.css">

</head>

<body style="background-image: url(../../../img/player/fondo.png);">
    <div data-include="../../includeHTMLsinPhp/player/header.php"></div>
    <main>
        <div class="container-xxl w-100 h-100 mt-5"
            style="    background: white;border-radius: 0.5rem;padding: 1rem;border: 1px solid rgb(239, 239, 239);box-shadow: 0px 1px 2px rgb(215 215 215);">
            <div class="leaderboard progreso_tabla">
                <div class="text-center">
                    <span class="fs-4" style="margin-bottom: 1rem; display: inline-block;">Tabla de
                        clasificación</span>
                </div>
                <div class="d-flex  justify-content-around">
                    <div class="">
                        <span class="fs-5 week" style="cursor:pointer;color: #ff864c">Esta semana</span>
                    </div>
                </div>
                <div class="row selection_week_month" style="height: 4px; background: rgb(239, 239, 239);">
                    <div class="col-12 selection_week" style="background: #ff864c; "></div>
                </div>
                <div style="overflow-y: scroll; height: 400px;" class="">
                </div>
            </div>
        </div>
    </main>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div data-include="../../includeHTMLsinPhp/player/footer.php"></div>
    <script src="../../../js/ajax/include-html.js"></script>
    <script src="../../../js/read.js" type="module"></script>
    <script src="../../../js/player/read.js" type="module"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
        </script>
</body>

</html>