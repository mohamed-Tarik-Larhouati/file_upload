<?php
    session_start();
    require_once 'models/database.php';
    require_once 'models/user.php';
    require_once './controllers/userController.php';
 
    if(isset($_GET['login'])):
            if(isset($_SESSION['id']))
            {

            }else{
            $data = json_decode(file_get_contents("php://input"), true);
            $us=new userController();
        echo json_encode($us->select($data));       
            }
    endif;
     
    if(isset($_GET['register'])):
            $data = json_decode(file_get_contents("php://input"), true);
                    $us=new userController();
        echo json_encode($us->create($data));
    endif;