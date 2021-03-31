<?php
  if(isset($_POST['signup']))
{
	$hostname="localhost";
     $username="root";
     $password="";

	$name = $_POST['username'];
	$pass = $_POST['password'];
	$cpass  =   $_POST['c_password'];
	$target_dir = "php/imagedb/" ;
    $target_file = $target_dir. basename($_FILES['photo']['name']);
    $image=$_FILES['photo']['name'];
    $db=mysqli_connect($hostname, $username, $password) ;
    mysqli_select_db($db, "signup");

	$sql = "INSERT INTO tourist (image, name, password, c_password) VALUES ('$image', '$name', '$pass', '$cpass')";
	mysqli_query($db, $sql);
	move_uploaded_file($_FILES['photo']['tmp_name'], $target_file);
	mysqli_close($db);
}
 ?>