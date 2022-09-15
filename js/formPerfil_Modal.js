$(document).ready(function() {
	$("#modalModUsuario #messageModal").hide();
    $("#edit").click(function() {
      formPerfil();
    });
});

function formPerfil() {
	ventana = '#modalModUsuario';
	$(ventana).load("pNavBar", {}, function(pag) {
		$(ventana +" #guardarCambios").attr('disabled','disabled');
		$(ventana + " input:password").off('keyup').on('keyup', function(event) {
			$(ventana + " #messageModal").hide();
			var erLetraMayus = /[A-Z]/;
			var erLetraMinus = /[a-z]/;
			var erNumero = /[0-9]/;
			var _user = $("#pass1").val();
			var habilitar;
			var c1 = c2 = c3 = c4 = c5 = false;

			c1 = erLetraMayus.test(_user);
			c2 = erLetraMinus.test(_user);
			c3 = erNumero.test(_user);
			c1 ? $(ventana+" #mayusculas").removeClass('text-danger').addClass('text-success') : $(ventana+" #mayusculas").removeClass('text-success').addClass('text-danger');
			c2 ? $(ventana+" #letras").removeClass('text-danger').addClass('text-success') : $(ventana+" #letras").removeClass('text-success').addClass('text-danger');
			c3 ? $(ventana+" #numero").removeClass('text-danger').addClass('text-success') : $(ventana+" #numero").removeClass('text-success').addClass('text-danger');
			c4 = (_user.length >= 8);
			c4 ? $(ventana+" #longitud").removeClass('text-danger').addClass('text-success') : $(ventana+" #longitud").removeClass('text-success').addClass('text-danger');
			c5 = ($("#pass1").val() == $("#pass2").val() && c4);
			c5 ? $(ventana+" #confirmacion").removeClass('text-danger').addClass('text-success') : $(ventana+" #confirmacion").removeClass('text-success').addClass('text-danger');
			
			habilitar = c1 + c2 + c3 + c4 + c5;	
			(habilitar == 5) ? $(ventana+" #guardarCambios").removeAttr('disabled') : $(ventana+" #guardarCambios").attr('disabled','disabled');
		});
		$("#guardarCambios").off('click').on('click', function (e) {
			e.preventDefault();
			// var msg = document.getElementById("msg").value;

			swal({
				title: "¿Estas seguro de editar tu informacion?",
				text: "Tu nombre de usuario y contraseña seran actualizadas.",
				icon: "warning",
				buttons: true,
				dangerMode: true,
			}).then((willDelete) => {
				if (willDelete) {
					actualizar();
				} 
				else {
					swal("No ocurrieron cambios.");
				}
			});
			
			function actualizar () {
				var datos = new FormData ();
				datos.append("rpe", $("#rpe").val());
				datos.append("nombre", $("#nombre").val());
				datos.append("pass1", $("#pass1").val());
				datos.append("pass2", $("#pass2").val());
				$.ajax ({  
					type : 'POST',
					url  : 'php/editarPerfil.php',
					data:  datos,
					contentType: false,
					processData:false,
					success:function(res) {  
						// alert(res);
						if(res == "OK") {
							swal(
								"Tus datos fueron actualizados.", {
									icon: "success",
								}
							)
							.then(function() {
								window.location = 'index.php';
							});                            
						}
						else {
							swal (
								'Falla en registro',
								'Hubo un error al actualizar tus datos.',
								'error'
							)
						}
					}  
				});
			}
		});
	});
}