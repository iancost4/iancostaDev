
<?php

  
// Para não exibir mensagem de alerta
  error_reporting(1);

  include_once "php/indexLogin/controleAcesso.php";

?>

<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Ian Araponga DEV</title>

    <!-- Bootstrap core CSS-->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin.css" rel="stylesheet">

  </head>

  <body style="background-color: grey;">

    <style>
      @import url('https://fonts.googleapis.com/css?family=Montserrat');
    </style>

    <div class="container" style="margin-top: 5%; width: 360px;">
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
      <div class="card card-login mx-auto mt-5">
        <div class="card-body">
          <form method="post">
            <div class="form-group" align="center">
              <img src="Ian_horizontal.png" alt="Logo" height="67,5px" width="250px" />
              <hr>
            </div>
            <div class="form-group">
              <input id="email" class="form-control" placeholder="Login" required="required" autofocus="autofocus" name="email">
            </div>
            <div class="form-group">
              <input type="password" id="senha" class="form-control" placeholder="Password" required="required" name="senha">
            </div>
            <div align="right">
              <input  type="submit" style="width:140;height:40; font-family: 'Montserrat', sans-serif; background-color: green;" value="Entrar" class="btn btn-info btn-block"/>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  </body>

</html>
