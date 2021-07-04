<?php
$to = "m.mazouz67@gmail.com";
$headers  = "MIME-Version: 1.0 \n";
$headers .= "Content-type: text/html; charset=utf-8 \n";
$headers .= "From: reservations@go-study.fr  \n";
$headers .= "Disposition-Notification-To: reservations@go-study.fr  \n";

require('./model.php');

$c = new Course("");

$swap_var= array(
    "{{NAME}}" => $_GET["completeName"], 
    "{{SCHEDULES}}" => "<li>15/07 14:30-15:30</li><li>15/07 14:30-15:30</li>", //TODO
    "{{ZOOMLINK}}" => "https://www.youtube.com/watch?v=O91DT1pR1ew"

);


$message = file_get_contents("./vue.html");

foreach(array_keys($swap_var) as $key){
    $message = str_replace($key, $swap_var[$key], $message);
}

$CR_Mail = @mail ("reservations@go-study.fr", "Confirmation de réservation du cours", $message, $headers);
 
echo $message

?>