<?php
    class Errors
    {
        public function error(){
            //$this->view->render($this,'error');
            //echo "<h2>Error</h2>"; 
            require VIEWS.DFT.'head.html';          
              require VIEWS."Errors".'/'."error".'.html';           
            require VIEWS.DFT.'footer.html';
            
        }
    }
?>