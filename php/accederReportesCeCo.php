<?php
require('functMysql.php');

require_once('seguridad.php');
session_start();
$_SESSION['Num'] = 9;
session_write_close();
header("Location: ../.");
die();
