<?php

namespace View\player\prelectores;
require_once realpath(__DIR__ . '/../../Kernel.php');

use Php\PlayerType;
use Php\Stage;

session_start();

$player_type = new PlayerType(1);
$player_type->checkPlayerPermissions();

$stage_1 = new Stage(1, $_SESSION['user_id']);
$stage_2 = new Stage(2, $_SESSION['user_id']);

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
    <title>Progreso | Tú puedes</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="../../../css/reset.css">
    <link rel="stylesheet" href="../../../css/efectos_siempre/scrollbar.css">
    <link rel="icon" type="image/x-icon" href="../../../img/icono/icono.ico">
    <link rel="stylesheet" href="../../../css/player/progress.css">
    <link rel="stylesheet" href="../../../css/player/responsive.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body style="background-image: url(../../../img/player/fondo.png);">
    <div data-include="../../includeHTMLsinPhp/player/header.php"></div>
    <main>
        <div class="container-xxl w-100 h-100 mt-5" style="    background: white;border-radius: 0.5rem;padding: 1rem;border: 1px solid rgb(239, 239, 239);box-shadow: 0px 1px 2px rgb(215 215 215);">
            <div class="mensaje_motivador">
            </div>
            <div class="progreso_circulo">
                <h1 class="fw-bold" style="color: var(--color-azul)"><i class="bi bi-volume-up progresoAudio me-0 m-0 p-0 fs-1"></i>PROGRESO</h1>
                <p style="color:grey">Durante todo el aprendizaje</p>
                <div class="row">
                    <div class="col-12 mt-1">
                        <div class="progress" style="border: solid 2px grey;" role="progressbar" aria-label="Animated striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar  progress-bar-striped progress-bar-animated" style="width: <?php echo $total_progress; ?>%"><?php echo "$total_progress%"; ?></div>
                        </div><br>
                        <div class="num_start ">
                            <i class="bi bi-star-fill fs-4 text-warning"></i>
                            <span class="fs-4"><strong><?php echo $total_stars; ?></strong>
                                <e>Estrella(s)</e>
                            </span>
                        </div>
                    </div>
                    <div class="rayita"></div>
                </div>
                <h2 class="fw-bold" style="color: var(--color-azul)"><i class="bi bi-volume-up progresoEtapaUnoAudio me-0 m-0 p-0 fs-2"></i>Etapa 1, seccion 1</h2>
                <p style="color:grey">
                <div class="d-flex align-items-center">
                    <img 
                        src="<?php echo $stage_1_stats['total_lessons'] <= 0 ? '/img/caritas/candado.png' : '/img/caritas/check.png' ?>" 
                        style="width:2rem" 
                        alt=""
                    >
                    <span style="color:grey"><?php echo $stage_1_total_lessons; ?> Lecciones</span>
                </div>
                </p>
                <div class="row ">
                    <div class=" col-12 mt-0">
                        <div>
                            <div class="progress" style="border: solid 2px grey;" role="progressbar" aria-label="Animated striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar  progress-bar-striped progress-bar-animated" style="width: <?php echo $stage_1_progress; ?>%"><?php echo number_format($stage_1_progress, 2); ?>%</div>
                            </div><br>
                            <div class="num_start ">
                                <i class="bi bi-star-fill fs-4 text-warning"></i>
                                <span class="fs-4"><strong><?php echo $stage_1_stats["stars"] ?? 0; ?></strong>
                                    <e>Estrella(s)</e>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="rayita"></div>
                </div>
                <h2 class="fw-bold" style="color: var(--color-azul)"><i class="bi bi-volume-up progresoEtapaDosAudio me-0 m-0 p-0 fs-2"></i>Etapa 1, seccion 2</h2>
                <p style="color:grey">
                <div class="d-flex align-items-center">
                    <img 
                        src="<?php echo ($stage_2_stats['total_lessons'] ?? 0) <= 0 ? '/img/caritas/candado.png' : '/img/caritas/check.png' ?>" 
                        style="width:2rem" 
                        alt=""
                    >
                    <span style="color:grey"><?php echo $stage_2_total_lessons; ?> Lecciones</span>
                </div>
                </p>
                <div class="row ">
                    <div class="col-12 mt-0">
                        <div>
                            <div class="progress" style="border: solid 2px grey;" role="progressbar" aria-label="Animated striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar  progress-bar-striped progress-bar-animated" style="width: <?php echo $stage_2_progress; ?>%"><?php echo number_format($stage_2_progress, 2); ?>%%</div>
                            </div><br>
                            <div class="num_start ">
                                <i class="bi bi-star-fill fs-4 text-warning"></i>
                                <span class="fs-4"><strong><?php echo $stage_2_stats["stars"] ?? 0; ?></strong>
                                    <e>Estrella(s)</e>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="rayita"></div>
                </div>
            </div>
        </div>
    </main>
    <br><br><br><br><br><br>
    <div data-include="../../includeHTMLsinPhp/player/footer.php"></div>
    <script src="../../../js/ajax/include-html.js"></script>
    <script src="../../../js/read.js" type="module"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
    <script src="../../../js/player/progress.js"></script>
</body>

</html>