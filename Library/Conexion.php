<?php

class Conexion 
{
	function __construct()
	{
		$this->db = new QueryManager("cuenri_poseidon","pazorafaele1821","cuenri_venus");
		//$this->db = new QueryManager("root","","afrodita");
	}
}
?>