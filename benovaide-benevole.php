<?php

require_once 'connx.php';

// GET

$affichebenov = $pdo->query("SELECT * FROM benevole");
$benevoles = $affichebenov->fetchAll(PDO::FETCH_ASSOC);

header("Content-Type: application/json; charset=utf-8");
echo json_encode($benevoles, JSON_UNESCAPED_UNICODE);

// TODO POST
// TODO PUT
// TODO DELET

?>


