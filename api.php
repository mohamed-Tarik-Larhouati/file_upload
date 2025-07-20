<?php
    session_start();
    require_once 'models/database.php';
    require_once 'models/user.php';
    require_once 'models/upload_file.php';

    require_once './controllers/userController.php';
    require_once './controllers/upload_fileController.php';
    
    if(isset($_GET['logout'])):
        unset($_SESSION['id']);
        echo 'logout';

    endif;

    if(isset($_GET['login'])):
            if(isset($_SESSION['id']) && $_GET['login']=='0')
            {
            $us=new userController();
        echo json_encode($us->select_id($_SESSION['id']));    
            }else if($_GET['login']=='1'){
            $data = json_decode(file_get_contents("php://input"), true);
            $us=new userController();
            $se=$us->select($data);
            $_SESSION['id']=json_decode($se)->id;
        echo json_encode(array('id'=>'1','user'=>'tex'));       
                
            }
    endif;
     
    if(isset($_GET['register'])):
            $data = json_decode(file_get_contents("php://input"), true);
                    $us=new userController();
        echo json_encode($us->create($data));
    endif;
    if(isset($_GET['files'])):
        $file_controller=new upload_fileController();
        echo json_encode($file_controller->select($_SESSION['id']));


    endif;