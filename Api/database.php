<?php
include "../DbConnect.php";

$result = mysqli_query($dbcnx,"SELECT * FROM wp_s3cu_form_on_landing");
if (!$result) {echo('Неверный запрос: ' . mysqli_error($dbcnx));}
//$rows = mysqli_fetch_row($result);

$json = [];
$row = $result->fetch_assoc();
while($row) {
    $json[] = [
        'id' => $row['id'],
        'point' => $row['main_point'],
        'sex' => $row['sex'],
        'age' => $row['age'],
        'created' => $row['created_at'],
        'updated' => $row['updated_at'],
        ];
    $row = $result->fetch_assoc();
}

echo json_encode(array('response' => $json));