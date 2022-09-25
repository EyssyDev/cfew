<?php
require_once('usuarios.php');
session_start();
$sql = "SELECT * FROM bien WHERE status = 1 AND rpe IN ('".$_SESSION['rpe']."')";
$resultado = getArraySQL($sql, "bmpc", true);
header('Content-type: application/json; charset=utf-8');

if($resultado["success"]) {
	echo json_encode($resultado["data"]);
}
else {
	echo "[]";
}
?>