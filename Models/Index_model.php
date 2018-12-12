<?php
    class Index_model extends Conexion
    {
        function __construct(){
            parent::__construct();
        }
        
        function userLogin($email,$password){
           
            $where = ' Email = :Email';
            $param = array('Email' =>  $email);
            $response = $this->db->select1('*','`[user.account]`',$where,$param);
            if (is_array($response)) {
                $response = $response['results'];
                if (password_verify($password,$response['Password'])) {
                    $data  = array(
                        'IdUser' => $response['IdUser'],
                        'Name' => $response['Name'],
                        'LastName' =>  $response['LastName'],
                        'Roles' =>  $response['Roles'],
                        'Image' =>  $response['Image']
                    );
                    Session::setSession('User',$data);
                    return $data;
                } else {
                    $data = array(
                        'IdUser' => 0,
                         );
                    return $data;
                }
                
            } else {
                return $response;
            }         
        }
    }
            
?>