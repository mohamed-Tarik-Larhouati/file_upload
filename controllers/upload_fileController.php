<?php
    class upload_fileController 
    {
        function select($data) {
                if(is_int($data)):
                        $up=new upload_file();
                        return $up->select_file_by_user_id($data);





                endif;
        }
    }
    


