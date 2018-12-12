<?php

class Usuarios extends Controllers
{	
	function __construct()
	{
		parent::__construct();
	}
	public function usuarios(){
		if (Session::getSession("User") != null) {
			$this->view->render($this,"usuarios");
		}else{
			header("Location:".URL);
		}
	}
	public function destroySession(){
		Session::destroy();
		header("Location:".URL);
	}
}
?>