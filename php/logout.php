<?php
session_start();
$_SESSION['Num'] = 0;
session_unset();
session_destroy();
header("Location: ../.");
die();
?>
