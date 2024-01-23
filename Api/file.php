<?php
$file = htmlspecialchars($_GET["file"]);
$file = fopen("../log/apache2/".$file, 'r');
$json = [];
while (!feof($file)) {
    $json[] = ['i' => fgets($file)];
}
fclose($file);

echo json_encode(array('response' => $json));