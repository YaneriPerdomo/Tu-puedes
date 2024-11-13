<?php

namespace Php;

require_once realpath(__DIR__ . '/Kernel.php');

$session_handler = new cerrar_sesion();
$session_handler::close();

class cerrar_sesion {
  public static function close() {
    if (session_status() !== PHP_SESSION_ACTIVE) session_start();
    session_unset();
    session_destroy();
    session_abort();
    http_response_code(200);
    header("location: ../index.php");
    die();
  }
}