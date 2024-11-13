<?php

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

?>
<header>
    <div class="row" style="width: 100%">
        <div class="col-1"></div>
        <div class="col-md-12 col-lg-10">
            <div class="header-container" style="    display: flex;justify-content: space-between;align-items: center;">
                <section class="logo d-flex_rapido">
                    <figure>
                        <a href="./../welcome.php"><img src="../../../../img/logos/logo-white.png" alt=""></a>
                    </figure>
                    <a href="./../read.php" class="text-decoration-none containerHome">
                        <i class="bi bi-house-door text-white fs-5"></i>
                        <span class="h5"
                            style="text-decoration: none; color: white; border-radius: 0.5rem; align-self: center; font-weight: 600;">Casa</span>
                    </a>
                </section>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle h4"
                        style="    color: white;border: 0;background: #ff7d3f;font-size: calc(1.2rem + .1vw);font-weight: 500;"
                        type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <?php if (isset($_SESSION)) {
                            echo $_SESSION['usuario'];
                        } else {
                            echo "Tu Usuario";
                        } ?> <i class="bi bi-person-circle ms-1"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <div class="responsive">
                            <li class=""><a class="dropdown-item" href="./../read.php">Casa <i
                                        class="bi bi-star ms-1"></i></a></li>
                            <li class=""><a class="dropdown-item" href="./../classificationTable.php">Tabla de Calificacion
                                    <i class="bi bi-star ms-1"></i></a></li>
                            <li><a class="dropdown-item" href="./../progress.php">Progreso <i
                                        class="bi bi-star ms-1"></i></a></li>
                        </div>
                        <li>
                            <a class="dropdown-item" href="./../help.php" Target="_blank">
                                Ayuda <i class="bi bi-question-circle ms-1"></i>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/php/cerrar_sesion.php">
                                Cerrar sesion <i class="bi bi-power ms-1"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-1"></div>
    </div>
</header>