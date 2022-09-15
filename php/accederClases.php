<?php
// require_once('seguridad.php'); 
require_once('usuarios.php');

$sql = "SELECT * FROM clase";
$resultado = getArraySQL($sql, "bmpc", true);
header('Content-type: application/json; charset=utf-8');

if($res["success"]){
	echo json_encode($res["data"]);
} else {
	echo "[]";
}

$sql2 = "SELECT DISTINCT SUBSTRING(id_subclase, 1, 2) AS id_subclase FROM subclase;";
$resultado2 = getArraySQL($sql2, "bmpc", true);

if ($resultado["success"]) {
	acceder($resultado["data"], $resultado2["data"]);
}

else {
	$resultado["message"] = 'NO.';
	mandarMensajeError($resultado["message"]);
}

function acceder($datos, $datos2) {
	session_start();
	$_SESSION["Clases"] = $datos;
	$_SESSION["IdSubClase"] = $datos2;
	$_SESSION['Num'] = 2;
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