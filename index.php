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

if ($_SESSION['Num'] == 4) {
    ilustrarResguardos();
}

function ilustrarLogin()
{
    $plantilla = new Plantilla;
    $plantilla->ilustrar('login.html');
}

function ilustrarHome()
{
    $plantilla = new Plantilla;
    $plantilla->ilustrar('pHeader.php');
    $plantilla->ilustrar('pNavBar.php');
    $plantilla->ilustrar('home.php');
    $plantilla->ilustrar('pFooter.php');
}

function ilustrarClases()
{
    $plantilla = new Plantilla;
    $plantilla->ilustrar('pHeader.php');
    $plantilla->ilustrar('pNavBar.php');
    $plantilla->ilustrar('catalogosVista.php');
    $plantilla->ilustrar('pFooter.php');
}

function ilustrarSubClases()
{
    $plantilla = new Plantilla;
    $plantilla->ilustrar('pHeader.php');
    $plantilla->ilustrar('pNavBar.php');
    $plantilla->ilustrar('catalogosVista2.php');
    $plantilla->ilustrar('pFooter.php');
}

function ilustrarResguardos()
{
    $plantilla = new Plantilla;
    $plantilla->ilustrar('pHeader.php');
    $plantilla->ilustrar('pNavBar.php');
    $plantilla->ilustrar('catalogosVista3.php');
    $plantilla->ilustrar('pFooter.php');
}
