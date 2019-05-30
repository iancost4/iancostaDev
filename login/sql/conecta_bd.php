<?php

	// Variaveis
	$servidor = 'localhost';
	$usuario = 'root';
	$senha = '';
	$banco = 'iacDev';

	// Conectar ao BD
	$con = new mysqli($servidor, $usuario, $senha, $banco);

	// Erro ao conectar?
	if ( $con->connect_errno == true ) {

		echo "<script> 
	          alert('Erro ao conectar no banco!');
	          </script>";

	}

?>