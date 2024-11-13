<?php

namespace View\admin\professional\child;
require_once realpath(__DIR__ . '/../../../Kernel.php');

use Php\Admin;
use Php\Stage;
use Php\PlayerType;

$admin = new Admin();

session_start();

if (!isset($_SESSION["id_role"])) {
  session_unset();
  session_destroy();
  session_abort();
  http_response_code(301);
  header("Location: /index.php");
  exit();
}

$admin->check_role_id($_SESSION["id_role"]);

if (!isset($_GET["id"])) {
  http_response_code(301);
  header("Location: /view/admin/professional/panel.php");
  exit();
}

$child_data = $admin->get_child($_GET["id"]);

$player_type = new PlayerType($child_data['sabe_leer'] ? 2 : 1);

$stage_ids = $player_type->getPlayerStages();

$stage_1 = new Stage($stage_ids['stage_1'], $child_data['id_usuario']);
$stage_2 = new Stage($stage_ids['stage_2'], $child_data['id_usuario']);

$stage_1_stats = $stage_1->getProgress();
$stage_2_stats = $stage_2->getProgress();

$stage_1_total_lessons = $stage_1->getStageLessons();
$stage_2_total_lessons = $stage_2->getStageLessons();

$stage_1_progress = ($stage_1_stats['progress'] ?? 0) / $stage_1_total_lessons;
$stage_2_progress = ($stage_2_stats['progress'] ?? 0) / $stage_2_total_lessons;

$total_stars = ($stage_1_stats['stars'] ?? 0) + ($stage_2_stats['stars'] ?? 0);
$total_progress = number_format((($stage_1_stats['progress'] ?? 0) + ($stage_2_stats['progress'] ?? 0)) / ($stage_1_total_lessons + $stage_2_total_lessons), 2);

?>


<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progreso del usuario | Tú puedes</title>
    <link rel="icon" type="image/x-icon" href="/img/icono/icono.ico">
    <link rel="stylesheet" href="/css/includeHTML/header_admin.css">
    <link rel="stylesheet" href="/css/admin/admin.css">
    <link rel="stylesheet" href="/css/admin/alumni/progress.css">
    <link rel="stylesheet" href="/css/efectos_siempre/scrollbar.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <style>
        body {
            background-image: url(/img/player/fondo.png);
        }

        
        main > section > div{
            max-width: 700px;
  min-width: 100px;
  background: white;
  border: 1px solid rgb(239, 239, 239);
  box-shadow: 0px 1px 2px rgb(215 215 215);
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
        }
    </style>
</head>

<body class="w-100 d-flex flex-column" style="height: 100vh;">
    <div data-include="/view/includeHTMLsinPhp/admin/header_admin_alumni.php"></div>
    <main class="container-xxl mb-5 " >
        <section class="row progressUser ">
            <div class="">
                <h1>Informacion del aprendizaje</h1>
                <h2><?php echo "<b>{$child_data['usuario']}</b> | {$child_data['nombre']} {$child_data['apellido']}"; ?></h2>
                <div class="progreso_circulo">
                    <h4 style="color: var(--color-azul)">PROGRESO</h4>
                    <p style="color:grey">Durante todo el aprendizaje</p>
                    <div class="">
                        <div class="progress" style="border: solid 2px grey;" role="progressbar"
                            aria-label="Animated striped example" aria-valuenow="10" aria-valuemin="0"
                            aria-valuemax="100">
                            <div class="progress-bar  progress-bar-striped progress-bar-animated" style="width: <?php echo $total_progress; ?>%"><?php echo "$total_progress%"; ?></div>
                        </div>
                        <div class="d-flex mt-2 justify-content-between">
                            <span><i class="bi bi-star me-1"></i>Estrellas</span>
                            <span><?php echo $total_stars; ?></span>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="progreso_circulo">
                    <span class="fw-bold" style="color: var(--color-azul)">Etapa <?php echo $player_type->getPlayerType(); ?>, seccion 1</span>
                    <p style="color:grey"> <?php echo $stage_1_total_lessons; ?> Lecciones </p>
                    <div class="">
                        <div class="progress" style="border: solid 2px grey;" role="progressbar"
                            aria-label="Animated striped example" aria-valuenow="<?php echo $stage_1_progress; ?>" aria-valuemin="0"
                            aria-valuemax="100">
                            <div class="progress-bar  progress-bar-striped progress-bar-animated" style="width: <?php echo $stage_1_progress; ?>%"><?php echo "$stage_1_progress%"; ?></div>
                        </div>
                        <div class="d-flex mt-2 justify-content-between">
                            <span><i class="bi bi-star me-1"></i>Estrellas</span>
                            <span><?php echo $stage_1_stats['stars'] ?? 0; ?></span>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="progreso_circulo">
                    <span class="fw-bold" style="color: var(--color-azul)">Etapa <?php echo $player_type->getPlayerType(); ?>, seccion 2</span>
                    <p style="color:grey"> <?php echo $stage_2_total_lessons; ?> Lecciones </p>
                    <div class="">
                        <div 
                            class="progress" 
                            style="border: solid 2px grey;" 
                            role="progressbar"
                            aria-label="Animated striped example" 
                            aria-valuenow="<?php echo $stage_2_progress; ?>" 
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <div class="progress-bar  progress-bar-striped progress-bar-animated" style="width: <?php echo $stage_2_progress; ?>%"><?php echo "$stage_2_progress%"; ?></div>
                        </div>
                        <div class="d-flex mt-2 justify-content-between">
                            <span><i class="bi bi-star me-1"></i>Estrellas</span>
                            <span><?php echo $stage_2_stats['stars'] ?? 0; ?></span>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="d-flex  justify-content-between">
                    <span>Lecciones totales</span>
                    <span><?php echo $stage_1_total_lessons + $stage_2_total_lessons; ?></span>
                </div>
                <details>
                    <summary>Mostrar detalles...</summary>
                    <ol>
                        <li class="d-flex  justify-content-between">
                            <span>Etapa <?php echo $player_type->getPlayerType(); ?>, seccion 1</span>
                            <span><?php echo $stage_1_total_lessons; ?></span>
                        </li>
                        <li class="d-flex  justify-content-between">
                            <span>Etapa <?php echo $player_type->getPlayerType(); ?>, seccion 2</span>
                            <span><?php echo $stage_2_total_lessons; ?></span>
                        </li>
                    </ol>
                </details>
                <hr>
                <div class="d-flex  justify-content-between">
                    <span>Lecciones que quedan</span>
                    <span><?php echo $stage_1_total_lessons + $stage_2_total_lessons - ($stage_1_stats['total_lessons'] ?? 0) - ($stage_2_stats['total_lessons'] ?? 0); ?></span>
                </div>
                <details>
                    <summary>Mostrar detalles...</summary>
                    <ol>
                        <li class="d-flex  justify-content-between">
                            <span>Etapa <?php echo $player_type->getPlayerType(); ?>, seccion 1</span>
                            <span><?php echo $stage_1_total_lessons - ($stage_1_stats['total_lessons'] ?? 0); ?></span>
                        </li>
                        <li class="d-flex  justify-content-between">
                            <span>Etapa <?php echo $player_type->getPlayerType(); ?>, seccion 2</span>
                            <span><?php echo $stage_2_total_lessons - ($stage_2_stats['total_lessons'] ?? 0); ?></span>
                        </li>
                    </ol>
                </details>
                <hr>
            </div>
        </section>
      
    </main>
    <div data-include="/view/includeHTMLsinPhp/admin/footer_admin.php"></div>
    <script src="/js/ajax/include-html.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
        </script>
    <script src="/js/admin/alumni/progress.js"></script>
</body>

</html>