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
var auxIdRes, auxDesRes, auxSerieRes, auxCanRes, auxUniRes, auxImporteRes, auxFechaCapRes, auxModelRes, auxMarcRes, auxNumRes, auxFechaFactRes, auxRFCRes, auxPosRes, auxClasRes, auxSubRes = "";

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

    });
    // ------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------FUNCION select Row BootstrapTable para Editar o eliminar---------------------------------
    // ---------------------------------------------------------------------------------------------------------------------------------
    var $table = $('#tablaClases');
    var select = $('#botonOpcionesCla');

    $(function () {
        $table.on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', function () {
            select.prop('disabled', !$table.bootstrapTable('getSelections').length);
            // console.log(JSON.stringify($table.bootstrapTable('getSelections')));
        })
        select.click(function () {
            var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
                auxID = row.id_clase;
                auxDes = row.descripcion;
                auxSub = row.subclase;

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

    $('#botonAgregarClase').click(function () {
        $('.modal-title').text('Agregar Clase');
        $('#idClase').val(auxID).removeAttr('disabled');
        $('#formClaseA')[0].reset();
        $('#accion').val('Agregar');
        $('#guardarCambiosClaseA').text('Registrar Clase');
        multiselectClases();

        // -------------------------------------------------------------------------------------------------------------
        // ------------------------------Función para el multiselect separacion de OR |---------------------------------
        multiSplitOr();
    });
    $('#botonActualizarClase').click(function () {
        $('#modalAgregarClase').modal('show');
        $('.modal-title').text('Editar Clase');
        $('#idClase').val(auxID).attr('disabled', 'disabled');
        $('#idClase2').val(auxID);
        $('#desClase').val(auxDes);
        $('#multipleSelect').val(auxSub);
        $('#guardarCambiosClaseA').text('Editar Clase');
        $('#accion').val('Modificar');
        $(".vscomp-value").val("data-tooltip", auxSub)
        multiselectClases();
        // -------------------------------------------------------------------------------------------------------------
        // ------------------------------Función para el multiselect separacion de OR |---------------------------------
        multiSplitOr();
    });
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
    // -------------------------------FUNCIONES CRUD Modal Clases----------------------------------------
    // -------------------------------------------------------------------------------------------
    $("#guardarCambiosClaseA").click(function () {

        operarClase();

    });
    function operarClase() {
        $('#formClaseA').off('submit').on('submit', function (event) {
            console.log("iter");
            event.preventDefault();
            parametros = formToObject($("#formClaseA"));
            // console.log(parametros);
            $.ajax({
                url: 'php/operacionesClase.php',
                method: 'POST',
                data: parametros,
                success: function (data) {
                    console.log(data);
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
                            data.message,
                            'error'
                        )
                            .then(function () {

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

    function multiSplitOr() {
        $('#multipleSelect').change(function () {
            var sub = this.value.toString();
            var splitOr = sub.replace(/\,+/g, '|');
            //  console.log(splitOr);
            $(".vscomp-hidden-input").attr("value", splitOr);
        });
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
}

// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------Tabla Subclases---------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
function subclases() {
    $(function () {
        cargarTablaBT('#tablaSubClases');
    });


    var $table = $('#tablaSubClases');
    var select = $('#botonOpcionesSub');

    $(function () {
        $table.on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', function () {
            select.prop('disabled', !$table.bootstrapTable('getSelections').length);
            // console.log(JSON.stringify($table.bootstrapTable('getSelections')));
        })
        select.click(function () {
            var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
                auxIDSubC = row.id_subclase;
                auxDesSubC = row.descripcion;
                // console.log(auxIDSubC);
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
    // -------------------------------------CRUD SubClases-----------------------------------------
    // -------------------------------------------------------------------------------------------

    $('#botonAgregarSubClase').click(function () {
        $('.modal-title').text('Agregar Subclase');
        $('#idSubClase').val(auxIDSubC).removeAttr('disabled');
        $('#formSubClase')[0].reset();
        $('#accion').val('Agregar');
        $('#guardarCambiosSubclase').text('Registrar Subclase');
    });
    $("#guardarCambiosSubclase").click(function () {
        operarSubClase();
    });
    $('#botonActualizarSubClase').click(function () {
        $('#modalAgregarSubClase').modal('show');
        $('.modal-title').text('Editar Subclase');
        $('#idSubClase').val(auxIDSubC).attr('disabled', 'disabled');
        $('#idSubClase2').val(auxIDSubC);
        $('#desSubClase').val(auxDesSubC);
        $('#guardarCambiosSubclase').text('Editar Subclase');
        $('#accion').val('Modificar');

    });
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
    // -------------------------------funciones CRUD Modal SubClases----------------------------------------
    // -------------------------------------------------------------------------------------------

    function operarSubClase() {
        $('#formSubClase').off('submit').on('submit', function (event) {
            console.log("iter");
            event.preventDefault();
            parametros = formToObject($("#formSubClase"));
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
    f_datos("php/areas.php", {}, function (data) {
        console.log(data[0]["nombre_corto"]);
        $("#area").empty();
        $.each(data, function (key, value) {
            $("#area").append('<option value="' + value.clave + '" >' + value.nombre_corto + '</option>');
        });
        $("select#area").val(data);
        $("#area").trigger("change");
    });

    $(function () {
        cargarTablaBT('#tablaResguardo');
    });

    var $table = $('#tablaResguardo');
    var select = $('#botonOpcionesResguardos');

    $(function () {

        $table.on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', function () {
            select.prop('disabled', !$table.bootstrapTable('getSelections').length);
        });

        select.click(function () {
            var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
                auxIdRes = row.id_bien;
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
    // -------------------------------------Funciones Resguardos-------------------------------------
    // -------------------------------------------------------------------------------------------

    function datosBien() {
        $.get("php/refrescarSesion.php", function (data, status) {
            $('#rpeRes').val(data.rpe);
            $('#rpeRes2').val(data.rpe);
        });
    }
    // -------------------------------------------------------------------------------------------
    // -------------------------------------CRUD Resguardos-------------------------------------
    // -------------------------------------------------------------------------------------------
    $('#botonAgregarResguardo').click(function () {
        datosBien()
        $('.modal-title').text('Agregar Resguardo');
        $('#formResguardo')[0].reset();
        $('#accionRes').val('Agregar');
        $('#guardarCambiosResguardos').text('Registrar Resguardo');
        $("#fechaCapRes").val(hoy_input_date());
        selectClasesAndSubClases();

    });

    $("#guardarCambiosResguardos").click(function () {
        // Es el unico boton en castear la funcion, al hacer un console.log, solo imprime una vez.
        operarResguardo();
    });
    // -------------------------------------------------------------------------------------------
    // -------------------------------Modificar Modal Resguardo-----------------------------------
    // -------------------------------------------------------------------------------------------

    $('#botonEditarResguardo').click(function () {
        datosBien()
        $('#modalOperarResguardo').modal('show');
        $('.modal-title').text('Editar resguardo');
        $('#guardarCambiosResguardos').text('Editar resguardo');
        $('#accionRes').val('Modificar');
        $.post("php/selectById_resguardos.php", { id_bien: auxIdRes }, function (data, status) {
            // console.log(data);
            auxCanRes = data.cantidad;
            auxClasRes = data.clase;
            auxDesRes = data.descripcion;
            auxFechaFactRes = data.fecha_factura;
            auxImporteRes = data.importe;
            auxMarcRes = data.marca;
            auxModelRes = data.modelo;
            auxNumRes = data.numero;
            auxPosRes = data.posicion;
            auxRFCRes = data.rfc;
            auxSerieRes = data.serie;
            auxSubRes = data.subclase;
            auxUniRes = data.unidad;
            auxFechaCapRes = data.fecha_captura;
            $("#desRes").val(auxDesRes);
            $("#marcaRes").val(auxMarcRes);
            $("#modeloRes").val(auxModelRes);
            $("#serieRes").val(auxSerieRes);
            $("#unidadSelRes").val(auxUniRes);
            $("#cantidadRes").val(auxCanRes);
            $("#numResFac").val(auxNumRes);
            $("#rfcResFac").val(auxRFCRes);
            $("#fechaResFac").val(auxFechaFactRes);
            $("#fechaCapRes").val(auxFechaCapRes);
            $("#posicionResFac").val(auxPosRes);
            $("#claseSelRes").val(auxClasRes);
            $("select#claseSelRes").trigger("change", auxSubRes);
        });
        selectClasesAndSubClases();
    });
    $('#botonEliminarResguardo').click(function () {
        swal({
            title: "¿Estás seguro de eliminar la clase " + auxIdRes + " ?",
            text: "El resguardo no se podrá recuperar una vez hecha esta operación.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                eliminarResguardo(auxIdRes);
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
    // -------------------------------funciones CRUD Modal Resguardo----------------------------------------
    // -------------------------------------------------------------------------------------------
    function operarResguardo() {
        // Dentro de la funcion, se llega a iterar.
        $('#formResguardo').off("submit").on("submit", function (event) {
            event.preventDefault();
            parametros = formToObject($("#formResguardo"));
            console.log(parametros);
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
                        })
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

    function eliminarResguardo(id) {
        $.ajax({
            url: 'php/operacionesResguardo.php',
            method: 'POST',
            data: { idBien: id, accionRes: "Eliminar" },
            success: function (data) {
                // console.log(data);
                if (data.success) {
                    swal(
                        "El reguardo fue eliminado con exito.", {
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
    }

    function selectClasesAndSubClases() {
        f_datos("php/clases.php", {}, function (data) {
            $(" #claseSelRes").empty();
            $.each(data, function (key, value) {
                $("#claseSelRes").append('<option value="' + value.id_clase + '" >' + value.id_clase + ' ' + value.descripcion + '</option>');
            });
            $("select#claseSelRes").trigger("change");
        });

        $("select#claseSelRes").change(function (event, valor) {
            // console.log(valor);
            f_datos("php/subclases.php", { id_clase: $("#claseSelRes option:selected").val() }, function (data) {
                $("#subClaseSelRes").empty();
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
            // console.log(resp);
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
    arrayForm = $(form).serializeArray();
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