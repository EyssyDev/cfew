<?php
require_once "php/refrescarSesion.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
   <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
   <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.21.0/dist/bootstrap-table.min.css">
   <link rel="stylesheet" href="css/plantilla.css" type="text/css">
   <title>Sistema de Resguardo BMPC v2.0</title>
   <?php
      session_start();
      // echo $_SESSION['Num'];
      if ($_SESSION['Num'] == 2) {
   ?>
      <!-- <script type="text/javascript" src="DataTables/datatables.min.js"></script>
      <script type="text/javascript" src="js/tableClases.js"></script>
      <link rel="stylesheet" type="text/css" href="DataTables/datatables.min.css"/> -->
   <?php
      }
   ?>

