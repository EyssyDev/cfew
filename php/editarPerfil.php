<?php
error_reporting(0);
require('usuarios.php');

if (isset($_POST['rpe']) && isset($_POST['nombre']) && isset($_POST['pass1'])) {
    $rpe = $_POST['rpe'];
    $nombre = $_POST['nombre'];
    $pass = $_POST['pass1'];
    $sql = "SELECT nombre, password FROM usuario_scate WHERE rpe='".$rpe."'";
    $resultado1 = getArraySQL($sql, "usuarios", false);
    if ($resultado1["success"]) {
        $sql = "UPDATE `usuario_scate` SET `nombre`='".$nombre."',`password`=SHA1('".$pass."') WHERE `rpe`='".$rpe."'";
        $resultado2 = getArraySQL($sql, "usuarios", false);
        if ($resultado2["success"]) {
            echo 'OK';
        }
        // header("/.");
	    die();
    }
    else {
        // header("/.");
	    die();
    }
}
?>