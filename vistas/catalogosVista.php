<div class="container-respons">
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- Modal para crear clase -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <div class="modal fade" id="modalAgregarClase" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Agregar Clase</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal" role="form" accept-charset="UTF-8" name="formClaseA" id="formClaseA" method="POST">
                        <table class="table table-condensed">
                            <tr>
                                <td align="right"><label class="control-label">ID Clase: </span></td>
                                <td colspan="3"><input type="text" name="idClase" id="idClase" class="form-control input-sm" maxlength="6" required></input></td>
                            </tr>
                            <!-- <tr valign="baseline">
                                <td align="right"><label class="control-label">Subclase:</label></td>
                                <td colspan="3" ><input type="text" name="subclaseRef" id="subclaseRef" class="form-control input-sm" maxlength="12"></input></td>
                            </tr> -->
                            <tr valign="baseline">
                                <td align="left"><label class="control-label">Subclase</label></td>
                                <td>
                                    <div id="multipleSelect" placeholder="Subclase" data-silent-initial-value-set="true"></div>
                                </td>
                            </tr>

                            <tr valign="baseline">
                                <td align="right"><label class="control-label">Descripción:</label></td>
                                <td colspan="3"><textarea rows="4" cols="40" name="desClase" id="desClase" class="form-control input-sm" required></textarea></td>
                            </tr>
                        </table>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="submit" class="btn btn-success" id="guardarCambiosClaseA">Registrar Clase</button>
                            <input type="hidden" id="accion" name="accion" value="" />
                            <input type="hidden" id="idClase2" name="idClase2" value="" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- Fin del modal para crear clases -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- ---------------------------------------------------------------------------------------------------------------- -->

    <div class="container" id="clusterModClase1">
        <h2>Catálogo de Clases</h1>
    </div>
    <br>
    <div class="container">

        <div id="toolbar">
            <button type="button" class="btn btn-success" id="botonAgregarClase" data-bs-toggle="modal" data-bs-target="#modalAgregarClase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg> Agregar</button>

            <button type="button" class="btn btn-primary dropdown-toggle" id="botonOpcionesCla" data-bs-toggle="dropdown" disabled><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg> Opciones</button>
            <ul class="dropdown-menu">
                <li><button type="button" class="btn btn-primary dropdown-item" id="botonActualizarClase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg> Editar</button></li>
                <li><button type="button" class="btn btn-danger dropdown-item" id="botonEliminarClase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                        </svg> Eliminar</button></li>
            </ul>
        </div>
        <table data-locale="es-MX" id="tablaClases" data-multiple-select-row="true" data-click-to-select="true" data-show-copy-rows="true" data-show-print="true" data-show-refresh="true" data-show-columns="true" data-toolbar="#toolbar" data-pagination="true" data-search="true" data-method="post" data-query-params="queryParams" data-ajax="ajaxRequestCl">
            <thead>
                <tr>
                    <th data-field="state" data-checkbox="true">ID</th>
                    <th data-field="id_clase" data-sortable="true">ID Clase</th>
                    <th data-field="descripcion" data-sortable="true">Descripcion</th>
                    <th data-field="subclase" data-sortable="true">Subclase</th>
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
    // -----------------------------------------------------------Tabla Clases------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------
    $(document).ready(function() {

        // -----------------------------------------------------------------------------------------------------------------------------------
        // -----------------------------------------------------------Diseño Print------------------------------------------------------------
        // -----------------------------------------------------------------------------------------------------------------------------------
        $(function() {
            cargarTablaBT('#tablaClases');

        });
        getAllSubclasesById();

        // ------------------------------------------------------------------------------------------------------------------------------------
        // ----------------------------------------FUNCION select Row BootstrapTable para Editar o eliminar---------------------------------
        // ---------------------------------------------------------------------------------------------------------------------------------
        var $table = $('#tablaClases');
        var select = $('#botonOpcionesCla');

        $(function() {

            $table.on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', function() {
                select.prop('disabled', !$table.bootstrapTable('getSelections').length);
                // console.log(JSON.stringify($table.bootstrapTable('getSelections')));
            })
            select.click(function() {
                var ids = $.map($table.bootstrapTable('getSelections'), function(row) {

                    auxClases = row;
                    // console.log(auxClases);
                    return row.id
                })
                $table.bootstrapTable('remove', {
                    field: 'id',
                    values: ids
                })
                select.prop('disabled', true)
            });
        });
        // -------------------------------------------------------------------------------------------
        // -------------------------------CRUD Modal Clases----------------------------------------
        // -------------------------------------------------------------------------------------------
        $('#botonAgregarClase').click(function() {

            $('.modal-title').text('Agregar Clase');
            $('#idClase').removeAttr('disabled');
            $('#formClaseA')[0].reset();
            $('#accion').val('Agregar');
            $('#guardarCambiosClaseA').text('Registrar Clase');
        });
        $('#botonActualizarClase').click(function() {
            $('#modalAgregarClase').modal('show');
            $('.modal-title').text('Editar Clase');
            $('#idClase').val(auxClases.id_clase).attr('disabled', 'disabled');
            $('#idClase2').val(auxClases.id_clase);
            $('#desClase').val(auxClases.descripcion);
            $('#guardarCambiosClaseA').text('Editar Clase');
            $('#accion').val('Modificar');
            $("#multipleSelect").val(auxClases.subclase)
            let sub = auxClases.subclase.split('|');
            document.querySelector('#multipleSelect').setValue(sub);
            // multiselectClases(auxClases.subclase);
        });
        $('#botonEliminarClase').click(function() {
            swal({
                title: "¿Estás seguro de eliminar la clase " + auxClases.id_clase + " ?",
                text: "La clase no se podrá recuperar una vez hecha esta operación.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    eliminarClase(auxClases.id_clase);
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
        // -------------------------------FUNCIONES CRUD Modal Clases----------------------------------------
        // -------------------------------------------------------------------------------------------
        $("#guardarCambiosClaseA").click(function() {
            operarClase();
        });

        function operarClase() {
            $('#formClaseA').off('submit').on('submit', function(event) {
                // console.log("iter");
                event.preventDefault();
                parametros = formToObject($("#formClaseA"));
                parametros.subclases = $('#multipleSelect').val().join("|");
                console.log(parametros);
                $.ajax({
                    url: 'php/operacionesClase.php',
                    method: 'POST',
                    data: parametros,
                    success: function(data) {
                        console.log(data);
                        if (data.success) {
                            swal(
                                    "La clase fue operada con exito.", {
                                        icon: "success",
                                    }
                                )
                                .then(function() {
                                    $('#modalAgregarClase').modal('hide');
                                    $('#tablaClases').bootstrapTable('refresh');
                                });
                        } else {
                            swal(
                                    'Error de Operacion',
                                    data.message,
                                    'error'
                                )
                                .then(function() {

                                    $('#tablaClases').bootstrapTable('refresh');
                                });
                        }
                    }
                });
            });

        }



        function eliminarClase(id) {
            $.ajax({
                url: 'php/operacionesClase.php',
                method: 'POST',
                data: {
                    idClase: id,
                    accion: "Eliminar"
                },
                dataType: '',
                success: function(data) {
                    // console.log(data);
                    if (data.success) {
                        swal(
                                "La clase fue eliminada con exito.", {
                                    icon: "success",
                                }
                            )
                            .then(function() {
                                $('#modalAgregarClase').modal('hide');
                                $('#tablaClases').bootstrapTable('refresh');
                            });
                    } else {
                        swal(
                                'Error de Operacion',
                                'Hubo un error en la base de datos. ' + data.message,
                                'error'
                            )
                            .then(function() {
                                $('#modalAgregarClase').modal('hide');
                            });
                    }
                }
            });
        }
        // -------------------------------------------------------------------------------------------
        // -------------------------------------Multiselect---------------------------------------
        // -------------------------------------------------------------------------------------------
        function getAllSubclasesById() {
            VirtualSelect.init({
                ele: '#multipleSelect',
                maxValues: 4,
                multiple: true,
                optionsSelectedText: "Seleccionadas",
                optionSelectedText: "Seleccionada",
                searchPlaceholderText: "Buscar",
            })
            let arrSub = [];
            $.get("php/multiselectClases.php", function(data, status) {
                data.forEach((value, key) => {
                    arrSub[key] = {
                        value: value.id_subclase,
                        label: value.id_subclase
                    };
                });
                // console.log(arrSub);
                document.querySelector('#multipleSelect').setOptions(arrSub);
            });
        }

    });
</script>