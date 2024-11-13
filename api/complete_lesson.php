<?php

namespace Api;
require_once realpath(__DIR__ . '/../vendor/autoload.php');

use Php\Lesson;

if (!isset($_POST)) {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  die();
}

$inputs = json_decode(file_get_contents('php://input'), true);

if (empty($inputs) && empty($_POST)) {
  http_response_code(400);
  echo json_encode(['error' => 'Body is empty']);
}

$data = $inputs ?? $_POST;

// get lesson from post
$lesson_id = $data['lesson_id'] ?? null;
$stars = $data['stars'] ?? null;
$progress = $data['progress'] ?? null;

// get user from session
if (session_status() !== PHP_SESSION_ACTIVE) session_start();

$user_id = $_SESSION['user_id'] ?? null;

if (!$lesson_id) {
  http_response_code(400);
  echo json_encode(['error' => 'Lesson id is required', 'post' => json_encode($_POST)]);
  die();
}

if (!$stars) {
  http_response_code(400);
  echo json_encode(['error' => 'Stars is required']);
  die();
}

if (!$progress) {
  http_response_code(400);
  echo json_encode(['error' => 'Progress is required']);
  die();
}

// check if user is logged in session
if (!$user_id) {
  http_response_code(400);
  echo json_encode(['error' => 'User id is required']);
  die();
}

// get new lesson instance
$lesson = new Lesson($lesson_id, $user_id);

try {
  $lesson->completeLesson($stars, $progress);
  echo json_encode(['success' => true]);
} catch (\Exception $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
  die();
}