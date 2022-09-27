var datos = [];
$(document).ready(function () {
	$("#modalModUsuario #messageModal").hide();
	getUser();
	$("#edit").click(function () {
		formPerfil();
	});
});
ventana = '#modalModUsuario';

function formPerfil() {

	$(ventana + " #guardarCambios").attr('disabled', 'disabled');
	$(ventana + " input:password").off('keyup').on('keyup', function (event) {
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
		c1 ? $(ventana + " #mayusculas").removeClass('text-danger').addClass('text-success') : $(ventana + " #mayusculas").removeClass('text-success').addClass('text-danger');
		c2 ? $(ventana + " #letras").removeClass('text-danger').addClass('text-success') : $(ventana + " #letras").removeClass('text-success').addClass('text-danger');
		c3 ? $(ventana + " #numero").removeClass('text-danger').addClass('text-success') : $(ventana + " #numero").removeClass('text-success').addClass('text-danger');
		c4 = (_user.length >= 8);
		c4 ? $(ventana + " #longitud").removeClass('text-danger').addClass('text-success') : $(ventana + " #longitud").removeClass('text-success').addClass('text-danger');
		c5 = ($("#pass1").val() == $("#pass2").val() && c4);
		c5 ? $(ventana + " #confirmacion").removeClass('text-danger').addClass('text-success') : $(ventana + " #confirmacion").removeClass('text-success').addClass('text-danger');

		habilitar = c1 + c2 + c3 + c4 + c5;
		(habilitar == 5) ? $(ventana + " #guardarCambios").removeAttr('disabled') : $(ventana + " #guardarCambios").attr('disabled', 'disabled');
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


	});

}

function getUser() {
	$.post("php/refrescarSesion.php", function (data, status) {
		// console.log(data.tipo);
		$('.name').text(data.nombre);
		$('#disLink').text(data.tipo);
		$(ventana + " #exampleModalLabel").html("Actualizar Perfil de Usuario " + data.rpe);
		$(ventana + " #nombre").val(data.nombre);
	});
}

function actualizar() {
	parametros = formToObject($("form#formPerfil"));
	datos["nombre"] = parametros["nombre"];
	// console.log(parametros);
	$.ajax({
		type: 'POST',
		url: 'php/editarPerfil.php',
		data: parametros,
		success: function (data) {
			// console.log(data);
			if (data.success) {
				swal(
					"Tus datos fueron actualizados.", {
					icon: "success",
				}
				)
					.then(function () {
						getUser();
						$('#formPerfil')[0].reset();
						$('#modalModUsuario').modal('hide');

					});
			}
			else {
				swal(
					'Falla en registro',
					'Hubo un error al actualizar tus datos.' + data.message,
					'error'
				)
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
