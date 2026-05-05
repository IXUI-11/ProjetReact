<?php

require_once "../Config/bdd.php";

$afficherMissions = $pdo->query("SELECT * FROM mission");
$missions = $afficherMissions->fetchAll(PDO::FETCH_ASSOC);

header("Content-Type: application/json");
echo json_encode($missions);


?>