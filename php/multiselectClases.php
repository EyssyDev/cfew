<?php
require_once('usuarios.php');

$sql2 = "SELECT DISTINCT SUBSTRING(id_subclase, 1, 2) AS id_subclase FROM subclase ORDER BY id_subclase;";
$resultado2 = getArraySQL($sql2, "bmpc", true);
if($resultado2["success"]){
	header('Content-type: application/json; charset=utf-8');
	echo json_encode($resultado2["data"]);
} else {
	echo "[]";
}
?>