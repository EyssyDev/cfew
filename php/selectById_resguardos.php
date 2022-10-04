<?php
require_once('usuarios.php');
session_start();
$idBien = $_POST["id_bien"];

if (isset($_GET['rpe'])) {
	$sql = "SELECT * FROM bien WHERE status = 1 AND rpe IN ('" . $_GET['rpe'] . "')";
}else if (isset($idBien)){

	$sql = "SELECT * FROM bien WHERE status = 1 AND id_bien IN ('".$idBien."')";
}
$resultado = getArraySQL($sql, "bmpc", true);
header('Content-type: application/json; charset=utf-8');

if($resultado["success"]) {
	echo json_encode($resultado["data"]);
}
else {
	echo "[]";
}
?>