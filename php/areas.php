<?php
session_start();
$Stipo = $_SESSION["id_tipo"];
$Sarea = $_SESSION["area"];
require('functMysql.php');


if ($Stipo == 10 || $Stipo == 11 ){
  $sql=sprintf("SELECT * FROM area");
}
else {
  $sql=sprintf("SELECT * FROM area WHERE clave LIKE('%s') ", $Sarea);
}

$resArray = getArraySQL($sql, "expediente", true);
header('Content-type: application/json; charset=utf-8');
echo json_encode($resArray);
?>