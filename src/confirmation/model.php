<?php
require('../dbconnect.php');

class Course{
    private $_login;
    function __construct($login){
        $this->_login = $login;
        $db = db_connect();
        $result = $db->query("SELECT * FROM courses")->fetchAll();
        print_r($result);
    }
    function getdate(){
    }
}