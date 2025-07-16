<?php
    session_start();
    require_once 'models/database.php';
    require_once 'models/user.php';
 
    if(isset($_GET['login'])):
      
        echo json_encode(array());
    endif;