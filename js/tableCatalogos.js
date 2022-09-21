// variables globales de subclases
var auxID = "";
var auxDes = "";
var auxSub = "";
// variables globales de subclases
var auxIDSubC = "";
var auxDesSubC = "";

$(document).ready(function () {
    clases();
    subclases();
});

// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------Tabla Clases---------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
function clases(){
    
    
    $(function() {
        $('#tablaClases').bootstrapTable();
    });


    var $table = $('#tablaClases');
    var $select = $('#botonOpciones');

    $(function() {
    $table.on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', function () {
        $select.prop('disabled', !$table.bootstrapTable('getSelections').length);
        // console.log(JSON.stringify($table.bootstrapTable('getSelections')));
    })
    $data = $select.click(function () {
        var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
            auxID = row.id_clase;
            auxDes = row.descripcion;
            auxSub = row.subclase;
        return row.id
        })
        // -------------------------------------------------------------------------------------------
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
					swal (
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
        $('#botonAgregarClase').click(function() {
            $('.modal-title').text('Agregar Clase');
            $('#idClase').val(auxID).removeAttr('disabled');
            $('#formClaseA')[0].reset();
            $('#accion').val('Agregar');
            $('#guardarCambiosClaseA').text('Registrar Clase');
        });
        $('#botonActualizarClase').click(function() {
            $('#modalAgregarClase').modal('show');
            $('.modal-title').text('Editar Clase');
            $('#idClase').val(auxID).attr('disabled','disabled');
            $('#idClase2').val(auxID);
            $('#desClase').val(auxDes);
            $('#subclaseRef').val(auxSub);
            $('#guardarCambiosClaseA').text('Editar Clase');
            $('#accion').val('Modificar');
            
        });
        $table.bootstrapTable('remove', {
        field: 'id',
        values: ids
        })
        $select.prop('disabled', true)
    })

    });
    // -------------------------------------------------------------------------------------------
    // -------------------------------------Agregar Clase----------------------------------------
    // -------------------------------------------------------------------------------------------
    $("#guardarCambiosClaseA").click(function() {
        operarClase();
    });


    function operarClase() {
        $(document).on('submit','#formClaseA', function(event){
            event.preventDefault();
            parametros = formToObject($("form#formClaseA"));
            // console.log(parametros);
                $.ajax({
                    url:'php/operacionesClase.php',
                    method:'POST',
                    data: parametros, 
                    success:function(data) {
                        console.log(data);
                        if(data.success) {
                            swal(
                                "La clase fue operada con exito.", {
                                    icon: "success",
                                }
                            )
                            .then(function() {
                                $('#modalAgregarClase').modal('hide');
                                $('#tablaClases').bootstrapTable('refresh');
                            });                   
                        }
                       
                        else {
                            swal (
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
        });
    }
    
    function eliminarClase(id) {
        $.ajax({
            url:'php/operacionesClase.php',
            method:'POST',
            data:{idClase: id, accion:"Eliminar"},
            dataType:'',
            success: function(data) {
                console.log(data);
                if(data.success) {
                    swal(
                        "La clase fue eliminada con exito.", {
                            icon: "success",
                        }
                    )
                    .then(function() {
                        $('#modalAgregarClase').modal('hide');
                        $('#tablaClases').bootstrapTable('refresh');
                    });                     
                }
                else { 
                    swal (
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
}


// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------Tabla Subclases---------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
function subclases(){
    $(function() {
        $('#tablaSubClases').bootstrapTable();
    });


    var $table = $('#tablaSubClases');
    var $select = $('#botonOpciones');

    $(function() {
    $table.on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', function () {
        $select.prop('disabled', !$table.bootstrapTable('getSelections').length);
        // console.log(JSON.stringify($table.bootstrapTable('getSelections')));
    })
    $data = $select.click(function () {
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
					swal (
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
        $('#botonAgregarSubClase').click(function() {
            $('.modal-title').text('Agregar Subclase');
            $('#idSubClase').val(auxIDSubC).removeAttr('disabled');
            $('#formSubClase')[0].reset();
            $('#accion').val('Agregar');
            $('#guardarCambiosSubClase').text('Registrar Subclase');
        });
        $('#botonActualizarSubClase').click(function() {
            $('#modalAgregarSubClase').modal('show');
            $('.modal-title').text('Editar Subclase');
            $('#idSubClase').val(auxIDSubC).attr('disabled','disabled');
            $('#idSubClase2').val(auxIDSubC);
            $('#desSubClase').val(auxDesSubC);
            $('#guardarCambiosSubClase').text('Editar Subclase');
            $('#accion').val('Modificar');
            
        });
        $table.bootstrapTable('remove', {
        field: 'id',
        values: ids
        })
        $select.prop('disabled', true)
    })

    });


    // -------------------------------------------------------------------------------------------
    // -------------------------------------Agregar SubClase-----------------------------------------
    // -------------------------------------------------------------------------------------------
    $("#guardarCambiosSubclase").click(function() {
        operarSubClase();
    });


    function operarSubClase() {
        $(document).on('submit','#formSubClase', function(event){
            event.preventDefault();
            parametros = formToObject($("form#formSubClase"));
            console.log(parametros);
                $.ajax({
                    url:'php/operacionesSubClase.php',
                    method:'POST',
                    data: parametros, 
                    success:function(data) {
                        console.log(data);
                        if(data.success) {
                            swal(
                                "La subclase fue operada con exito.", {
                                    icon: "success",
                                }
                            )
                            .then(function() {
                                $('#modalAgregarSubClase').modal('hide');
                                $('#tablaSubClases').bootstrapTable('refresh');
                            });                   
                        }
                        else {
                            swal (
                                'Error de Operacion',
                                'Hubo un error en la base de datos. ' + data.message,
                                'error'
                            )
                            .then(function() {
                                $('#modalAgregarSubClase').modal('hide');
                            });   
                        }
                    }
                });
        });
    }
    
    function eliminarSubClase(id) {
        $.ajax({
            url:'php/operacionesSubClase.php',
            method:'POST',
            data:{idSubClase: id, accion:"Eliminar"},
            dataType:'',
            success: function(data) {
                // console.log(data);
                if(data.success) {
                    swal(
                        "La subclase fue eliminada con exito.", {
                            icon: "success",
                        }
                    )
                    .then(function() {
                        $('#modalAgregarSubClase').modal('hide');
                        $('#tablaSubClases').bootstrapTable('refresh');
                    });                     
                }
                else { 
                    swal (
                        'Error de Operacion',
                        'Hubo un error en la base de datos. ' + data.message,
                        'error'
                    )
                    .then(function() {
                        $('#modalAgregarSubClase').modal('hide');
                    });   
                }
            }
            
        });
        
    }
}
// -----------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------Helpers, AjaxRequest-------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------

function formToObject(form) {
    var arrayForm = $(form).serializeArray();
    var objectForm = {};
    arrayForm.forEach(function (obj, index) {
        objectForm[obj.name] = obj.value;
    });
    return objectForm;
}


function ajaxRequestCl(params) {
    var url = 'php/Select_all_clases.php';
    //consola(jQuery.parseJSON(params.data));
    $.get( url, jQuery.parseJSON(params.data)).then(function (res) {
        // console.log(res);
        params.success(res);
    });	
}

function ajaxRequestSub(params) {
    var url = 'php/Select_all_subclases.php';
    $.get( url, jQuery.parseJSON(params.data)).then(function (res) {
        params.success(res);
    });	
}