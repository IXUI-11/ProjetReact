<?php

try {
    $pdo = new PDO("mysql:host=localhost;dbname=benovaide", "root", "");
} catch (Exception $e) {
    echo "erreur : " . $e->getMessage();
}

$afficherMissions = $pdo->query("SELECT * FROM mission");
$missions = $afficherMissions->fetchAll(PDO::FETCH_ASSOC);

header("Content-Type: application/json");
echo json_encode($missions);