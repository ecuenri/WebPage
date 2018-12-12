class Usuarios{
	constructor(){

	}

	loginUser(email,password){
		if (email == "") {
			document.getElementById("txtEmail").focus();
			/*M.toast({html:'Ingrese Email',classes:rounded});*/
			document.getElementById("errorLogin").innerHTML  = "<div class='alert alert-danger' role='alert'>El correo no es valido</div>";
		}else{
			if (password == "") {
				document.getElementById("txtPassword").focus();
			/*M.toast({html:'Ingrese Email',classes:rounded});*/
			document.getElementById("errorLogin").innerHTML  = "<div class='alert alert-danger' role='alert'>La contraseña es requerida.</div>";		
			}else{
				if (validarEmail(email)) {
					if (6 <= password.length) {
						$.post(
							"Index/userLogin",
							{email,password},
							(response)=>{
								//alert(response);
								try {
									var item = JSON.parse(response);
									if (0 < item.IdUser) {
										document.getElementById("errorLogin").innerHTML  = "";
										localStorage.setItem("user", response);
										window.location.href = "Principal/principal";
									}else{
										document.getElementById("errorLogin").innerHTML  = "<div class='alert alert-danger' role='alert'>Usuario o contraseña incorrecta</div>";	
									}

								} catch(e) {
									document.getElementById("errorLogin").innerHTML  = "<div class='alert alert-danger' role='alert'>Ha ocurrido un error.</div>";	
								}
							});
					}else{
						document.getElementById("txtPassword").focus();
					
					/*M.toast({html:'Ingrese Email',classes:rounded});*/
					document.getElementById("errorLogin").innerHTML  = "<div class='alert alert-danger' role='alert'>La Contraseña minimo 6 caracteres.</div>";
		
					}
				}else{
					document.getElementById("txtEmail").focus();
			/*M.toast({html:'Ingrese Email',classes:rounded});*/
			document.getElementById("errorLogin").innerHTML  = "<div class='alert alert-danger' role='alert'>El correo no es valido.</div>";
		
				}
			}
		}
	}
}