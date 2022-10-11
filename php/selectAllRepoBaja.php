<?php
require('functMysql.php');
session_start();
$area = "";
$fecha_inicio = "";
$fecha_termino = "";
$sql = sprintf("SELECT * FROM bien WHERE status = 3 AND fecha_baja BETWEEN '%s' AND '%s' ", $fecha_inicio, $fecha_termino);
$resultado = getArraySQL($sql, "bmpc", true);
header('Content-type: application/json; charset=utf-8');
echo json_encode($resultado["data"]);
?>