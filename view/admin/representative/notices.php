<?php

namespace View\admin\representative;
require_once realpath(__DIR__ . "/../../Kernel.php");

use Php\Representantes;
use View\includeHTMLsinPhp\admin\HeaderAdmin;

$representative = new Representantes();

session_start();

if (!isset($_SESSION["id_role"])) {
  session_unset();
  session_destroy();
  session_abort();
  http_response_code(301);
  header("Location: /index.php");
  exit();
}

$representative->check_role_id($_SESSION["id_role"]);

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Avisos | Tú puedes</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="../../../css/reset.css">
    <link rel="stylesheet" href="../../../css/efectos_siempre/scrollbar.css">
    <link rel="icon" type="image/x-icon" href="../../../img/icono/icono.ico">
    <link rel="stylesheet" href="../../../css/efectos_siempre/scrollbar.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://pie-meister.github.io/PieMeister-with-Progress.min.js"></script>
    <link rel="stylesheet" href="../../../css/admin/avisos.css">
</head>

<body>
    <?php echo HeaderAdmin::show(); ?>
    <main>
        <div class="container-xxl w-100 h-100 mt-5"
            style="background: white;border-radius: 0.5rem;padding: 1rem;border: 1px solid rgb(239, 239, 239);box-shadow: 0px 1px 2px rgb(215 215 215);">
            <h1 class="ms-2">Avisos importantes</h1>
            <hr>
            <p><strong>Esta aplicacion web llamada Tu puedes</strong> se centrará en el alumno que sufre dislexia en
                Educación Primaria. En concreto,
                la aplicación web completa <strong> abordará </strong>
                los contenidos del área de lectoescritura de la catedra de lenguaje con la intención de reforzar
                positivamente su estudio, en definitiva,
                <strong> la alfabetización.</strong> No serán temas avanzados para ellos, sino acordes a la etapa y
                necesidades de los niños. También cabe mencionar que esta
                aplicación web <strong> será para familias, docentes y terapeutas</strong> quienes podrán crear una
                cuenta administrativa y en base a esta cuenta podrán crear,
                modificar o eliminar los usuarios de los niños que serían los jugadores para que puedan entrar en el
                aprendizaje.
                Obviamente, el administrador de la cuenta podrá monitorear el progreso y movimiento de los niños
                existentes.
            </p>

            <h2>La aplicación web incluye los siguientes módulos:</h2>
            <ol>
                <li><span class="fs-5">Módulo para el administrador: Cabe señalar que el administrador dependerá de su
                        cargo profesional en la que trabaja.</span>
                    <ul>
                        <li>Crear.</li>
                        <li>Modificar.</li>
                        <li>Eliminar.</li>
                        <li>Monitorear a sus usuarios.</li>
                        <li>Generar reportes.</li>
                        <li>Editar y eliminar su perfil.</li>
                    </ul>
                </li>
                <li class="mt-1">
                    <span class="fs-5">Módulo para el usuario: Cabe destacar que el usuario será el niño que estará
                        ingresando a su aprendizaje personalizado de parte de su administrador.</span>
                </li>
            </ol>
        </div>

    </main>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div data-include="/view/includeHTMLsinPhp/admin/footer_admin.php"></div>
    <script src="/js/ajax/include-html.js"></script>
    <script src="/js/read.js" type="module"></script>
    <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
    >
    </script>
</body>

</html>