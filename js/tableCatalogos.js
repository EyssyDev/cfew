// variables globales de clases
var auxID, auxDes, auxSub = "";
// variables globales de subclases
var auxIDSubC, auxDesSubC = "";
var fecha = new Date();
var fechaHoy = fecha.toLocaleDateString() + " a la(s) " + fecha.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
});
// variables globales de reguardos
var auxIdRes, auxDesRes, auxSerieRes, auxCanRes, auxUniRes, auxImporteRes, auxFechaCapRes = "";

$(document).ready(function () {
    clases();
    subclases();
    resguardos();
});

// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------Tabla Clases------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
function clases() {

    // -----------------------------------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------Diseño Print------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------
    $(function () {
        cargarTablaBT('#tablaClases');
        multiselectClases();
    });

    var $table = $('#tablaClases');
    var select = $('#botonOpciones');

    $(function () {
        $table.on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', function () {
            select.prop('disabled', !$table.bootstrapTable('getSelections').length);
            // console.log(JSON.stringify($table.bootstrapTable('getSelections')));
        })
        data = select.click(function () {
            var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
                auxID = row.id_clase;
                auxDes = row.descripcion;
                auxSub = row.subclase;

                return row.id
            })
            // $.each(items, function (i, item) {
            //     $('#multipleSelect').append($('<option>', { 
            //         value: item.value,
            //         text : item.text 
            //     }));
            // });
            // // -------------------------------------------------------------------------------------------
            // -------------------------------------Eliminar Clase----------------------------------------
            // -------------------------------------------------------------------------------------------
            $('#botonEliminarClase').click(function () {
                swal({
                    title: "¿Estás seguro de eliminar la clase " + auxID + " ?",
                    text: "La clase no se podrá recuperar una vez hecha esta operación.",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                        eliminarClase(auxID);
                    }
                    else {
                        swal(
                            'Sin cambios',
                            'No se realizó ninguna operación.',
                            'error'
                        )
                    }
                });
            });
            // -------------------------------------------------------------------------------------------
            // -------------------------------Modificar Modal Clase----------------------------------------
            // -------------------------------------------------------------------------------------------

            $('#botonActualizarClase').click(function () {
                $('#modalAgregarClase').modal('show');
                $('.modal-title').text('Editar Clase');
                $('#idClase').val(auxID).attr('disabled', 'disabled');
                $('#idClase2').val(auxID);
                $('#desClase').val(auxDes);
                $('#multipleSelect').val(auxSub);
                $('#guardarCambiosClaseA').text('Editar Clase');
                $('#accion').val('Modificar');

            });
            $table.bootstrapTable('remove', {
                field: 'id',
                values: ids
            })
            select.prop('disabled', true)
        });

        $('#botonAgregarClase').click(function () {
            $('.modal-title').text('Agregar Clase');
            $('#idClase').val(auxID).removeAttr('disabled');
            $('#formClaseA')[0].reset();
            $('#accion').val('Agregar');
            $('#guardarCambiosClaseA').text('Registrar Clase');
        });

    });

    // -------------------------------------------------------------------------------------------
    // -------------------------------------Multiselect---------------------------------------
    // -------------------------------------------------------------------------------------------

    function multiselectClases() {
        VirtualSelect.init({
            ele: '#multipleSelect',
            maxValues: 4,
            multiple: true,
            // selectedValue: [auxSub]
        });
        // console.log(auxSub);
        getAllSubclasesById();
    }


    function getAllSubclasesById() {
        $.get("php/multiselectClases.php", function (data, status) {

            $.each(data, function (key, valor) {
                document.querySelector("#multipleSelect").addOption({
                    value: valor.id_subclase,
                    label: valor.id_subclase
                })
            });

        });
    }
    // -------------------------------------------------------------------------------------------
    // -------------------------------------Agregar Clase----------------------------------------
    // -------------------------------------------------------------------------------------------
    $("#guardarCambiosClaseA").click(function () {
        operarClase();
    });
    function operarClase() {
        $(document).on('submit', '#formClaseA', function (event) {
            event.preventDefault();
            parametros = formToObject($("form#formClaseA"));
            // console.log(accion);
            // console.log(parametros);
            $.ajax({
                url: 'php/operacionesClase.php',
                method: 'POST',
                data: parametros,
                success: function (data) {
                    // console.log(data);
                    if (data.success) {
                        swal(
                            "La clase fue operada con exito.", {
                            icon: "success",
                        }
                        )
                            .then(function () {
                                $('#modalAgregarClase').modal('hide');
                                $('#tablaClases').bootstrapTable('refresh');
                            });
                    }

                    else {
                        swal(
                            'Error de Operacion',
                            'Hubo un error en la base de datos. ' + data.message,
                            'error'
                        )
                            .then(function () {
                                $('#modalAgregarClase').modal('hide');
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
            data: { idClase: id, accion: "Eliminar" },
            dataType: '',
            success: function (data) {
                // console.log(data);
                if (data.success) {
                    swal(
                        "La clase fue eliminada con exito.", {
                        icon: "success",
                    }
                    )
                        .then(function () {
                            $('#modalAgregarClase').modal('hide');
                            $('#tablaClases').bootstrapTable('refresh');
                        });
                }
                else {
                    swal(
                        'Error de Operacion',
                        'Hubo un error en la base de datos. ' + data.message,
                        'error'
                    )
                        .then(function () {
                            $('#modalAgregarClase').modal('hide');
                        });
                }
            }

        });

    }
}

// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------Tabla Subclases---------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
function subclases() {
    $(function () {
        cargarTablaBT('#tablaSubClases');
    });


    var $table = $('#tablaSubClases');
    var select = $('#botonOpciones');

    $(function () {
        $table.on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', function () {
            select.prop('disabled', !$table.bootstrapTable('getSelections').length);
            // console.log(JSON.stringify($table.bootstrapTable('getSelections')));
        })
        data = select.click(function () {
            var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
                auxIDSubC = row.id_subclase;
                auxDesSubC = row.descripcion;
                // console.log(auxIDSubC);
                return row.id
            })
            // -------------------------------------------------------------------------------------------
            // -------------------------------------Eliminar Clase----------------------------------------
            // -------------------------------------------------------------------------------------------
            $('#botonEliminarSubClase').click(function () {
                swal({
                    title: "¿Estás seguro de eliminar la subclase " + auxIDSubC + " ?",
                    text: "La subclase no se podrá recuperar una vez hecha esta operación.",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                        eliminarSubClase(auxIDSubC);
                    }
                    else {
                        swal(
                            'Sin cambios',
                            'No se realizó ninguna operación.',
                            'error'
                        )
                    }
                });
            });
            // -------------------------------------------------------------------------------------------
            // -------------------------------Modal Clase----------------------------------------
            // -------------------------------------------------------------------------------------------
            // $('#botonAgregarSubClase').click(function () {
            //     $('.modal-title').text('Agregar Subclase');
            //     $('#idSubClase').val(auxIDSubC).removeAttr('disabled');
            //     $('#formSubClase')[0].reset();
            //     $('#accion').val('Agregar');
            //     $('#guardarCambiosSubClase').text('Registrar Subclase');
            // });

            $('#botonActualizarSubClase').click(function () {
                $('#modalAgregarSubClase').modal('show');
                $('.modal-title').text('Editar Subclase');
                $('#idSubClase').val(auxIDSubC).attr('disabled', 'disabled');
                $('#idSubClase2').val(auxIDSubC);
                $('#desSubClase').val(auxDesSubC);
                $('#guardarCambiosSubClase').text('Editar Subclase');
                $('#accion').val('Modificar');

            });
            $table.bootstrapTable('remove', {
                field: 'id',
                values: ids
            })
            select.prop('disabled', true)
        });

        $('#botonAgregarSubClase').click(function () {
            $('.modal-title').text('Agregar Subclase');
            $('#idSubClase').val(auxIDSubC).removeAttr('disabled');
            $('#formSubClase')[0].reset();
            $('#accion').val('Agregar');
            $('#guardarCambiosSubClase').text('Registrar Subclase');
        });

    });


    // -------------------------------------------------------------------------------------------
    // -------------------------------------Agregar SubClase-----------------------------------------
    // -------------------------------------------------------------------------------------------
    $("#guardarCambiosSubclase").click(function () {
        operarSubClase();
    });


    function operarSubClase() {
        $(document).on('submit', '#formSubClase', function (event) {
            event.preventDefault();
            parametros = formToObject($("form#formSubClase"));
            // console.log(parametros);
            $.ajax({
                url: 'php/operacionesSubClase.php',
                method: 'POST',
                data: parametros,
                success: function (data) {
                    // console.log(data);
                    if (data.success) {
                        swal(
                            "La subclase fue operada con exito.", {
                            icon: "success",
                        }
                        )
                            .then(function () {
                                $('#modalAgregarSubClase').modal('hide');
                                $('#tablaSubClases').bootstrapTable('refresh');
                            });
                    }
                    else {
                        swal(
                            'Error de Operacion',
                            'Hubo un error en la base de datos. ' + data.message,
                            'error'
                        )
                            .then(function () {
                                $('#modalAgregarSubClase').modal('hide');
                            });
                    }
                }
            });
        });
    }

    function eliminarSubClase(id) {
        $.ajax({
            url: 'php/operacionesSubClase.php',
            method: 'POST',
            data: { idSubClase: id, accion: "Eliminar" },
            dataType: '',
            success: function (data) {
                // console.log(data);
                if (data.success) {
                    swal(
                        "La subclase fue eliminada con exito.", {
                        icon: "success",
                    }
                    )
                        .then(function () {
                            $('#modalAgregarSubClase').modal('hide');
                            $('#tablaSubClases').bootstrapTable('refresh');
                        });
                }
                else {
                    swal(
                        'Error de Operacion',
                        'Hubo un error en la base de datos. ' + data.message,
                        'error'
                    )
                        .then(function () {
                            $('#modalAgregarSubClase').modal('hide');
                        });
                }
            }

        });

    }
}

// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------Tabla Resguardo---------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------

function resguardos() {
    $(function () {
        cargarTablaBT('#tablaResguardo');
    });

    var $table = $('#tablaResguardo');
    var select = $('#botonOpcionesResguardos');

    $(function () {

        $table.on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', function () {
            select.prop('disabled', !$table.bootstrapTable('getSelections').length);
        });

        data = select.click(function () {
            var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
                auxIdRes = row.id_bien;
                auxDesRes = row.descripcion;
                auxSerieRes = row.serie;
                auxCanRes = row.cantidad;
                auxUniRes = row.unidad;
                auxImporteRes = row.importe;
                auxFechaCapRes = row.fecha_captura;
                return row.id
            });

            // -------------------------------------------------------------------------------------------
            // -------------------------------------Eliminar Resguardo------------------------------------
            // -------------------------------------------------------------------------------------------

            // $('#botonEliminarClase').click(function () {
            //     swal({
            // 		title: "¿Estás seguro de eliminar la clase " + auxID + " ?",
            // 		text: "La clase no se podrá recuperar una vez hecha esta operación.",
            // 		icon: "warning",
            // 		buttons: true,
            // 		dangerMode: true,
            // 	}).then((willDelete) => {
            // 		if (willDelete) {
            // 			eliminarClase(auxID);
            // 		} 
            // 		else {
            // 			swal (
            //                 'Sin cambios',
            //                 'No se realizó ninguna operación.',
            //                 'error'
            //             )
            // 		}
            // 	});
            // });
            // -------------------------------------------------------------------------------------------
            // -------------------------------Modificar Modal Resguardo-----------------------------------
            // -------------------------------------------------------------------------------------------

            // $('#botonActualizarClase').click(function() {
            //     $('#modalAgregarClase').modal('show');
            //     $('.modal-title').text('Editar Clase');
            //     $('#idClase').val(auxID).attr('disabled','disabled');
            //     $('#idClase2').val(auxID);
            //     $('#desClase').val(auxDes);
            //     $('#subClases').val(auxSub);
            //     $('#guardarCambiosClaseA').text('Editar Clase');
            //     $('#accion').val('Modificar');

            // });

            $table.bootstrapTable('remove', {
                field: 'id',
                values: ids
            });
            select.prop('disabled', true);
        });

        // -------------------------------------------------------------------------------------------
        // -------------------------------------Agregar Resguardo------------------------------------
        // -------------------------------------------------------------------------------------------

        $('#botonAgregarResguardo').click(function () {
            $('.modal-title').text('Agregar Resguardo');
            $('#formResguardo')[0].reset();
            $('#accionRes').val('Agregar');
            $('#guardarCambiosResguardos').text('Registrar Resguardo');
            $("#fechaCapRes").val(hoy_input_date());
            selectClasesAndSubClases()
            $.post("php/refrescarSesion.php", function (data, status) {
                $('#rpeRes').val(data.rpe);
            });

        });

    });

    $("#guardarCambiosResguardos").click(function () {
        operarResguardo();
    });

    function operarResguardo() {
        $(document).on('submit', '#formResguardo', function (event) {
            event.preventDefault();
            parametros = formToObject($("form#formResguardo"));
            // console.log(accion);
            // console.log(parametros);
            $.ajax({
                url: 'php/operacionesResguardo.php',
                method: 'POST',
                data: parametros,
                success: function (data) {
                    // console.log(data);
                    if (data.success) {
                        swal(
                            "El resguardo fue operado con exito.", {
                            icon: "success",
                        }
                        )
                            .then(function () {
                                $('#modalOperarResguardo').modal('hide');
                                $('#tablaResguardo').bootstrapTable('refresh');
                            });
                    }

                    else {
                        swal(
                            'Error de Operacion',
                            'Hubo un error en la base de datos. ' + data.message,
                            'error'
                        )
                            .then(function () {
                                $('#modalOperarResguardo').modal('hide');
                            });
                    }
                }
            });
        });
    }

    function selectClasesAndSubClases() {
        f_datos("php/clases.php", {}, function (data) {
            $.each(data, function (key, value) {
                $("#claseSelRes").append('<option value="' + value.id_clase + '" >' + value.id_clase + ' ' + value.descripcion + '</option>');
            });

            $("select#claseSelRes").trigger("change");

        });

        $("select#claseSelRes").change(function (event, valor) {
            // console.log(valor);
            f_datos("php/subclases.php", { id_clase: $("#claseSelRes option:selected").val() }, function (data) {
                $(" #subClaseSelRes").empty();
                $.each(data, function (key, value) {
                    // console.log(value);
                    $("#subClaseSelRes").append('<option value="' + value.id_subclase + '" >' + value.id_subclase + ' ' + value.descripcion + '</option>');
                });

            });

        });
    }
}

// -----------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------Helpers, AjaxRequest-------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------

function f_datos(url, param, fn_cb, fn_err) {
    $.ajax({
        type: "POST",
        url: url,
        data: param
    })
        .done(function (resp) {
            if (!resp.success) {
                alert(resp.message, 1);
                if (fn_err)
                    fn_err(resp.data);
            }
            else {
                if (fn_cb)
                    fn_cb(resp.data);
            }
        });
}
function formToObject(form) {
    var arrayForm = $(form).serializeArray();
    var objectForm = {};
    arrayForm.forEach(function (obj, index) {
        objectForm[obj.name] = obj.value;
    });
    return objectForm;
}
function hoy_input_date() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var year = d.getFullYear();
    var today = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
    return today;
}


function ajaxRequestCl(params) {
    var url = 'php/Select_all_clases.php';
    //consola(jQuery.parseJSON(params.data));
    $.get(url, jQuery.parseJSON(params.data)).then(function (res) {
        // console.log(res);
        params.success(res);
    });
}

function ajaxRequestSub(params) {
    var url = 'php/Select_all_subclases.php';
    $.get(url, jQuery.parseJSON(params.data)).then(function (res) {
        params.success(res);
    });
}

function ajaxRequestRes(params) {
    var url = 'php/selectAllResguardos.php';
    $.get(url, jQuery.parseJSON(params.data)).then(function (res) {
        params.success(res);

    });
}

function cargarTablaBT(tablaDinamica) {
    $(tablaDinamica).bootstrapTable({
        printPageBuilder: function (table) {
            return `
            <html>
                <head>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                    <style type="text/css" media="print">
                        @page {
                            size: auto;
                            margin: 25px 0 25px 0;
                        }
                    </style>
                    <style type="text/css" media="all">
                        body {
                            font-family: sans-serif;
                        }
                        table {
                            border-collapse: collapse;
                            font-size: 12px;
                        }
                        table, th, td {
                            border: 1px solid grey;
                        }
                        th, td {
                            text-align: left;
                            vertical-align: middle;
                            font-size: 15px;
                            padding: 5px;
                        }
                        p {
                            font-weight: bold;
                            margin-left:20px;
                        }
                        small {
                            margin-left:25px;
                            color: gray
                        }
                        table {
                            width:94%;
                            margin-left:3%;
                            margin-right:3%;
                        }
                        div.bs-table-print {
                            text-align:center;
                        }
                        .boxMod1 {
                            text-align: center;
                            border-bottom: 2.5px solid grey;
                        }
                        .boxMod1 small {
                            color: gray
                        }
                        .head {
                            padding: 3%; 
                            letter-spacing: 0.07em;
                        }                         
                    </style>
                </head>
                <title>Reporte BMPC</title>
                <body>
                    <small>Reporte generado el dia ${fechaHoy}</small>
                    <div class="row head">
                        <div class="col-md boxMod1">
                            <small>
                                Gerencia Regional de Transmisión Sureste 
                                <br>
                                Zona de Transmisión Malpaso
                            </small>
                            <p>Sistema de Control de Resguardo Poca Cuantia</p>
                        </div>
                    </div>
                    <div class="bs-table-print">${table}</div>
                </body>
            </html>
            `
        }
    });

}