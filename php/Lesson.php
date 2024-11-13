<?php

namespace Php;
require_once realpath(__DIR__ . '/Kernel.php');

use PDO;
use Php\ConexionBD;

class Lesson
{
  private ConexionBD $db_handler;
  private mixed $data;

  public function __construct(
    private int $id,
    private int $user_id,
    private int $previous = 0
  ) {
    $this->db_handler = new ConexionBD();
    $this->data = $this->getLesson();
  }

  public function getData() 
  {
    return $this->data;
  }

  private function getLesson() 
  {
    // if session is not started then start it
    if (session_status() !== PHP_SESSION_ACTIVE) session_start();

    $user_id = $_SESSION['user_id'];

    // getting database connection
    $db = $this->db_handler->abrirConexion();

    // getting lesson data
    $lesson_query = "SELECT 
                        lecciones.id_leccion, 
                        lecciones.leccion,
                        secciones.id_seccion, 
                        secciones.seccion,
                        etapas.id_etapa,
                        etapas.etapa,
                        lecciones_completadas.completada,
                        lecciones_completadas.porcentaje,
                        lecciones_completadas.estrellas
                    FROM lecciones_completadas
                    INNER JOIN lecciones
                        ON lecciones_completadas.id_leccion = lecciones.id_leccion 
                    INNER JOIN secciones
                        ON secciones.id_seccion = lecciones.id_seccion
                    INNER JOIN etapas
                        ON etapas.id_etapa = secciones.id_etapa
                    WHERE lecciones.id_leccion = :lesson_id
                        AND lecciones_completadas.id_usuario = :user_id";
    $lesson_stmt = $db->prepare($lesson_query);
    $lesson_stmt->bindParam(':lesson_id', $this->id);
    $lesson_stmt->bindParam(':user_id', $user_id);
    $lesson_stmt->execute();
    $lesson_data = $lesson_stmt->fetch(PDO::FETCH_ASSOC);

    return $lesson_data;
  }

  public function checkCompletion() 
  {
    // getting database connection
    $db = $this->db_handler->abrirConexion();

    // getting lesson info
    $lesson_completion_query = "SELECT * FROM lecciones_completadas WHERE id_leccion = :lesson_id AND id_usuario = :user_id";
    $lesson_completion_stmt = $db->prepare($lesson_completion_query);
    $lesson_completion_stmt->bindParam(':lesson_id', $this->id);
    $lesson_completion_stmt->bindParam(':user_id', $this->user_id);
    $lesson_completion_stmt->execute();
    $lesson_completion_data = $lesson_completion_stmt->fetch(PDO::FETCH_ASSOC);
    return !!($lesson_completion_data['completada'] ?? null);
  }

  public function isLocked(): bool
  {
    $previous_lesson = new Lesson($this->previous, $this->user_id);
    return !$previous_lesson->checkCompletion();
  }

  public function startLesson()
  {
    // getting database connection
    $db = $this->db_handler->abrirConexion();

    $check_if_lesson_exists_query = "SELECT * FROM lecciones_completadas WHERE id_usuario = :user_id AND id_leccion = :lesson_id";
    $check_if_lesson_exists_stmt = $db->prepare($check_if_lesson_exists_query);
    $check_if_lesson_exists_stmt->bindParam(':user_id', $this->user_id);
    $check_if_lesson_exists_stmt->bindParam(':lesson_id', $this->id);
    $check_if_lesson_exists_stmt->execute();
    $check_if_lesson_exists_data = $check_if_lesson_exists_stmt->fetch(PDO::FETCH_ASSOC);
    
    // if there was already a lesson the restart it
    if ($check_if_lesson_exists_data) {
      $restart_lesson_query = "UPDATE lecciones_completadas SET completada = b'0' WHERE id_usuario = :user_id AND id_leccion = :lesson_id";
      $restart_lesson_stmt = $db->prepare($restart_lesson_query);
      $restart_lesson_stmt->bindParam(':user_id', $this->user_id);
      $restart_lesson_stmt->bindParam(':lesson_id', $this->id);
      $restart_lesson_stmt->execute();
      return;
    }

    // starting lesson
    $start_lesson_query = "INSERT INTO lecciones_completadas (id_usuario, id_leccion, completada, porcentaje, estrellas) VALUES (:user_id, :lesson_id, b'0', 0, 0)";
    $start_lesson_stmt = $db->prepare($start_lesson_query);
    $start_lesson_stmt->bindParam(':user_id', $this->user_id);
    $start_lesson_stmt->bindParam(':lesson_id', $this->id);
    $start_lesson_stmt->execute();
    return;
  }

  public function completeLesson(int $stars, int|float $progress)
  {
    // getting database connection
    $db = $this->db_handler->abrirConexion();

    // completing lesson
    $complete_lesson_query = "UPDATE lecciones_completadas SET completada = b'1', porcentaje = :progress, estrellas = :stars WHERE id_usuario = :user_id AND id_leccion = :lesson_id";
    $complete_lesson_stmt = $db->prepare($complete_lesson_query);
    $complete_lesson_stmt->bindParam(':user_id', $this->user_id);
    $complete_lesson_stmt->bindParam(':lesson_id', $this->id);
    $complete_lesson_stmt->bindParam(':progress', $progress);
    $complete_lesson_stmt->bindParam(':stars', $stars);
    $complete_lesson_stmt->execute();
  }
}
