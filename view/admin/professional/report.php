<?php

namespace View\admin\professional;
require_once realpath(__DIR__ . "/../../Kernel.php");

use Php\Admin;

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

// get new admin instance
$admin = new Admin();

// check if role id is professional
$admin->check_role_id($_SESSION["id_role"]);

// generates the PDF report
echo $admin->generatePDF();