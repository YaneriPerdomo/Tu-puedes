<?php

namespace Php;
require_once realpath(__DIR__ . '/Kernel.php');

use PDO;
use Php\ConexionBD;

class PlayerType {
  private ConexionBD $db_handler;
  public function __construct(
    private int $player_type,
  ) {
    $this->db_handler = new ConexionBD();
  }

  public function checkPlayerPermissions() 
  {
    if (session_status() !== PHP_SESSION_ACTIVE) session_start();

    if (!isset($_SESSION['usuario'])) {
      header("Location: ./cerrar_session.php");
      exit();
    }
    
    $player_type = $_SESSION['sabe_leer'] ? 2 : 1;

    if ($player_type !== $this->player_type) {
      header("Location: ./cerrar_session.php");
      exit();
    }
  }

  public function getPlayerStages()
  {
    $stages = [
      '1' => [
        'stage_1' => 1,
        'stage_2' => 2,
      ],
      '2' => [
        'stage_1' => 3,
        'stage_2' => 4,
      ],
    ];

    return $stages[$this->player_type];
  }

  public function getPlayerType()
  {
    return $this->player_type;
  }

  public function getTopPlayers()
  {
    $db = $this->db_handler->abrirConexion();
    
    if (session_status() !== PHP_SESSION_ACTIVE) session_start();
    $player_type = $_SESSION['sabe_leer'] ? b'1' : b'0';

    $get_top_players_query = "SELECT 
        usuarios.id_usuario,
        usuarios.usuario,
        ninos.nombre,
        ninos.apellido,
        SUM(lecciones_completadas.estrellas) AS score 
    FROM usuarios 
    INNER JOIN ninos 
        ON ninos.id_usuario = usuarios.id_usuario
    INNER JOIN lecciones_completadas ON lecciones_completadas.id_usuario = ninos.id_usuario
    WHERE ninos.sabe_leer = :player_type
    GROUP BY usuarios.id_usuario, usuarios.usuario, ninos.nombre, ninos.apellido 
    ORDER BY score DESC 
    LIMIT 10";

    $get_top_players_stmt = $db->prepare($get_top_players_query);
    $get_top_players_stmt->bindParam(':player_type', $player_type);
    $get_top_players_stmt->execute();

    $top_players = $get_top_players_stmt->fetchAll(PDO::FETCH_ASSOC);

    return $top_players;
  }
}