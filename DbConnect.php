<?php
$dblocation = "localhost";
$dbname = "test";
$dbuser = "root";
$dbpasswd = "";
$dbcnx = @mysqli_connect($dblocation,$dbuser,$dbpasswd, $dbname);
if ($dbcnx -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
}
?>