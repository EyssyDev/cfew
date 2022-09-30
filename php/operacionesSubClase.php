<?php
error_reporting(0);
require('usuarios.php');

$idSubClase =(isset($_POST['idSubClase'])) ? $_POST['idSubClase'] : $_POST['idSubClase2'];
$desSubClase =(isset($_POST['desSubClase'])) ? $_POST['desSubClase'] : "";
$act =(isset($_POST['accion'])) ? $_POST['accion'] : "";
    if ($act == "Agregar") {

        $sql = "INSERT INTO `subclase` VALUES ('".$idSubClase."', '".$desSubClase."')";
       
    }

    if ($act == "Modificar") {
        $sql = "UPDATE `subclase` SET `descripcion`='".$desSubClase."' WHERE `id_subclase`='".$idSubClase."'";
        
    }
    if ($act == "Eliminar") {
        $sql = "DELETE FROM `subclase` WHERE `id_subclase` = '".$idSubClase."'";
    }
    
    $resultado = getArraySQL($sql, "bmpc", true);
    header('Content-type: application/json; charset=utf-8');
    echo json_encode($resultado);
    
?>