localStorage.removeItem("user")
document.getElementById('menuInfo').className = "dropdown menu-info";


document.getElementById('btnEnviar').onclick = function(){
	document.getElementById("errorContacto").innerHTML  = "";

	let objCorreo = new Email();
	let nombre = document.getElementById('txtNombre').value;
	let correo = document.getElementById('txtCorreo').value;
	let mensaje = document.getElementById('txtMensaje').value;
	objCorreo.sendEmail(nombre,correo,mensaje);
}

