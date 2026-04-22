<?php

try{
    $pdo = new PDO("mysql:host=localhost;dbname=benovaide","root","");
}
catch(Exception $err){
   echo "erreur " .  $err ->getMessage();
   die;
}


?>