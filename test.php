<?php
    session_start();
    require_once 'models/database.php';
    require_once 'models/user.php';
    require_once 'controllers/userController.php';
    $usController=new userController();
    $usController->select();