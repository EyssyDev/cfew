<div class="container-respons">
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- Modal para operar Resguardos -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <div class="modal fade" id="modalOperarResguardo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Agregar Resguardo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form class="form-horizontal" role="form" accept-charset="UTF-8" name="formResguardo" id="formResguardo" method="POST" enctype="multipart/form-data">
                    <div class="modal-body">
                        <div class="container-fluid">
                            <table class="table table-condensed">
                                <tr>
                                    <td><label class="control-label"><strong>RPE: </strong></span></td>
                                    <td><input type="text" name="rpeRes" id="rpeRes" class="inputMod form-control" value="" disabled></input></td>
                                    <td><label class="control-label"><strong>Fecha de Captura: </strong></label></td>
                                    <td><input type="date" name="fechaCapRes" id="fechaCapRes" step="1" class="inputMod form-control " required></td>
                                </tr>
                            </table>
                        </div>

                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <button class="nav-link active" id="pesBien-tab" data-bs-toggle="tab" data-bs-target="#pesBien" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Datos del Bien</button>
                                <button class="nav-link" id="pesFactura-tab" data-bs-toggle="tab" data-bs-target="#pesFactura" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Datos de Factura</button>
                            </div>
                        </nav>
                        <div class="tab-content" id="pesOpeRes">
                            <div class="tab-pane fade show active" id="pesBien" role="tabpanel" aria-labelledby="pesBien-tab" tabindex="0">

                                <div class="container-fluid">
                                    <table class="table table-condensed">
                                        <tr>
                                            <td><label class="control-label"><strong>Clase: </strong></span></td>
                                            <td>
                                                <select class="inputMod form-control" id="claseSelRes" name="listaClases" placeholder="Clase"></select>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><label class="control-label"><strong>Subclase: </strong></span></td>
                                            <td>
                                                <select class="inputMod form-control" id="subClaseSelRes" name="listaSubClases" placeholder="SubClase" data-search="true" data-silent-initial-value-set="true"></select>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><label class="control-label"><strong>Descripcion: </strong></span></td>
                                            <td><textarea rows="2" cols="40" name="desRes" id="desRes" class="inputMod form-control" required></textarea></td>
                                        </tr>
                                        <tr>
                                            <td><label class="control-label"><strong>Marca: </strong></span></td>
                                            <td><input type="text" name="marcaRes" id="marcaRes" class="inputMod form-control" required></input></td>
                                            <td><label class="control-label"><strong>Modelo: </strong></label></td>
                                            <td><input type="text" name="modeloRes" id="modeloRes" class="inputMod form-control" required></input></td>
                                        </tr>
                                        <tr>
                                            <td><label class="control-label"><strong>Serie: </strong></span></td>
                                            <td><input type="text" name="serieRes" id="serieRes" class="inputMod form-control" required></input></td>
                                            <td><label class="control-label"><strong>Unidad: </strong></label></td>
                                            <td>
                                                <select class="inputMod form-control" id="unidadSelRes" name="unidadSelRes" placeholder="Unidad" data-search="true" data-silent-initial-value-set="true">
                                                    <option value="PIEZA">PIEZA</option>
                                                    <option value="KG">KG</option>
                                                    <option value="METRO">METRO</option>
                                                    <option value="LITRO">LITRO</option>
                                                    <option value="LOTE">LOTE</option>
                                                    <option value="CAJA">CAJA</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label class="control-label"><strong>Cantidad: </strong></span></td>
                                            <td><input type="number" min="1" name="cantidadRes" id="cantidadRes" class="inputMod form-control" value=1 step="any" required></input></td>
                                            <td><label class="control-label"><strong>Importe $: </strong></label></td>
                                            <td><input type="number" min="1" name="importeRes" id="importeRes" class="inputMod form-control" value=1 step="any" required></input></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="pesFactura" role="tabpanel" aria-labelledby="pesFactura-tab" tabindex="0">
                                <div class="container">

                                    <table class="table table-condensed">
                                        <tr>
                                            <td><label class="control-label"><strong>Número: </strong></span></td>
                                            <td><input type="text" name="numResFac" id="numResFac" class="inputMod form-control "></input></td>
                                            <td><label class="control-label"><strong>Fecha: </strong></label></td>
                                            <td><input type="date" name="fechaResFac" id="fechaResFac" step="1" class="inputMod form-control"></td>
                                        </tr>
                                        <tr>
                                            <td><label class="control-label"><strong>RFC: </strong></span></td>
                                            <td><input type="text" name="rfcResFac" id="rfcResFac" class="inputMod form-control"></input></td>
                                            <td><label class="control-label"><strong>Posición: </strong></label></td>
                                            <td><input type="number" name="posicionResFac" id="posicionResFac" class="inputMod form-control" min=0 value="0"></input></td>
                                        </tr>
                                        <tr>
                                            <td><label class="control-label"><strong>Archivo: </strong></span></td>
                                            <td><input class="form-control" type="file" id="formFile" name="formFile" accept=”.pdf”></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="submit" class="btn btn-success" id="guardarCambiosResguardos">Registrar Resguardo</button>
                            <input type="hidden" id="rpeRes2" name="rpeRes2" value="" />
                            <input type="hidden" id="idBien" name="idBien" value="" />
                            <input type="hidden" id="accionRes" name="accionRes" value="Agregar" />
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- Fin del modal para operar Resguardos -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->

    <div class="container">
        <div class="row-fluid">
            <div class="panel panel-info" id="opciones">
                <div class="panel-heading" id="clusterModClase1">
                    <h2 class="text-center" id="tituloDepto">Catálogo de Resguardos</h2>
                </div>
                <div class="panelTopCatalogoResguardo">

                    <form role="formTopRes" id="formFiltro">
                        <div class="row">
                            <div class="col-xs-12 col-md-4 col-lg-4">
                                <select name="area" id="areaR" class="form-control" title="Seleccione la Zona"></select>
                            </div>
                            <div class="col-xs-12 col-md-4 col-lg-4">
                                <select name="depto" id="deptoR" class="form-control" title="Seleccione la especialidad"></select>
                            </div>
                            <div class="col-xs-12 col-md-4 col-lg-4">
                                <select name="rpe" id="Panelrpe" class="form-control" title="Seleccione el RPE"></select>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div id="toolbar">
            <button type="button" class="btn btn-success" id="botonAgregarResguardo" data-bs-toggle="modal" data-bs-target="#modalOperarResguardo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg> Agregar</button>
            <button type="button" disabled class="btn btn-primary dropdown-toggle" id="botonOpcionesResguardos" data-bs-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg> Opciones</button>
            <ul class="dropdown-menu">
                <li><button type="button" class="btn btn-primary dropdown-item" id="botonEditarResguardo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg> Editar</button></li>
                <li><button type="button" class="btn btn-primary dropdown-item" id="botonDarBaja"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
                            <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z" />
                        </svg> Bajas</button></li>
                <li><button type="button" class="btn btn-primary dropdown-item" id="botonTraspasar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                        </svg> Traspasar</button></li>
                <li><button type="button" class="btn btn-primary dropdown-item" id="botonDetalles"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg> Detalles</button></li>
                <li><button type="button" class="btn btn-danger dropdown-item" id="botonEliminarResguardo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg> Eliminar</button></li>
            </ul>
        </div>
        <table data-locale="es-MX" id="tablaResguardo" data-multiple-select-row="true" data-click-to-select="true" data-show-copy-rows="true" data-show-print="true" data-toolbar="#toolbar" data-pagination="true" data-search="true" data-method="post" data-ajax="ajaxRequestRes">
            <thead>
                <tr>
                    <th data-field="state" data-checkbox="true">.</th>
                    <th data-field="id_bien" data-sortable="true">ID</th>
                    <th data-field="descripcion" data-sortable="true">Descripcion</th>
                    <th data-field="serie" data-sortable="true">Serie</th>
                    <th data-field="cantidad" data-sortable="true">Can.</th>
                    <th data-field="unidad" data-sortable="true">Uni.</th>
                    <th data-field="importe" data-sortable="true">Importe</th>
                    <th data-field="fecha_captura" data-sortable="true">Fecha Captura</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    <br>
</div>
<script>
    // -----------------------------------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------Tabla Resguardo---------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------
    $(document).ready(function() {
        var $table = $('#tablaResguardo');
        var select = $('#botonOpcionesResguardos');
        var rpeR = "";
        // -----------------------------------------------------------------------------------------------------------------------------------
        // -----------------------------------------------------------Funciones del Panel Resguardo---------------------------------------------------------
        // -----------------------------------------------------------------------------------------------------------------------------------

        f_datos("php/areas.php", {}, function(data) {
            $("#areaR").empty();
            // console.log(data);

            $.each(data, function(key, value) {
                $("#areaR").append('<option value="' + value.clave + '" >' + value.nombre_corto + '</option>');
            });
            $("#areaR").val(dataUser.area);
            $("#areaR").trigger("change");
        });
        $("#areaR").off("change").on("change", function(e) {
            if ($table) $table.bootstrapTable('removeAll');
            f_datos("php/deptos.php", {}, function(datDep) {
                // console.log(datDep);
                $("#deptoR").empty();
                $.each(datDep, function(key, value) {
                    $("#deptoR").append('<option value="' + value.cl_cenco + '" >' + value.Descripcion + '</option>');
                });
                $("#deptoR").trigger("change");
            });
        });
        $("#deptoR").off("change").on("change", function(e) {
            f_datos("php/empleados.php", {
                area: $("#areaR").val(),
                depto: $("#deptoR").val()
            }, function(datEmp) {
                // console.log(datEmp);
                $("#Panelrpe").empty();
                $.each(datEmp, function(key, value) {
                    $("#Panelrpe").append('<option value="' + value.rpe + '" ><pre>' + value.rpe + " " + value.nombre + '</pre></option>');
                });
                // if($table)
                $("#Panelrpe").trigger("change");
                // else
                // 	cargaBien($("#Panelrpe").val());
            });
        });
        $("#Panelrpe").off('change').on('change', function(e) {
            rpeR = $('#Panelrpe').val();
            if ($table) $table.bootstrapTable('removeAll');

            f_datos("php/selectAllResguardos.php", {
                rpe: rpeR
            }, function(stm) {
                // console.log(stm);
                $table.bootstrapTable('load', stm);
            });
            // console.log(rpeR);
        });

        $(function() {
            cargarTablaBT('#tablaResguardo');
        });

        $(function() {

            $table.on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', function() {
                select.prop('disabled', !$table.bootstrapTable('getSelections').length);
            });

            select.click(function() {
                var ids = $.map($table.bootstrapTable('getSelections'), function(row) {
                    // console.log(row);
                    auxResguardos = row;
                    return row.id
                });
                $table.bootstrapTable('remove', {
                    field: 'id',
                    values: ids
                });
                select.prop('disabled', true);
            });
        });
        // -------------------------------------------------------------------------------------------
        // -------------------------------------CRUD Resguardos-------------------------------------
        // -------------------------------------------------------------------------------------------
        $('#botonAgregarResguardo').click(function() {

            agregar();
        });
        $("#guardarCambiosResguardos").click(function() {
            operarResguardo();
        });
        $('#botonEditarResguardo').click(function() {

            modificar();
        });
        $('#botonEliminarResguardo').click(function() {
            swal({
                title: "¿Estás seguro de eliminar la clase " + auxResguardos.id_bien + " ?",
                text: "El resguardo no se podrá recuperar una vez hecha esta operación.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    eliminarResguardo(auxResguardos.id_bien);
                } else {
                    swal(
                        'Sin cambios',
                        'No se realizó ninguna operación.',
                        'error'
                    )
                }
            });
        });


        // -------------------------------------------------------------------------------------------
        // -------------------------------funciones CRUD Modal Resguardo----------------------------------------
        // -------------------------------------------------------------------------------------------
        function operarResguardo() {
            // Dentro de la funcion, se llega a iterar.
            $('#formResguardo').off("submit").on("submit", function(event) {
                event.preventDefault();
                parametros = formToObject($("#formResguardo"));
                console.log(parametros);
                // console.log(accion);
                // console.log(parametros);
                $.ajax({
                    url: 'php/operacionesResguardo.php',
                    method: 'POST',
                    data: parametros,
                    success: function(data) {
                        // console.log(data);
                        if (data.success) {
                            swal(
                                    "El resguardo fue operado con exito.", {
                                        icon: "success",
                                    })
                                .then(function() {
                                    $('#modalOperarResguardo').modal('hide');
                                    $('#tablaResguardo').bootstrapTable('refresh');
                                });
                        } else {
                            swal(
                                    'Error de Operacion',
                                    'Hubo un error en la base de datos. ' + data.message,
                                    'error'
                                )
                                .then(function() {
                                    $('#modalOperarResguardo').modal('hide');
                                });
                        }
                    }
                });
            });
        }

        function agregar() {
            f_datos("php/clases.php", {}, function(data) {
                $(" #claseSelRes").empty();
                $.each(data, function(key, value) {
                    $("#claseSelRes").append('<option value="' + value.id_clase + '" >' + value.id_clase + ' ' + value.descripcion + '</option>');
                });
                $('#rpeRes').attr("value", rpeR);
                $('#rpeRes2').val(rpeR);
                $('.modal-title').text('Agregar Resguardo');
                $('#formResguardo')[0].reset();
                $('#accionRes').val('Agregar');
                $('#guardarCambiosResguardos').text('Registrar Resguardo');
                $("#fechaCapRes").val(hoy_input_date());
                $("select#claseSelRes").trigger("change");
            });

            $("select#claseSelRes").change(function(event, valor) {
                // console.log(valor);
                f_datos("php/subclases.php", {
                    id_clase: $("#claseSelRes option:selected").val()
                }, function(data) {
                    $("#subClaseSelRes").empty();
                    $.each(data, function(key, value) {
                        // console.log(value);
                        $("#subClaseSelRes").append('<option value="' + value.id_subclase + '" >' + value.id_subclase + ' ' + value.descripcion + '</option>');
                    });

                });

            });
        }

        function modificar() {
            f_datos("php/clases.php", {}, function(data) {
                $(" #claseSelRes").empty();
                $.each(data, function(key, value) {
                    $("#claseSelRes").append('<option value="' + value.id_clase + '" >' + value.id_clase + ' ' + value.descripcion + '</option>');
                });
                $('#rpeRes').val(auxResguardos.rpe);
                $('#rpeRes2').val(auxResguardos.rpe);
                $('#modalOperarResguardo').modal('show');
                $('.modal-title').text('Editar resguardo');
                $('#guardarCambiosResguardos').text('Editar resguardo');
                $('#accionRes').val('Modificar');
                $("#idBien").val(auxResguardos.id_bien);
                $("#desRes").val(auxResguardos.descripcion);
                $("#marcaRes").val(auxResguardos.marca);
                $("#modeloRes").val(auxResguardos.modelo);
                $("#serieRes").val(auxResguardos.serie);
                $("#unidadSelRes").val(auxResguardos.unidad);
                $("#cantidadRes").val(auxResguardos.cantidad);
                $("#numResFac").val(auxResguardos.numero);
                $("#rfcResFac").val(auxResguardos.rfc);
                $("#fechaResFac").val(auxResguardos.fecha_factura);
                $("#fechaCapRes").val(auxResguardos.fecha_captura);
                $("#posicionResFac").val(auxResguardos.posicion);
                $("#claseSelRes").val(auxResguardos.clase);
                $("select#claseSelRes").trigger("change", auxResguardos.subclase);
            });

            $("select#claseSelRes").change(function(event, valor) {
                // console.log(valor);
                f_datos("php/subclases.php", {
                    id_clase: $("#claseSelRes option:selected").val()
                }, function(data) {
                    $("#subClaseSelRes").empty();

                    $.each(data, function(key, value) {
                        // console.log(value);
                        $("#subClaseSelRes").append('<option value="' + value.id_subclase + '" >' + value.id_subclase + ' ' + value.descripcion + '</option>');
                    });
                    if (valor)
                        $("#subClaseSelRes").val(valor);

                });

            });
        }

        function eliminarResguardo(id) {
            $.ajax({
                url: 'php/operacionesResguardo.php',
                method: 'POST',
                data: {
                    idBien: id,
                    accionRes: "Eliminar"
                },
                success: function(data) {
                    // console.log(data);
                    if (data.success) {
                        swal(
                                "El reguardo fue eliminado con exito.", {
                                    icon: "success",
                                }
                            )
                            .then(function() {
                                $('#modalOperarResguardo').modal('hide');
                                $('#tablaResguardo').bootstrapTable('refresh');
                            });
                    } else {
                        swal(
                                'Error de Operacion',
                                'Hubo un error en la base de datos. ' + data.message,
                                'error'
                            )
                            .then(function() {
                                $('#modalOperarResguardo').modal('hide');
                            });
                    }
                }
            });
        }
    });

    function ajaxRequestRes(params) {
        var url = 'php/selectAllResguardos.php';
        $.get(url, jQuery.parseJSON(params.data)).then(function(res) {
            params.success(res.data);
        });
    }
</script>