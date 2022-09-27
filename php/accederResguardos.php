<?php
require_once('usuarios.php');
require_once('seguridad.php');
session_start();
$_SESSION['Num'] = 4;
if (isset($_GET['rpe'])) {
    $sql = "SELECT * FROM bien WHERE status = 1 AND rpe IN ('".$_GET['rpe']."')";
}
else if (isset($_POST['id_bien'])) {
    $sql = "SELECT * FROM bien WHERE id_bien = '".$_POST['id_bien']."'";
}
else {
    $sql = "SELECT * FROM bien WHERE status = 1 AND rpe IN ('".$_SESSION['rpe']."')";
}

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
	// session_start();
	$_SESSION["Bienes"] = $datos;
	session_write_close();
	header("Location: ../.");
	die();
}

function mandarMensajeError($message) {
	// session_start();
	$_SESSION['message'] = $message;
	session_write_close();
	header("Location: ../.");
	die();	
}
?>