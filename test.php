<?php
    session_start();
    require_once 'models/database.php';
    require_once 'models/user.php';
    require_once 'controllers/userController.php';
                $us=new userController();
        echo json_encode($us->select("1234"));
   
