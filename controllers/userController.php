<?php


    class userController
    {
           public  function create() {
              $user=new user();
            if($user->insertData($_POST['email'],$_POST['username'],$_POST['password']))
            {
              return json_encode(array("username"=>$_POST['username'],"password"=>$_POST['password']));
            }

             }   
             function select(){
                $user=new user();
                $us=$user->select('m@gail','1234');
               
                if($us)
                {
                  return   json_encode(array());
                }
                   
                return json_encode($us[0]);
             }
        }
     