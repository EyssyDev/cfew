<?php
// require_once('seguridad.php'); 
require_once('usuarios.php');
require_once('seguridad.php');
session_start();
$_SESSION['Num'] = 2;
session_write_close();
header("Location: ../.");
die();
