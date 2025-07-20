<?php
 class upload_file{
        public $database;
    public function __construct() {
                $this->database = new database();

        
    }
        function upload_file($file_name,$user_id,$file_path,$file_size,$is_public,$uploaded_at) {
            return  $this->database->insertData('file_manager',[
            
            'file_name'=>$file_name,
            'user_id'=>$user_id,
            'file_path'=>$file_path,
            'file_size'=>$file_size,
            'is_public'=>$is_public,
            'uploaded_at'=>$uploaded_at,

            
            
        ]);

        }
        function select_file_by_user_id($user_id){
        $data=$this->database->select_data('file_manager',['file_name','file_path','file_size','is_public','uploaded_at']," user_id='$user_id'");
        return $data;
        }
}