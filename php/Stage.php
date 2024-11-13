<?php

namespace Php;
require_once realpath(__DIR__ . '/Kernel.php');

use PDO;
use Php\ConexionBD;

class Stage {
  private ConexionBD $db_handler;

  public function __construct(
    private int $id,
    private int $user_id,
  ) {
    $this->db_handler = new ConexionBD();
  }

  public function getStage(): mixed
  {
    // get db connection
    $db = $this->db_handler->abrirConexion();

    // getting stage data
    $stage_query = $db->prepare("SELECT * FROM secciones WHERE id = :id");
    $stage_query->bindParam(':id', $this->id);
    $stage_query->execute();
    $stage_data = $stage_query->fetch(PDO::FETCH_ASSOC);

    // return stage
    return $stage_data;
  }

  public function getStageLessons()
  {
    // get db connection
    $db = $this->db_handler->abrirConexion();

    // getting stage data
    $stage_query = $db->prepare("SELECT COUNT(*) AS total_lessons FROM lecciones WHERE id_seccion = :id");
    $stage_query->bindParam(':id', $this->id);
    $stage_query->execute();
    $stage_data = $stage_query->fetch(PDO::FETCH_ASSOC);

    // return stage
    return $stage_data['total_lessons'];
  }

  public function getLessonProgress() 
  {
    $total_lessons = $this->getStageLessons();
    $lesson_progress = 100 / $total_lessons;

    return $lesson_progress;
  }

  public function getProgress()
  {
    // get db connection
    $db = $this->db_handler->abrirConexion();

    // getting stage data
    $stage_query = $db->prepare(
      "SELECT 
                  lecciones_completadas.id_usuario,
                  COUNT(*) AS total_lessons,
                  SUM(lecciones_completadas.porcentaje) AS progress,
                  SUM(lecciones_completadas.estrellas) AS stars 
              FROM lecciones_completadas
              INNER JOIN lecciones
                  ON lecciones.id_leccion = lecciones_completadas.id_leccion
              INNER JOIN secciones
                  ON secciones.id_seccion = lecciones.id_seccion
              WHERE lecciones_completadas.id_usuario = :id_usuario 
                  AND lecciones.id_seccion = :id_seccion
              GROUP BY lecciones_completadas.id_usuario"
    );
    $stage_query->bindParam(':id_usuario', $this->user_id);
    $stage_query->bindParam(':id_seccion', $this->id);
    $stage_query->execute();
    $stage_data = $stage_query->fetch(PDO::FETCH_ASSOC) ?? null;

    // return stage
    return $stage_data;
  }
}