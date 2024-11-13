<?php
  namespace View\includeHTMLsinPhp\admin;
  require_once realpath(__DIR__ . "/../../Kernel.php");

  session_start()
?>
<header>
  <div class="row" style="width: 100%">
    <div class="col-1"></div>
    <div class="col-md-12 col-lg-10">
      <div 
        class="header-container" 
        style="display: flex;justify-content: space-between;align-items: center;"
      >
        <section class="logo d-flex_rapido">
          <figure>
            <a href="../panel.php">
              <img src="../../../../img/logos/logo-white.png" alt="">
            </a>
          </figure>
        </section>
        <div class="dropdown" >
          <button 
            class="btn btn-secondary dropdown-toggle h4" 
            style="color: white;border: 0;background: #ff7d3f;font-size: calc(1.2rem + .1vw);font-weight: 500;" 
            type="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            <?php 
              if(isset($_SESSION)){
                echo $_SESSION['usuario'];
              }
              else{
                echo "Tu Usuario";
              } 
            ?>
            <i class="bi bi-person-circle ms-1 text-white"></i>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="../user/profile.php">Perfil <i class="bi bi-person-gear ms-1"></i></a></li>
            <li><a class="dropdown-item"  target="_blank" href="../notices.php">Avisos <i class="bi bi-exclamation-circle ms-1"></i></a></li>
            <li><a class="dropdown-item" href="/php/cerrar_sesion.php">Cerrar sesion  <i class="bi bi-power ms-1"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
</header>