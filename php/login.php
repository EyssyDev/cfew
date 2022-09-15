<?php
error_reporting(0);
require('usuarios.php');

if (isset($_POST['rpe']) && isset($_POST['pass'])) {
	$rpe=$_POST['rpe'];
	$pass=$_POST['pass'];  
	$sql = "SELECT rpe, nombre, usuario_scate.id_tipo, activo, area_clave as area, id_depto, depto_nombre, descripcion as tipo FROM usuario_scate INNER JOIN tipo_scate ON (usuario_scate.id_tipo = tipo_scate.id_tipo) WHERE rpe='".$rpe."' AND password=SHA1('".$pass."')";
	$resultado = getArraySQL($sql, "usuarios", false);

	if ($resultado["success"]) {
		$resultado["activo"] = $resultado["data"]["activo"];
		if($resultado["data"]["activo"]) {
			$query_permiso = sprintf("SELECT * FROM permiso WHERE rpe_usuario='%s'", $rpe);
			$permiso = getArraySQL($query_permiso, "bmpc", false);			
			if ($permiso["success"]) {
				$resultado["data"]["permiso"] = $permiso["success"];
				$resultado["data"]["id_tipo"] = $permiso["data"]["tipo"];
				$resultado["data"]["cenco"] = $permiso["data"]["cenco"];
				iniciarSesion($resultado["data"]);
			}
            else {
				$resultado["success"] = false;
				$resultado["message"] = 'El Usuario no tiene privilegios para esta aplicación';	
				mandarMensajeError($resultado["message"]);
			}					
		}
        else {
			$resultado["success"] = false;
            $resultado["message"] = 'El Usuario no está activo';
			mandarMensajeError($resultado["message"]);
		}	
	} 
    else {
		$resultado["success"] = false;
		$resultado["message"] = 'Los datos proporcionados no se encuentran registrados en nuestro Sistema.';
		mandarMensajeError($resultado["message"]);
	}	
}

function iniciarSesion($datos) {
	session_start();
	$_SESSION = $datos;
	$_SESSION['Num'] = 1;
	session_write_close();
	header("Location: ../.");
	die();
}

function mandarMensajeError($message) {
	session_start();
	$_SESSION['message'] = $message;
	session_write_close();
	header("Location: ../.");
	die();	
}
/*
Estructura de datos.
Array ( [success] => 1
[data] => Array ( [rpe] => 9A016 [nombre] => Iván Hernández Sánchez [id_tipo] => 10 [activo] => 1 [area] => PK0E0 [id_depto] => 2 [depto_nombre] => JEFATURA [tipo] => SUPERADMINISTRADOR [permiso] => 1 [cenco] => 36636 )
[message] => Se encontró 1 registro(s).
[activo] => 1 )
*/
?>
