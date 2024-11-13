<?php

namespace Views\admin\professional;

require_once realpath(__DIR__ . "/../../Kernel.php");

use Php\Admin;
use View\includeHTMLsinPhp\admin\HeaderAdmin;

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

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Panel | Tú puedes</title>
  <link rel="icon" type="image/x-icon" href="../../../img/icono/icono.ico">
  <link rel="stylesheet" href="../../../css/include-html/header_admin.css">
  <link rel="stylesheet" href="../../../css/admin/admin.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="stylesheet" href="../../../css/admin/dashboard.css">
  <link rel="stylesheet" href="../../../css/efectos_siempre/scrollbar.css">
  <link rel="stylesheet" href="../../../css/admin/tabla.css">
  <style>
    .logo figure img {
      max-width: 100px;
    }

    header {
      height: 78.8px;
      background: #ff7d3f;
      width: 100%;

    }

    .d-flex_rapido {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    body {
      background-image: url(../../../img/player/fondo.png);
    }
  </style>
</head>

<body>
  <div>
    <?php echo HeaderAdmin::show(); ?>
  </div>
  <br>
  <main>
    <div class="container-main">
      <h1>Escritorio</h1>
      <hr>
      <div class="dashboard-search-bar" style="display: flex; align-items: center;">
        <div class="dashboard-search-bar--one">
          <div class="search-box">
            <button class="btn-search" style="    margin-top: 0.5rem;"><i class="bi bi-search"></i></button>
            <input type="search" class="input-search" placeholder="...">
          </div>
        </div>
        <div class="dashboard-search-bar--two">
          <div class="btn">
            <div class="btn--accion">
              <a href="./report.php" target="_blank"><i class="bi bi-filetype-pdf"></i><span>Generar Reporte</span></a>
            </div>
          </div>
          <div class="btn">
            <div class="btn--accion">
              <a href="./child/add.php"><span><i class="bi bi-person-fill-add"></i>+Agregar</span></a>
            </div>
          </div>
        </div>
      </div><br>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Usuario</th>
            <th scope="col">Genero</th>
            <th scope="col">Edad</th>
            <th scope="col">Fecha de creaciòn</th>
            <th scope="col">Valido Hasta</th>
            <th scope="col">Estado</th>
            <th scope="col">Operaciones</th>
          </tr>
        </thead>
        <tbody>
          <?php $admin->listar(); ?>
        </tbody>
      </table>

    </div>
  </main>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <div data-include="../../includeHTMLsinPhp/admin/footer_admin.php"></div>
  <script src="../../../js/admin/dashboard.js"></script>
  <script src="../../../js/ajax/include-html.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"></script>
  <script>

  </script>
</body>

</html>