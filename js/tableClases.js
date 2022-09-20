$(document).ready(function () {

    var auxID = "";
    var auxDes = "";
    var auxSub = "";
    
    $(function() {
        $('#tablaClases').bootstrapTable()
    });

    

    // $("#modalAgregarClase #subclaseRef").multiselect({
    //     maxHeight: 200,
    //     includeSelectAllOption: true,
    //     enableFiltering: true
    // });

    // tabla = $('#tablaCatalogos').DataTable( {
    //     // select: {style: 'single'},
    //     dom: 'B<"toolbar">frtip', // <"toolbar">
    //     fnInitComplete: function() {
    //         $('div.toolbar').html (
    //         '<div class="btn-group">' + 
    //             // '<div class="dropdown">' +
    //             //     '<button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>  Mostrar</button>' +
    //             //     '<ul class="dropdown-menu">' +
    //             //         '<li><button type="button" class="btn btn-primary dropdown-item" id="boton10Reg">10</button></li>' +
    //             //         '<li><button type="button" class="btn btn-primary dropdown-item" id="#">25</button></li>' +
    //             //         '<li><button type="button" class="btn btn-primary dropdown-item" id="#">50</button></li>' +
    //             //         '<li><button type="button" class="btn btn-primary dropdown-item" id="#">100</button></li>' +
    //             //     '</ul>' + 
    //             // '</div>' +
    //             // '<button type="button" class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16"><path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/><path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/></svg>  Imprimir</button>' + 
    //             // '<button type="button" class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16"><path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/></svg>  Copiar</button>' + 
    //             '<button type="button" class="btn btn-success" id="botonAgregarClase" data-bs-toggle="modal" data-bs-target="#modalAgregarClase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/></svg>  Agregar</button>' +
    //             '<div class="dropdown">' +
    //                 '<button type="button" class="btn btn-primary dropdown-toggle" id="botonOpciones" data-bs-toggle="dropdown" disabled><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>  Opciones</button>' +
    //                 '<ul class="dropdown-menu">' +
    //                     '<li><button type="button" class="btn btn-primary dropdown-item" id="botonActualizarClase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16¿2 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>  Editar</button></li>' +
    //                     '<li><button type="button" class="btn btn-danger dropdown-item" id="botonEliminarClase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>  Eliminar</button></li>' +
    //                 '</ul>' + 
    //             '</div>' +
    //         '</div>'
    //         );
    //     },
    //     buttons: [
    //         {
    //             extend:    'pageLength',
    //             className: 'btn btn-light',
    //             text:      'Mostrar',
    //             titleAttr: 'Mostrar registros'
    //         },
    //         {
    //             extend:    'print',
    //             text:      '<i class="fa fa-file-pdf-o"></i> Imprimir',
    //             titleAttr: 'Imprimir',
	// 			exportOptions: {
	// 				columns: [ 0, 1, 2 ]
	// 			},
	// 			customize: function ( win ) {
	// 				tr_enc = $('<tr/>');
	// 				td_enc = $('<th class="sinborde" colspan="7"  />').appendTo(tr_enc);
	// 				tab =  $('<table class="tableEnc" />').appendTo(td_enc);
	// 				tr = $('<tr >').appendTo(tab);
	// 				$('<th style="width:25%; text-align: left;" class="logoCFE" >').html('<img src="http://pk0e0.cfemex.com/imagenes/portadaROST01.jpg" >').appendTo(tr);
	// 				$('<th style="width:50%; text-align: center; font-size: 14px;">').html('<b>REPORTE DE CLASES<br><small>'+$('#rpe option:selected').text()+'</small></b>').appendTo(tr);
	// 				$('<th style="width:25%; text-align: right; font-size: 10px;">').html('<small>Gerencia Regional de Transmisión Sureste</small><br>Zona de Transmisión Malpaso').appendTo(tr);
										
    //                 body = $(win.document.body);
	// 				body.find('h1').remove();
	// 				body.find('table.table')
    //                    .removeClass('')
    //                    .addClass( 'datosImp' );
	// 				body.find('table>thead').prepend($('<tr ><th class="sinborde" colspan="7"></th><tr>'));
	// 				body.find('td:eq(6)').css("width","80px");
	// 				body.find('table>thead').prepend(tr_enc);
    //             }
    //         },
	// 		{
	// 			extend:    'copy',
	// 			text:      '<i class="fa fa-files-o"></i> Copiar',
	// 			titleAttr: 'Copiar al portapapeles'
	// 		},
	// 	],
    //     language: {
    //         "url": "DataTables/Spanish.json",
    //     },
    // });
// -------------------------------
// -------------------------------deleta clases
var $table = $('#tablaClases')
var $select = $('#botonOpciones')

    $(function() {
    $table.on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', function () {
        $select.prop('disabled', !$table.bootstrapTable('getSelections').length)
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
            $('#formClaseA')[0].reset();
            $('#accion').val('Agregar');
            $('#guardarCambiosClaseA').text('Registrar Clase');
        });
        $('#botonActualizarClase').click(function () {
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

    $('#tablaCatalogos tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            $("#botonOpciones").attr('disabled','disabled');
        } 
        else {
            tabla.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            $("#botonOpciones").removeAttr('disabled');
            var datos = tabla.row(this).data();
            auxID = datos[0];
            auxDes = datos[1];
            auxSub = datos[2];
        }
        
       
        

       
    });
    // -------------------------------------------------------------------------------------------
    // -------------------------------------Agregar Clase----------------------------------------
    // -------------------------------------------------------------------------------------------
    $("#guardarCambiosClaseA").click(function() {
        agregarClase();
    });
});

	

function agregarClase() {
    $(document).on('submit','#formClaseA', function(event){
        event.preventDefault();
        /*var idClase = $("#idClase").val();
        var subclaseRef = $("#subclaseRef").val();
        var desClase = $("#desClase").val();*/
        parametros = formToObject($("form#formClaseA"));
        // console.log(parametros);
        //if(idClase != '' && subclaseRef !='' && desClase !=''){
            $.ajax({
                url:'php/operacionesClase.php',
                method:'POST',
                data: parametros, // new FormData(this),
                //contentType: false,
                //processData: false,
                success:function(data) {
                    console.log(data);
                    if(data.success) {
                        swal(
                            "La clase fue operada con exito.", {
                                icon: "success",
                            }
                        );                     
                    }
                   
                    else {
                        swal (
                            'Error de Operacion',
                            'Hubo un error en la base de datos. ' + data.message,
                            'error'
                        )
                        .then(function() {
                            
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
                );                      
            }
            else { 
                swal (
                    'Error de Operacion',
                    'Hubo un error en la base de datos. ' + data.message,
                    'error'
                )
                .then(function() {
                 
                });   
            }
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


// function queryParams(params) {
//     params.id_clase = $("#filtro_centro").val();
//     params.subclase = $("#filtro_estado").val();
//     params.descripcion = $("#filtro_desde").val();
//     console.log(params);
//     return params;
// }

function ajaxRequest(params) {
    var url = 'php/Select_all_clases.php';
    //consola(jQuery.parseJSON(params.data));
    $.get( url, jQuery.parseJSON(params.data)).then(function (res) {
        // console.log(res);
        params.success(res);
    });	
}