<?php
require_once('usuarios.php');
session_start();
$idBien = $_POST["id_bien"];
$sql = "SELECT * FROM bien WHERE status = 1 AND id_bien IN ('".$idBien."')";
$resultado = getArraySQL($sql, "bmpc", true);
header('Content-type: application/json; charset=utf-8');

if($resultado["success"]) {
	echo json_encode($resultado["data"]);
}
else {
	echo "[]";
}
?>