

var objUsuario = new Usuarios();

var loginUser=()=>{
	var email = document.getElementById("txtEmail").value;
	var password = document.getElementById("txtPassword").value;
	objUsuario.loginUser(email,password);
}

$().ready(()=> {
	$("#frmLogin").validate();
	if (localStorage.getItem("user") != null) {
		let user = JSON.parse(localStorage.getItem("user"));
		let fullName = user.Name + " " + user.LastName;
		document.getElementById('lblUser').innerText = fullName.substring(0, 12);
		document.getElementById('menuInfo').className += " menu-info-visible";
	}
});