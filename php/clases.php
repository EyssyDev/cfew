<?php
require_once('usuarios.php');

if (isset($_POST['id_clase']))
	$sql = sprintf("SELECT * FROM clase WHERE id_clase like ('%s')", $_POST['id_clase']);
else
	$sql = "SELECT * FROM clase";

$resArray = getArraySQL($sql, "bmpc", true);
header('Content-type: application/json; charset=utf-8');
echo json_encode($resArray);	
?>