<?php
  if(isset($_POST['login']))
{
	$hostname="localhost";
     $username="root";
     $password="";

	$name = $_POST['username'];
	$pass = $_POST['password'];
    $image = $name;

    $db=mysqli_connect($hostname, $username, $password) ;
    mysqli_select_db($db, "signup");
    $sql="SELECT name, image from tourist where name = '$name' and password = '$pass' ";
    $result = mysqli_query($db, $sql);
    $row = mysqli_fetch_array($result);


    	 if(is_array($row))
    {
        session_start();
        $_SESSION['username']=$row['name'];
        $_SESSION['photo']=$row['image'];
        header("Location: register.html");
   
    
    } else {
    	echo "either password or  username is not valid";
    }
    

   
	
	
	mysqli_close($db);
}
 ?>