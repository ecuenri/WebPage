<?php

class Sistemas extends Controllers
{
	
	function __construct()
	{
		parent::__construct();
	}

	public function lista(){
		$this->view->render($this,'lista');     
    }
    public function matricula(){
		$this->view->render($this,'matricula');     
    }
    public function notas(){
		$this->view->render($this,'notas');     
    }  
}
?>