<?php
  include_once("database.php");
  $postdata = file_get_contents("php://input");
  if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $personalID = mysqli_real_escape_string($mysqli, trim($request->personalID));
    $stdID = mysqli_real_escape_string($mysqli, trim($request->stdID));
    $new_password = mysqli_real_escape_string($mysqli, trim($request->new_password));
    //$sql = "INSERT INTO users(name,password,email) VALUES ('$name','$pwd','$email')";
    $sql = "INSERT INTO `user`(`personalID`, `stdID`, `new_password`) VALUES ('$personalID','$stdID','$new_password')";
    if ($mysqli->query($sql) === TRUE){
      $authdata = [
      'personalID' => $personalID,
      'stdID' => $stdID,
      'new_password' => $new_password,
      //'section' => $section
      ];
      echo json_encode($authdata);
    }
  }

?>
