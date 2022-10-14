<?php
require('functMysql.php');

session_start();
$Stipo = $_SESSION["id_tipo"];
if (isset($_POST['cenco']))
    $sql = sprintf("SELECT * FROM especialidad WHERE cl_cenco IN (%s)", $_POST['cenco']);
elseif ($Stipo == 10 || $Stipo == 11 || $Stipo == 12 || $Stipo == 20 || $Stipo == 30 )
    $sql = "SELECT * FROM especialidad";
else
    $sql = "SELECT * FROM especialidad WHERE cl_cenco IN (" . $_SESSION["cenco"]. ")";

$resArray = getArraySQL($sql, "expediente", true);
header('Content-type: application/json; charset=utf-8');
echo json_encode($resArray);

?>