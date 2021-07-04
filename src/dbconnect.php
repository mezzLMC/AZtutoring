<?php 

function db_connect(){
    $db = new PDO('mysql:host=localhost;dbname=gostudy', "root", "");
    return $db;
}