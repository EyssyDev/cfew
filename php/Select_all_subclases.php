<?php

require_once('usuarios.php');

$sql = "SELECT * FROM subclase";
$resultado = getArraySQL($sql, "bmpc", true);
header('Content-type: application/json; charset=utf-8');

if($resultado["success"]){
	echo json_encode($resultado["data"]);
} else {
	echo "[]";
}

?>