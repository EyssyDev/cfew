<?php
require('functMysql.php');

session_start();

if (isset($_POST['area'])) $Sarea=$_POST['area'];
if (isset($_POST['depto'])) $Sdepto=$_POST['depto'];
if (isset($_POST['tipo'])) $Stipo=$_POST['tipo'];

// if (isset($_GET['rpe'])) 
// 	$sql=sprintf("SELECT * FROM usuario_scate WHERE rpe = '%s'", $_GET['rpe']);
// else

if($Sdepto == '99999')
$sql=sprintf("SELECT * FROM usuario_scate WHERE area_clave LIKE ('%s') AND cenco = '' ORDER BY RPE", $Sarea, $Sdepto);
else
	$sql=sprintf("SELECT * FROM usuario_scate WHERE area_clave LIKE ('%s') AND cenco LIKE ('%s') ORDER BY RPE", $Sarea, $Sdepto);

$resArray = getArraySQL($sql, "usuarios", true);
header('Content-type: application/json; charset=utf-8');
echo json_encode($resArray);

?>