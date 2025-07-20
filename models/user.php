<?php
class user 
{
    public $database;
    public function __construct() {
                $this->database = new database();

        
    }
    function select($email,$pass){
        $data=$this->database->select_data('users',['id','username']," email='$email' and password_hash='$pass'");
        return $data;
    }
    function select_id($id){
              $data=$this->database->select_data('users',['id','username']," id='$id'");
        return $data;
    }
    function insertData($email,$username,$password_hash){
        return  $this->database->insertData('users',[
            
            'email'=>$email,
            'username'=>$username,
            'password_hash'=>$password_hash
            
            
        ]);

    }
}
