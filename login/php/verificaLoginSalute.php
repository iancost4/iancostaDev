<?php

  // inicia a sessão
  session_start();

  // Não está logado?
  if ( $_SESSION["logadoDev"] != "on" && $_SESSION["empresa"] != "salute" ) {
    // Redireciona para a página de login
    header("Location: ../index.php");
  }

?>