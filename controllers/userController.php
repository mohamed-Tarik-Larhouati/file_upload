<?php


    class userController
    {
           public  function create($data) {
                $email = $data['email'] ?? '';
                $password = $data['password'] ?? '';
                $username=$data['username'] ?? '';
                $user=new user();
            if($user->insertData($email,$username,$password))
            {
              return json_encode(array("username"=>$username,"password"=>$password,"email"=>$email));
            }else{
              return json_encode(array());
            }

             }   
            function select($data){
                  $email = $data['email'] ?? '';
                $password = $data['password'] ?? '';
                    $user=new user();
                    
                    $us=$user->select($email,$password);
                    
                if($us)
                {
                                 return json_encode($us[0]);

                }
                                     return   json_encode(array());

             }
        
             function select_id($id){
           
                    $user=new user();
                    
                    $us=$user->select_id($id);
                    
                if($us)
                {
                                 return json_encode($us[0]);

                }
                                     return   json_encode(array());
             }
            
            }
     