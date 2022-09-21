<?php
error_reporting(0);
require('usuarios.php');

$idSubClase =(isset($_POST['idSubClase'])) ? $_POST['idSubClase'] : $_POST['idSubClase2'];
$desSubClase =(isset($_POST['desSubClase'])) ? $_POST['desSubClase'] : "";
$act =(isset($_POST['accion'])) ? $_POST['accion'] : "";


    $resultado = array();
    $resultado["param"] = $_POST;
    if ($act == "Agregar") {
        
        $sql0 = "SELECT `id_subclase` FROM `subclase` WHERE `id_subclase` = '".$idSubClase."'";
        $resultadoValidar = getArraySQL($sql0, "bmpc", false);
        
        if($resultadoValidar["success"]) {
            $resultado["success"] = false;
            $resultado["message"] = "Ya existe la ID ingresada en nuestra base de datos, registre la clase con otra ID.";

        }
        else {
            $sql = "INSERT INTO `subclase` VALUES ('".$idSubClase."', '".$desSubClase."')";
            $resultado = getArraySQL($sql, "bmpc", true);
        }
    }

    if ($act == "Modificar") {
        $sql = "UPDATE `subclase` SET `descripcion`='".$desSubClase."' WHERE `id_subclase`='".$idSubClase."'";
        $resultado = getArraySQL($sql, "bmpc", true);
    }
    if ($act == "Eliminar") {
        $sql = "DELETE FROM `subclase` WHERE `id_subclase` = '".$idSubClase."'";
        $resultado = getArraySQL($sql, "bmpc", true);
    }

    header('Content-type: application/json; charset=utf-8');
    echo json_encode($resultado);
    
?>