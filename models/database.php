<?php

class database{
    private $conn;
    public function __construct() {
                $this->conn = new mysqli('localhost','root','','drive');

        
    }
    public function select_data($table_name,$list_cols=['*'],$conditions='1=1'){
    $cols = implode(', ', $list_cols);
    $sql="select  $cols from $table_name where $conditions";
    $stmt = $this->conn->prepare($sql);    
    $stmt->execute();
    $result = $stmt->get_result();
    $rows = [];
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row; // fetch_assoc already returns an associative array
    }
       return $rows;

    }
    public function insertData($table_name,$list){

    $cols='(';
    $placeholders='(';
    $format='';    
    $values=[];
    foreach ($list as $key => $value) {
            $cols.= "$key,";
            $placeholders.="?,";
            $format.='s';
            $values[] = $value;

        }
    $cols[-1]=')';
    $placeholders[-1]=')';
    $sql="insert into $table_name $cols values $placeholders";
   
    $stmt = $this->conn->prepare($sql);  
    $stmt->bind_param($format, ...$values);
    if($stmt->execute())
        {
            return true;
        }
        return false;
    }   
function delete_data($table_name,$data){
    $str="";
    $values=[];
    $format="";
    foreach ($data as $key => $value) {
       $str.=" $key=? and";
        $values[]=$value;
        $format.='s';
    }
    $str.=' 1=1';
    $sql="delete from $table_name where $str";
    echo $sql;
    $stmt = $conn->prepare($sql);  
    $stmt->bind_param($format, ...$values);
    if($stmt->execute())
        {return true;}
        return false;

}


}
