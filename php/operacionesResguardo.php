<?php
error_reporting(0);
require('functMysql.php');

$idBien = (isset($_POST['idBien'])) ? $_POST['idBien'] : "";
$rpe = (isset($_POST['rpeRes'])) ? $_POST['rpeRes'] : $_POST['rpeRes2'];
$fecha_captura = (isset($_POST['fechaCapRes'])) ? $_POST['fechaCapRes'] : "";
$clase = (isset($_POST['listaClases'])) ? $_POST['listaClases'] : "";
$subclase = (isset($_POST['listaSubClases'])) ? $_POST['listaSubClases'] : "";
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
$archivo = (isset($_POST['formFile'])) ? $_POST['formFile'] : ""; // ?
$act =(isset($_POST['accionRes'])) ? $_POST['accionRes'] : "";


if ($act == "Agregar") {
    $sql = "INSERT INTO `bien`(`rpe`, `fecha_captura`, `clase`, `subclase`, `descripcion`, `marca`, `modelo`, `serie`, `unidad`, `cantidad`, `importe`, `numero`, `fecha_factura`, `rfc`, `posicion`, `archivo`, `status`) VALUES ('".$rpe."', '".$fecha_captura."', '".$clase."', '".$subclase."', '".$descripcion."', '".$marca."', '".$modelo."', '".$serie."', '".$unidad."', '".$cantidad."', '".$importe."', '".$numero."', '".$fecha_factura."', '".$rfc."', '".$posicion."', '".$archivo."', 1)";
}
if ($act == "Eliminar") {
    $sql = "DELETE FROM `bien` WHERE `id_bien` = '".$idBien."'";
}
if ($act == "Modificar") {
    $sql = "UPDATE `bien` SET `fecha_captura`='".$fecha_captura."', `clase`='".$clase."', `subclase`='".$subclase."', `descripcion`='".$descripcion."', `marca`='".$marca."', `modelo`='".$modelo."', `serie`='".$serie."', `unidad`='".$unidad."', `cantidad`='".$cantidad."', `importe`='".$importe."', `numero`='".$numero."', `fecha_factura`='".$fecha_factura."', `rfc`='".$rfc."', `posicion`='".$posicion."', `archivo`='".$archivo."' WHERE `id_bien` = '".$idBien."'";
}

$resultado = getArraySQL($sql, "bmpc", true);
header('Content-type: application/json; charset=utf-8');
echo json_encode($resultado); 
?>