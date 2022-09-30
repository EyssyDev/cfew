<?php
error_reporting(0);
require('usuarios.php');
require_once('seguridad.php');
$rpe = (isset($_POST['rpe']) ? $_POST['rpe']: '');
$nombre = (isset($_POST['nombre'])) ? $_POST['nombre']:'';
$pass = (isset($_POST['pass1'])) ? $_POST['pass1']: '';

    // $resultado = array();
    // $resultado["param"] = $_POST;
    $sql = "SELECT nombre, password FROM usuario_scate WHERE rpe='".$rpe."'";
    $resultado1 = getArraySQL($sql, "usuarios", false);
    if ($resultado1["success"]) 
    {
        $sql = "UPDATE `usuario_scate` SET `nombre`='".$nombre."',`password`=SHA1('".$pass."') WHERE `rpe`='".$rpe."'";
        $update = getArraySQL($sql, "usuarios", false);
        
        // if($update["success"]) {
        //     $resultado['success'] = true;
        //     $resultado['message'] = "Actualización correcta";
        // }
    }
    header('Content-type: application/json; charset=utf-8');
    echo json_encode($update);
?>