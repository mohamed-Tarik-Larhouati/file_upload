<?php



    class session 
    {
            function create_session($id){
                session_start();
                $_SESSION['id']=$id;

            }
            function destroysession($id){
                session_start();
                $_SESSION['id']=$id;
                
            }
    }
    