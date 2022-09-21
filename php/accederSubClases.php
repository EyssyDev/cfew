<?php
require_once('usuarios.php');
$sql = "SELECT * FROM subclase;";
$resultado = getArraySQL($sql, "bmpc", true);
header('Content-type: application/json; charset=utf-8');

if ($resultado["success"]) {
	acceder($resultado["data"]);
}

else {
	$resultado["message"] = 'NO.';
	mandarMensajeError($resultado["message"]);
}

function acceder($datos) {
	session_start();
	$_SESSION["SubClases"] = $datos;
	$_SESSION['Num'] = 3;
	session_write_close();
	header("Location: ../.");
	die();
}

function mandarMensajeError($message) {
	session_start();
	$_SESSION['message'] = $message;
	session_write_close();
	header("Location: ../.");
	die();	
}
?>