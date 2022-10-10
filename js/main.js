// variables globales de clases
var auxClases= [];
// variables globales de subclases
var auxIDSubC, auxDesSubC = "";

var fecha = new Date();
var fechaHoy = fecha.toLocaleDateString() + " a la(s) " + fecha.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
});

// variables globales de reguardos
var auxResguardos = [];
// variables globales de reguardos bajas
var auxResguardosBajas = [];

$(document).ready(function () {
    clases();
    subclases();
    resguardos();
    reportesBajas();
});


$.get("php/refrescarSesion.php", function (data, status) {
    dataUser = data;
    // console.log(dataUser);
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
	// esta inicialización se ocupa para resolver un detalle con las funciones de Virtual select al momento de obtener las subclases
	var i = 0;
	// console.log(i);
	$('#botonAgregarClase').click(function () {
		// console.log(i);
		i++;
        $('.modal-title').text('Agregar Clase');
        $('#idClase').removeAttr('disabled');
        $('#formClaseA')[0].reset();
        $('#accion').val('Agregar');
        $('#guardarCambiosClaseA').text('Registrar Clase');
		
		if(i == 1){
 		multiselectClases();
		}
       
    });
  	$('#botonActualizarClase').click(function () {
		// console.log(i);
		i++;
        $('#modalAgregarClase').modal('show');
        $('.modal-title').text('Editar Clase');
        $('#idClase').val(auxClases.id_clase).attr('disabled', 'disabled');
        $('#idClase2').val(auxClases.id_clase);
        $('#desClase').val(auxClases.descripcion);
        $('#guardarCambiosClaseA').text('Editar Clase');
        $('#accion').val('Modificar');
        $(".vscomp-value").val("data-tooltip", auxClases.subclases);
        if(i == 1){
 		multiselectClases();
		}
    });
    $('#botonEliminarClase').click(function () {
        swal({
            title: "¿Estás seguro de eliminar la clase " + auxClases.id_clase + " ?",
            text: "La clase no se podrá recuperar una vez hecha esta operación.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                eliminarClase(auxClases.id_clase);
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
            // console.log("iter");
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
        });
		getAllSubclasesById();
        multiSplitOr();
    }
	function getAllSubclasesById() {
		$.get("php/multiselectClases.php", function (data, status) {
			data.forEach((valor, key) =>  {
                document.querySelector("#multipleSelect").addOption({
                    value: valor.id_subclase,
                    label: valor.id_subclase
                });
            }); 
    	}); 
        
    }
    function multiSplitOr() {
        $('#multipleSelect').change(function () {
            let sub = this.value.toString();
            let splitOr = sub.replace(/\,+/g, '|');
            //  console.log(splitOr);
            $(".vscomp-hidden-input").attr("value", splitOr);
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
        $('#idSubClase').removeAttr('disabled');
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
    
    var $table = $('#tablaResguardo');
    var select = $('#botonOpcionesResguardos');

    // -----------------------------------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------Funciones del Panel Resguardo---------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------

    f_datos("php/areas.php", {}, function (data) {
        $("#areaR").empty();
        // console.log(data);
       
        $.each(data, function (key, value) {
            $("#areaR").append('<option value="' + value.clave + '" >' + value.nombre_corto + '</option>');
        });
        $("#areaR").val(dataUser.area);
        $("#areaR").trigger("change");
    });
    $("#areaR").off("change").on("change",function(e){
			// if ($table) tableapi.clear().draw('page');
			f_datos("php/deptos.php", {}, function(datEsp){
                // console.log(datEsp);
				$("#deptoR").empty();
				$.each(datEsp, function( key, value ) {
					$("#deptoR").append('<option value="'+value.cl_cenco+'" >'+value.Descripcion+'</option>');
				});
				$("#deptoR").trigger("change");
			});
		});
    $("#deptoR").off("change").on("change",function(e){
        f_datos("php/empleados.php", {area:$("#areaR").val(),depto:$("#deptoR").val()}, function(datEmp){
            // console.log(datEmp);
            $("#Panelrpe").empty();
            $.each(datEmp, function( key, value ) {
                $("#Panelrpe").append('<option value="'+value.rpe+'" ><pre>'+value.rpe+" "+value.nombre+'</pre></option>');
            });
            
            // if($table)
            $("#Panelrpe").trigger("change");
            // else
            // 	cargaBien($("#Panelrpe").val());
        });
    });
    $("#Panelrpe").off('change').on('change',function(e){
        var rpeR = $('#Panelrpe').val();
        f_datos("php/selectAllResguardos.php", {rpe:rpeR}, function(stm){
        // console.log(stm);
        $table.bootstrapTable('load', stm)});
        // console.log(rpeR);
	});

    $(function () {
    cargarTablaBT('#tablaResguardo');
    });

    
    $(function () {

        $table.on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', function () {
            select.prop('disabled', !$table.bootstrapTable('getSelections').length);
        });

        select.click(function () {
            var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
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
    $('#botonAgregarResguardo').click(function () {
        $('#rpeRes').val(dataUser.rpe);
        $('#rpeRes2').val(dataUser.rpe);
        agregar();
    });
    $("#guardarCambiosResguardos").click(function () {
        operarResguardo();
    });
    $('#botonEditarResguardo').click(function () {
       
        modificar();
    });
    $('#botonEliminarResguardo').click(function () {
        swal({
            title: "¿Estás seguro de eliminar la clase " + auxResguardos.id_bien + " ?",
            text: "El resguardo no se podrá recuperar una vez hecha esta operación.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                eliminarResguardo(auxResguardos.id_bien);
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

    function agregar() {
        f_datos("php/clases.php", {}, function (data) {
            $(" #claseSelRes").empty();
            $.each(data, function (key, value) {
                $("#claseSelRes").append('<option value="' + value.id_clase + '" >' + value.id_clase + ' ' + value.descripcion + '</option>');
            });
            $('.modal-title').text('Agregar Resguardo');
            $('#formResguardo')[0].reset();
            $('#accionRes').val('Agregar');
            $('#guardarCambiosResguardos').text('Registrar Resguardo');
            $("#fechaCapRes").val(hoy_input_date());
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
        function modificar() {
        f_datos("php/clases.php", {}, function (data) {
            $(" #claseSelRes").empty();
            $.each(data, function (key, value) {
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

        $("select#claseSelRes").change(function (event, valor) {
            // console.log(valor);
            f_datos("php/subclases.php", { id_clase: $("#claseSelRes option:selected").val() }, function (data) {
                $("#subClaseSelRes").empty();
                $.each(data, function (key, value) {
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


}

// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------Tabla reportes_baja---------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
function reportesBajas() {
    $(function () {
        cargarTablaBT('#tablaReporteBajas');
        
    });

    f_datos("php/areas.php", {}, function (data) {
        
        $("#area").empty();
        $.each(data, function (key, value) {
            $("#area").append('<option value="' + value.clave + '" >' + value.nombre_corto + '</option>');
        });
        $("#area").val(dataUser.area);
        $("#area").trigger("change");
    });
    var $table = $('#tablaReporteBajas');
    var select = $('#botonEditarRepoBajas');
    var select1 = $('#botonDetallesRepoBaja');

    $(function () {

        $table.on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', function () {
            select.prop('disabled', !$table.bootstrapTable('getSelections').length);
            select1.prop('disabled', !$table.bootstrapTable('getSelections').length);
        });

        select.click(function () {
            var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
            // console.log(row);
            auxResguardosBajas = row;
                return row.id
            });
            $table.bootstrapTable('remove', {
                field: 'id',
                values: ids
            });
            select.prop('disabled', true);
            select1.prop('disabled', true);
        });
    });
   
    // -------------------------------------------------------------------------------------------
    // -------------------------------------CRUD Resguardos-------------------------------------
    // -------------------------------------------------------------------------------------------
    $("#guardarCambiosRepoBajas").click(function () {
        operarResguardoBaja();
    });
    $('#botonEditarRepoBajas').click(function () {
        
        modificar();
    });
    
    // -------------------------------------------------------------------------------------------
    // -------------------------------funciones CRUD Modal Resguardo----------------------------------------
    // -------------------------------------------------------------------------------------------
    function operarResguardoBaja() {
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

        function modificar() {
        f_datos("php/clases.php", {}, function (data) {
            $(" #claseSelRes").empty();
            $.each(data, function (key, value) {
                $("#claseSelRes").append('<option value="' + value.id_clase + '" >' + value.id_clase + ' ' + value.descripcion + '</option>');
            });
            // console.log(auxResguardosBajas);
            $('#rpeResBaja').val(auxResguardosBajas.rpe);
            $('#rpeResBaja2').val(auxResguardosBajas.rpe);
            $('#modalOperarRepoBajas').modal('show');
            $('#accionResBaja').val('Modificar');
            $("#idBienBaja").val(auxResguardosBajas.id_bien);
            $("#desResBaja").val(auxResguardosBajas.descripcion);
            $("#marcaResBaja").val(auxResguardosBajas.marca);
            $("#modeloResBaja").val(auxResguardosBajas.modelo);
            $("#serieResBaja").val(auxResguardosBajas.serie);
            $("#unidadSelResBaja").val(auxResguardosBajas.unidad);
            $("#cantidadResBaja").val(auxResguardosBajas.cantidad);
            $("#numResFacBaja").val(auxResguardosBajas.numero);
            $("#rfcResFacBaja").val(auxResguardosBajas.rfc);
            $("#fechaResFacBaja").val(auxResguardosBajas.fecha_factura);
            $("#fechaCapResBaja").val(auxResguardosBajas.fecha_captura);
            $("#posicionResFacBaja").val(auxResguardosBajas.posicion);
            $("#claseSelRes").val(auxResguardosBajas.clase);
            $("select#claseSelRes").trigger("change", auxResguardosBajas.subclase);
        });

        $("select#claseSelRes").change(function (event, valor) {
            // console.log(valor);
            f_datos("php/subclases.php", { id_clase: $("#claseSelRes option:selected").val() }, function (data) {
                $("#subClaseSelRes").empty();
                $.each(data, function (key, value) {
                    // console.log(value);
                    $("#subClaseSelRes").append('<option value="' + value.id_subclase + '" >' + value.id_subclase + ' ' + value.descripcion + '</option>');
                });
                if (valor)
					$("#subClaseSelRes").val(valor);
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
        // console.log(res["data"]);
        params.success(res["data"]);
    });
}

function ajaxRequestRepoBaja(params) {
    var url = 'php/selectAllRepoBaja.php';
    $.get(url, jQuery.parseJSON(params.data)).then(function (res) {
        // console.log(res);
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