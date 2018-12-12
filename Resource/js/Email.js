class Email{
	constructor(){

	}

	sendEmail(nombre,correo,mensaje){
		if (nombre === "") {
			document.getElementById("txtNombre").focus();
			document.getElementById("errorContacto").innerHTML  = "<div class='alert alert-danger' role='alert'>El nombre es Obligatorio.</div>";
			return;
		}
		if (nombre.length < 7) {
			document.getElementById("txtNombre").focus();
			document.getElementById("errorContacto").innerHTML  = "<div class='alert alert-danger' role='alert'>El nombre debe tener minimo 7 carateres.</div>";
			return;
		}
		if (correo === "") {
			document.getElementById("txtCorreo").focus();
			document.getElementById("errorContacto").innerHTML  = "<div class='alert alert-danger' role='alert'>El correo es Obligatorio.</div>";
			return;
		}
		if (!validarEmail(correo)) {
			document.getElementById("txtCorreo").focus();
			document.getElementById("errorContacto").innerHTML  = "<div class='alert alert-danger' role='alert'>El correo no es valido.</div>";
			return;
		}
		if (mensaje === "") {
			document.getElementById("txtMensaje").focus();
			document.getElementById("errorContacto").innerHTML  = "<div class='alert alert-danger' role='alert'>El mensaje es Obligatorio.</div>";
			return;
		}

		$.post(
			"Index/enviarCorreo",
			{nombre,correo,mensaje},
			(response)=>{
				try {
					var enviado = parseInt(response);
					if (enviado === 1) {
					document.getElementById("errorContacto").innerHTML = "<div class='alert alert-success' role='alert'>El mensaje se envió correctamenete.</div>";
					document.getElementById('txtNombre').value = "";
					document.getElementById('txtCorreo').value = "";
					document.getElementById('txtMensaje').value = "";
					}else{
					document.getElementById("errorContacto").innerHTML = "<div class='alert alert-danger' role='alert'>Ocurrio un error.</div>";					
					}

				} catch(e) {
					document.getElementById("errorContacto").innerHTML = "<div class='alert alert-danger' role='alert'>Ocurrio un error.</div>";
				}
			}
		);
	}
}
