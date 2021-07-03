<?php
$to = "m.mazouz67@gmail.com";
$from = "reservations@go-study.fr";
$headers  = "MIME-Version: 1.0 \n";
$headers .= "Content-type: text/html; charset=utf-8 \n";
$headers .= "From: $from  \n";
$headers .= "Disposition-Notification-To: $from  \n";

$message = file_get_contents("./mail-template.html");

$swap_var= array(
    "{{NAME}}" => "MAZOUZ Mohamed",
    "{{SCHEDULES}}" => "<li>15/07 14:30-15:30</li><li>15/07 14:30-15:30</li>", //TODO
    "{{ZOOMLINK}}" => "https://www.youtube.com/watch?v=O91DT1pR1ew"

);

foreach(array_keys($swap_var) as $key){
    $message = str_replace($key, $swap_var[$key], $message);
}

$CR_Mail = @mail ($to, "salut ça marche", $message, $headers);
 
echo $message

?>