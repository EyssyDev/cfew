<?php
$bdPermisos = array("seo"=>"seo");
$bdKeys = array("seo"=>"rpe_usuario");

function echo_json($data, $salir = false) {
	header('Content-type: application/json; charset=utf-8');
	echo json_encode($data);
	if($salir) exit();
}

function connectDB($basedatos) {
	$server = "localhost";
	$user = "root";
	$pass = "";
	$bd = $basedatos;
    $conexion = mysqli_connect($server, $user, $pass, $bd);
	if(!$conexion){
        $myArray["success"] = false;
        $myArray["message"] = "Error de Conexión (No. ".mysqli_connect_errno().") ".mysqli_connect_error().$basedatos;
        echo_json($myArray, true);
	}
    return $conexion;
}

function disconnectDB($conexion) { 
    $close = mysqli_close($conexion);
	if(!$close){
        $myArray["success"] = false;
        $myArray["message"] = "Error de Conexión (No. ".mysqli_connect_errno().") ".mysqli_connect_error().$basedatos;
		header('Content-type: application/json; charset=utf-8');
        echo json_encode($myArray);
        echo_json($myArray, true);
	}
    return $close;
}

function getArraySQL($sql, $db, $debug = false) {
    $rawdata = array();
	
	if ($debug) {
		$rawdata["SQL"] = $sql;
	}
	
    $conexion = connectDB($db);
	
	mysqli_set_charset($conexion, "utf8");

    if (!$result = mysqli_query($conexion, $sql)) {
        $rawdata["success"] = false;
        $rawdata["message"] = "Error al ejecutar la sentencia (No. ".mysqli_errno($conexion).") ".mysqli_error($conexion)." - SQL($sql)".$db;
        echo_json($rawdata, true);
	}
	
	if(mysqli_affected_rows($conexion) > 0) {
		$rawdata["success"] = true;
		$accion = "afectaron";
		if(mysqli_num_rows($result)==1) {
			$accion = "encontró";
			$rawdata["data"] = mysqli_fetch_assoc($result);
		}
		elseif(mysqli_num_rows($result) > 0) {
			$accion = "encontraron";
			while($row = mysqli_fetch_assoc($result))
				$rawdata["data"][] = $row;
		}
		$rawdata["message"] = "Se $accion ".mysqli_affected_rows($conexion)." registro(s).";
		mysqli_free_result($result);		
	}

	else {
		$rawdata["success"] = false;
		$rawdata["message"] = "No se encontraron registros";
	}

    disconnectDB($conexion);
    return $rawdata;
}
?>