<?php
  // Para não exibir mensagem de alerta
  error_reporting(1);

  // inicia a sessão
  session_start();

  // importa a conexão do BD
  include_once "sql/conecta_bd.php";

  // Clicou em enviar?
  if ( $_POST != NULL ) 
  {

    // Obtem dados digitados pelo usuário
    $email = addslashes( $_POST["email"] );
    $senha = addslashes( $_POST["senha"] );

    // Criptografando a senha em MD5
    $senha = md5( $senha );

    // Criar comando SQL
    $sql = "SELECT * 
        FROM usuario 
        WHERE email = '$email' 
        AND senha = '$senha'";

    // Executar no BD
    $retorno = $con->query( $sql );

    // Obtem o registro
    $registro = $retorno->fetch_array();

    // Encontrou algum registro?
    if ( $registro ) 
    {

      // Criar as variáveis na sessão
      $_SESSION["logadoDev"] = "on";
      $_SESSION["empresa"] = $registro['empresa'];

      if($_SESSION["empresa"]=='salute')
      {
        // redirecionar para a página principal
        header("Location: espacoSalute/index.php");
      }
      if($_SESSION["empresa"]=='maworld')
      {
        // redirecionar para a página principal
        header("Location: MaWorld/index.php");
      }
      if($_SESSION["empresa"]=='mipets')
      {
        // redirecionar para a página principal
        header("Location: MiPets/index.php");
      }
      

    // Não encontrou
    } 
    else 
    {

      echo "<script> 
          alert('Login ou senha inválido!');
          </script>";
    }
  }
?>