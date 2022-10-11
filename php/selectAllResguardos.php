<?php
require('functMysql.php');
session_start();
if (isset($_POST['rpe']))
	$sql = sprintf("SELECT * FROM bien WHERE status = 1 AND rpe IN ('%s')", $_POST['rpe']);
else if (isset($_POST['id_bien']))
	$sql = sprintf("SELECT * FROM bien WHERE id_bien = %s", $_POST['id_bien']);
else
	$sql = sprintf("SELECT * FROM bien WHERE status = 1 AND rpe IN ('%s')", $_SESSION['rpe']);

$resArray = getArraySQL($sql, "bmpc", true);
header('Content-type: application/json; charset=utf-8');
echo json_encode($resArray);
?>