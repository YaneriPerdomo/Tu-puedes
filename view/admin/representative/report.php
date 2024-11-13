<?php

namespace View\admin\representative;
require_once realpath(__DIR__ . "/../../Kernel.php");

use Php\Representantes;

// if there is no session then go back to index
session_start();
if (!isset($_SESSION["id_role"])) {
  session_unset();
  session_destroy();
  session_abort();
  http_response_code(301);
  header("Location: /index.php");
  exit();
}

// get new representative instance
$representative = new Representantes();

// check if role id is professional
$representative->check_role_id($_SESSION["id_role"]);

// generates the PDF report
echo $representative->generatePDF();