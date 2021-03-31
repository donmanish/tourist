<?php
  if(isset($_POST['login']))
{
     $hostname="localhost";
     $username="root";
     $password="";

  $name = $_POST['username'];
  $pass = $_POST['password'];

   
    $db=mysqli_connect($hostname, $username, $password) ;
    mysqli_select_db($db, "signup");
    $sql="SELECT image from tourist where name = '$name' and password = '$pass' ";
    $result = mysqli_query($db, $sql);
    $row = mysqli_fetch_row($result);
      

  ?>

 <img src="imagedb/<?php echo $row['image'] ?> "  width="100" hight="100">

  <?php

      }   
    
    mysqli_close($db);
}
 ?>