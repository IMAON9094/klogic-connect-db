<?php
  include_once("database.php");
  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);
  if(isset($postdata) && !empty($postdata)){
    $pwd = mysqli_real_escape_string($mysqli, trim($request->password));
    $stdID = mysqli_real_escape_string($mysqli, trim($request->username));
    $sql = "SELECT * FROM user where stdID='$stdID' and personalID='$pwd'";
    if($result = mysqli_query($mysqli,$sql)){
      $rows = array();
      while($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
      }
      echo json_encode($rows);
      }
    else{
      http_response_code(404);
    }
  }
?>
