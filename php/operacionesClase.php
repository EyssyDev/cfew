<?php
error_reporting(0);
require('usuarios.php');

$idClase =(isset($_POST['idClase'])) ? $_POST['idClase'] : $_POST['idClase2'];
$subclaseRef =(isset($_POST['subClases'])) ? implode('|', $_POST['subClases']) : "";
$desClase =(isset($_POST['desClase'])) ? $_POST['desClase'] : "";
$act =(isset($_POST['accion'])) ? $_POST['accion'] : "";


    $resultado = array();
    $resultado["param"] = $_POST;
    if ($act == "Agregar") {
            $sql = "INSERT INTO `clase` VALUES ('".$idClase."', '".$subclaseRef."', '".$desClase."')";
            $resultado = getArraySQL($sql, "bmpc", true);
    }

    if ($act == "Modificar") {
        $sql = "UPDATE `clase` SET `descripcion`='".$desClase."', `subclase`='".$subclaseRef."' WHERE `id_clase`='".$idClase."'";
        $resultado = getArraySQL($sql, "bmpc", true);
    }
    if ($act == "Eliminar") {
        $sql = "DELETE FROM `clase` WHERE `id_clase` = '".$idClase."'";
        $resultado = getArraySQL($sql, "bmpc", true);
    }

    header('Content-type: application/json; charset=utf-8');
    echo json_encode($resultado);
    
?>