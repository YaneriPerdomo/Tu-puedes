<?php 

require_once realpath(__DIR__ . '/php/Kernel.php');
header('HTTP/1.1 404 Not Found', true, 404);

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <title>404 - Página no encontrada | Tú puedes</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="/img/icono/icono.ico">
    <link rel="stylesheet" href="/css/bootstrap/bootstrap.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="/css/index.css">
    <link rel="stylesheet" href="/css/includeHTML/cabezera.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #ffeee6;
            color: #332D2B;
        }

        main {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem 0;
        }

        h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }

        footer p {
          font-size: 1rem !important;
        }

        .error-image {
            max-width: 300px;
            margin-bottom: 2rem;
        }

        .button {
            background-color: #ff6600;
            color: white;
            text-decoration: none;
            padding: 0.75rem 1.5rem;
            border-radius: 4px;
            font-weight: bold;
            display: inline-flex;
            align-items: center;
        }

        .button:hover {
            background-color: #e65c00;
        }

        .button svg {
            margin-right: 0.5rem;
        }
    </style>
</head>
<body style="color: #332D2B">
    <?php require_once realpath(__DIR__ . '/view/includeHTMLsinPhp/header.php'); ?>

    <main>
        <h1>404</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <a href="/" class="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Volver a la página principal
        </a>
    </main>

    <? require_once realpath(__DIR__ . '/view/includeHTMLsinPhp/footer.php'); ?>
</body>
</html>