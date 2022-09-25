<?php
// require_once('seguridad.php'); 
require_once('usuarios.php');
require_once('seguridad.php');
$sql = "SELECT * FROM clase";
$resultado = getArraySQL($sql, "bmpc", true);
header('Content-type: application/json; charset=utf-8');

// if($resultado["success"]){
// 	echo json_encode($resultado["data"]);
// } else {
// 	echo "[]";
// }



if ($resultado["success"]) {
	acceder($resultado["data"]);
} else {
	$resultado["message"] = 'NO.';
	mandarMensajeError($resultado["message"]);
}

function acceder($datos)
{
	session_start();
	$_SESSION["Clases"] = $datos;
	// $_SESSION["IdSubClase"] = $datos2;
	$_SESSION['Num'] = 2;
	session_write_close();
	header("Location: ../.");
	die();
}

function mandarMensajeError($message)
{
	session_start();
	$_SESSION['message'] = $message;
	session_write_close();
	header("Location: ../.");
	die();
}
