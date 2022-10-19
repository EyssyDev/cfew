<?php
require('functMysql.php');

$sql = "SELECT `rpe`, `nombre` FROM `usuario_scate`";

$resArray = getArraySQL($sql, "usuarios", true);
header('Content-type: application/json; charset=utf-8');
echo json_encode($resArray);	
?>