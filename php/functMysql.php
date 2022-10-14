<?php
error_reporting(E_ERROR | E_PARSE);

$server = "localhost";  //	localhost | pk0e0.cfemex.com | 10.27.55.1 | 10.27.2.129


function echo_json($data, $salir = false){
	header('Content-type: application/json; charset=utf-8');
	echo json_encode($data);
	if($salir) exit();
}

function connectDB($basedatos){
	global $server;
	$user = "root";
	$pass = "";
	$bd = $basedatos;
    $conexion = mysqli_connect($server, $user, $pass, $bd);
	if(!$conexion){
        $myArray["success"] = false;
        $myArray["message"] = "Error de Conexión (No. ".mysqli_connect_errno().") ".mysqli_connect_error();
        echo_json($myArray, true);
	}
    return $conexion;
}

function disconnectDB($conexion){
    $close = mysqli_close($conexion);
	if(!$close){
        $myArray["success"] = false;
        $myArray["message"] = "Error de Conexión (No. ".mysqli_connect_errno().") ".mysqli_connect_error();
		header('Content-type: application/json; charset=utf-8');
        echo json_encode($myArray);
        echo_json($myArray, true);
	}
    return $close;
}

function getArraySQL($sql, $db, $debug = false){
    $rawdata = array(); //creamos un array
	$sentencia = strtoupper(strtok($sql, " "));
	if ($debug)
		$rawdata["SQL"] = $sql;
	
    //Creamos la conexión con la función anterior
    $conexion = connectDB($db);
	
    //generamos la consulta
	mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

    if(!$result = mysqli_query($conexion, $sql)) {
        $rawdata["success"] = false;
        $rawdata["message"] = "Error de Ejecución (No. ". mysqli_errno($conexion).") ".mysqli_error($conexion);
        echo_json($rawdata, true);
	}
	
	if(mysqli_affected_rows($conexion)>0){
		$rawdata["id"] = mysqli_insert_id($conexion);
		$rawdata["success"] = true;
		$rawdata["total"] = mysqli_num_rows($result);
		$accion = "afecto";
		if(mysqli_num_rows($result)==1) {
			$accion = "encontró";
			$rawdata["data"][] = mysqli_fetch_assoc($result);
		}elseif(mysqli_num_rows($result)>0) {
			$accion = "encontraron";
			while($row = mysqli_fetch_assoc($result))
				$rawdata["data"][] = $row;
		}
		$rawdata["message"] = "Se $accion ".mysqli_affected_rows($conexion)." registro(s).";
		mysqli_free_result($result);		
	} else {
		$rawdata["success"] = false;
		$rawdata["message"] = ($sentencia == "UPDATE") ? "No se encontraron registros para actualizar " : (($sentencia == "DELETE") ? "No se encontraron registros que eliminar" : "No se encontraron registros");			
	}
    disconnectDB($conexion); //desconectamos la base de datos
    return $rawdata; //devolvemos el array
}

// function descMes($valor){
// 	$res = "";
// 	switch ($valor){
// 		case 1: $res = "ENERO"; break;
// 		case 2: $res = "FEBRERO"; break;
// 		case 3: $res = "MARZO"; break;
// 		case 4: $res = "ABRIL"; break;
// 		case 5: $res = "MAYO"; break;
// 		case 6: $res = "JUNIO"; break;
// 		case 7: $res = "JULIO"; break;
// 		case 8: $res = "AGOSTO"; break;
// 		case 9: $res = "SEPTIEMBRE"; break;
// 		case 10: $res = "OCTUBRE"; break;
// 		case 11: $res = "NOVIEMBRE"; break;
// 		case 12: $res = "DICIEMBRE"; break;
// 		//case default: $res = $valor; break;
// 	}
// 	return $res;
// }

// function descRama($valor){
// 	$res = "";
// 	switch ($valor){
// 		case 'A0': $res = "Dirección y Supervisión"; break;
// 		case 'B0': $res = "Administración"; break;
// 		case 'C0': $res = "Subestaciones"; break;
// 		case 'D0': $res = "Operación"; break;
// 		case 'E0': $res = "Líneas"; break;
// 		case 'F0': $res = "Proteciones"; break;
// 		case 'G0': $res = "Control"; break;
// 		case 'H0': $res = "Comunicaciones"; break;
// 		case 'L0': $res = "Operacion RNT"; break;
// 		//case default: $res = $valor; break;
// 	}
// 	return $res;
// }

// function descCentro($valor){
// 	$res = "";
// 	$sql = "SELECT * FROM area WHERE clave = '$valor'";
// 	$resAreas = getArrayMySQL($sql, $bd_usuario, true);
// 	if($resAreas["success"])
// 		$res = $resAreas["data"][0]["nombre_corto"];
// 	else
// 		$res = $valor;
// 	return $res;
// }

// function descGO($valor){
// 	$res = "";
// 	switch ($valor){
// 		case '01': $res = "I"; break;
// 		case '02': $res = "II"; break;
// 		case '03': $res = "III"; break;
// 		case '04': $res = "IV"; break;
// 		case '05': $res = "V"; break;
// 		case '06': $res = "VI"; break;
// 		case '07': $res = "VII"; break;
// 		case '08': $res = "VIII"; break;
// 		case '09': $res = "IX"; break;
// 		case '10': $res = "X"; break;
// 		case '11': $res = "XI"; break;
// 		case '12': $res = "XII"; break;
// 		//case default: $res = $valor; break;
// 	}
// 	return $res;
// }

// function tipoContrato($num){
// 	$nom = "";
// 	switch($num){
// 		case '1': $nom = "Confianza Permanente"; break;
// 		case '2': $nom = "Confianza Temporal"; break;
// 		case '3': $nom = "Confianza 3"; break;
// 		case '4': $nom = "Confianza Jubilado"; break;
// 		case '5': $nom = "Confianza 5"; break;
// 		case '6': $nom = "Sindicalizado Permanente"; break;
// 		case '7': $nom = "Sindicalizado Temporal"; break;
// 		case '8': $nom = "Sindicalizado "; break;
// 		case '9': $nom = "Sindicalizado Jubilado"; break;
// 		default: $nom = $num; break;
// 	}
// 	return $nom;
// }

// function fechaTexto($date, $normal = false){
// 	if($normal) {
// 		$dia = substr($date,0,2);		
// 		$mes = substr($date,3,2);
// 		$anio = substr($date,6,4);
// 	} else {
// 		$anio = substr($date,0,4);
// 		$mes = substr($date,5,2);
// 		$dia = substr($date,8,2);		
// 	}
// 	switch($mes){
// 		case '01': $mesTex = "Enero"; break;
// 		case "02": $mesTex = "Febrero"; break;
// 		case "03": $mesTex = "Marzo"; break;
// 		case "04": $mesTex = "Abril"; break;
// 		case "05": $mesTex = "Mayo"; break;
// 		case "06": $mesTex = "Junio"; break;
// 		case "07": $mesTex = "Julio"; break;
// 		case "08": $mesTex = "Agosto"; break;
// 		case "09": $mesTex = "Septiembre"; break;
// 		case "10": $mesTex = "Octubre"; break;
// 		case "11": $mesTex = "Noviembre"; break;
// 		case "12": $mesTex = "Diciembre"; break;
// 		default: $mesTex = $mes; break;
// 	}
// 	return "$dia de $mesTex de $anio";
// }

?>