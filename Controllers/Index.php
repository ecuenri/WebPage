<?php
    class Index extends Controllers
    {
        public function __construct(){
            parent::__construct();
        }
        
        public function index(){
            $user = $_SESSION["User"] ?? null;
            if ($user != null) {
                header("Location:".URL."Principal/principal");
            } else {
                $this->view->render($this,'index');
            }          
        }

        public function userLogin(){
        	if (isset($_POST["email"]) && isset($_POST["password"])) {
        		$data = $this->model->userLogin($_POST["email"],$_POST["password"]);
                //echo password_hash($_POST["password"],PASSWORD_DEFAULT);
                if (is_array($data)) {
                    echo json_encode($data);
                } else {
                    echo $data;
                }             
        	}
        }

        public function enviarCorreo(){
            if (isset($_POST["nombre"]) && isset($_POST["correo"]) && isset($_POST["mensaje"])) {
                $nombre = $_POST["nombre"];
                $correo = $_POST["correo"];
                $mensaje = $_POST["mensaje"];

                if ($nombre == "" || $correo == "" || $mensaje == "" ) {
                    echo "0";
                    return;
                } 
                if (filter_var($correo, FILTER_VALIDATE_EMAIL)) {
                    try {
                        
                        ini_set( 'display_errors', 1 );
                        error_reporting( E_ALL );
                        $to = "contacto@cuenri.com";
                        $subjet = "CONTACTO CLIENTE";
                        $message = "Nombre: ".$nombre."\n"."Correo: ".$correo."\n"."Mensaje: ".$mensaje;
                        $headers = "From:contacto@cuenri.com";
                        mail($to,$subjet,$message,$headers);
                        
                        echo '1';
                    } catch (Exception $e) {
                        echo $e->Message;
                        return;
                    }

                }else{
                    echo "0";
                    return;
                }

            }
        }

    }

?>