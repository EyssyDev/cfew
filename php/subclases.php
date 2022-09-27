<?php

require_once('usuarios.php');

if (isset($_POST['id_clase'])) $clase = $_POST['id_clase']; else $clase = "";

if (isset($_POST['id_subclase']))
	$sql = sprintf("SELECT * FROM subclase WHERE id_clase like ('%s')", $_POST['id_clase']);
elseif (isset($_POST['id_clase']))
	$sql = "SELECT * FROM clase, subclase WHERE subclase.id_subclase REGEXP clase.subclase AND clase.id_clase = '$clase'";
else
	$sql = "SELECT  distinct substring(id_subclase, 1, 2) as clave FROM subclase ORDER BY id_subclase";

$resArray = getArraySQL($sql, "bmpc", true);
header('Content-type: application/json; charset=utf-8');
echo json_encode($resArray);
?>