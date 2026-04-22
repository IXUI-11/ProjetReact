<?php
require_once 'connx.php';

// GET
$afficherMissions = $pdo->query("SELECT * FROM mission");
$missions = $afficherMissions->fetchAll(PDO::FETCH_ASSOC);

header("Content-Type: application/json");
echo json_encode($missions , JSON_UNESCAPED_UNICODE);

// TODO POST
// TODO PUT
// TODO DELET

?>