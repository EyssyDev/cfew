<?php
error_reporting(0);
require('usuarios.php');

$rpe = (isset($_POST['rpeRes'])) ? $_POST['rpeRes'] : $_POST['rpeRes2'];
$fecha_captura = (isset($_POST['fechaCapRes'])) ? $_POST['fechaCapRes'] : "";
$clase = (isset($_POST['claseSelRes'])) ? $_POST['claseSelRes'] : "";
$subclase = (isset($_POST['subClaseSelRes'])) ? $_POST['subClaseSelRes'] : "";
$descripcion = (isset($_POST['desRes'])) ? $_POST['desRes'] : "";
$marca = (isset($_POST['marcaRes'])) ? $_POST['marcaRes'] : "";
$modelo = (isset($_POST['modeloRes'])) ? $_POST['modeloRes'] : "";
$serie = (isset($_POST['serieRes'])) ? $_POST['serieRes'] : "";
$unidad = (isset($_POST['unidadSelRes'])) ? $_POST['unidadSelRes'] : "";
$cantidad = (isset($_POST['cantidadRes'])) ? $_POST['cantidadRes'] : "";
$importe = (isset($_POST['importeRes'])) ? $_POST['importeRes'] : "";
$numero = (isset($_POST['numResFac'])) ? $_POST['numResFac'] : "";
$fecha_factura = (isset($_POST['fechaResFac'])) ? $_POST['fechaResFac'] : "";
$rfc = (isset($_POST['rfcResFac'])) ? $_POST['rfcResFac'] : "";
$posicion = (isset($_POST['posicionResFac'])) ? $_POST['posicionResFac'] : "";
$archivo = (isset($_POST['formFile'])) ? $_POST['formFile'] : "";
$act =(isset($_POST['accion'])) ? $_POST['accion'] : "";


$resultado = array();
$resultado["param"] = $_POST;
if ($act == "Agregar") {
    $sql = "INSERT INTO `bien`(`rpe`, `fecha_captura`, `clase`, `subclase`, `descripcion`, `marca`, `modelo`, `serie`, `unidad`, `cantidad`, `importe`, `numero`, `fecha_factura`, `rfc`, `posicion`, `archivo`, `status`) VALUES 
    ('".$rpe."', '".$fecha_captura."', '".$clase."', '".$subclase."', '".$descripcion."', '".$marca."', '".$modelo."', '".$serie."', '".$unidad."', '".$cantidad."', '".$importe."', '".$numero."', '".$fecha_factura."', '".$rfc."', '".$posicion."', '".$archivo."', 1)";
    $resultado = getArraySQL($sql, "bmpc", true);
}
header('Content-type: application/json; charset=utf-8');
echo json_encode($resultado); 
?>