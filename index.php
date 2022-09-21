<?php
include 'php/motorPlantillas.php';

if (!isset($_SESSION)) {
    session_start();
}

if (!isset($_SESSION['Num'])) {
    $_SESSION['Num'] = 0;
    session_write_close();
}

if ($_SESSION['Num'] == 0) {
    ilustrarLogin();
}

if ($_SESSION['Num'] == 1) {
    ilustrarHome();
}

if ($_SESSION['Num'] == 2) {
    ilustrarClases();
}

if ($_SESSION['Num'] == 3) {
    ilustrarSubClases();
}

function ilustrarLogin() {
    $plantilla = new Plantilla;
    $plantilla->ilustrar('login.html');
}

function ilustrarHome() {
    $plantilla = new Plantilla;
    $plantilla->ilustrar('pHeader.php');
    $plantilla->ilustrar('pNavBar.php');
    $plantilla->ilustrar('home.html');
    $plantilla->ilustrar('pFooter.html');
}

function ilustrarClases() {
    $plantilla = new Plantilla;
    $plantilla->ilustrar('pHeader.php');
    $plantilla->ilustrar('pNavBar.php');
    $plantilla->ilustrar('catalogosVista.php');
    $plantilla->ilustrar('pFooter.html');
}

function ilustrarSubClases() {
    $plantilla = new Plantilla;
    $plantilla->ilustrar('pHeader.php');
    $plantilla->ilustrar('pNavBar.php');
    $plantilla->ilustrar('catalogosVista2.php');
    $plantilla->ilustrar('pFooter.html');
}
?>

