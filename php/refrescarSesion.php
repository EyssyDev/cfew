<?php
error_reporting(0);
require('usuarios.php');
session_start();
$rpe = $_SESSION['rpe'];
if (!isset($_SESSION)) {
    echo '<script>alert("Por favor inicia sesión"); window.location ="../index.php"</script>';
    die();
}
else if ($_SESSION["Num"] == 0 ) {
    $_SESSION['Num'] = 0;
    session_write_close();
    echo '<script>alert("Por favor inicia sesión"); window.location ="../index.php"</script>';
    session_unset();
    session_destroy();
    die();
}
$sql = "SELECT rpe, nombre, usuario_scate.id_tipo, activo, area_clave as area, id_depto, depto_nombre, descripcion as tipo FROM usuario_scate INNER JOIN tipo_scate ON (usuario_scate.id_tipo = tipo_scate.id_tipo) WHERE rpe='".$rpe."'";
$resultado = getArraySQL($sql, "usuarios", false);

// $sql2 = "SELECT * FROM clase";
// $resultado2 = getArraySQL($sql2, "bmpc", true);

if ($resultado["success"]) {
	$_SESSION["nombre"] = $resultado["data"]["nombre"];
}
?>