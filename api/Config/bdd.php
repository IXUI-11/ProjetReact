<?php

try {
    $pdo = new PDO("mysql:host=localhost;dbname=benovaide", "root", "");
} catch (Exception $e) {
    echo "erreur : " . $e->getMessage();
}
?>