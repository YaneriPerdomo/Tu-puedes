<?php

// initialize autoload
require_once realpath(__DIR__ . '/../vendor/autoload.php');

// import dotenv functionality to load .env file with enviroment variables
use Symfony\Component\Dotenv\Dotenv;

// make dotenv instance
$dotenv = new Dotenv();

if (file_exists(__DIR__ . '/../.env')) {
    try {
        // load .env file
        $dotenv->load(__DIR__ . '/../.env');
    } catch (\Exception $e) {
        // do nothing and use default env vars
    }
} else {
  $dotenv->loadEnv('/etc/secrets/.env');
}
