<?php

class Principal extends Controllers
{	
	function __construct()
	{
		parent::__construct();
	}
	public function principal(){
		if ($_SESSION['User'] != null) {
			$this->view->render($this,"principal");
		}else{
			header("Location:".URL);
		}
	}
}
?>
