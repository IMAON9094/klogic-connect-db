<?php
  include_once("database.php");
  $postdata = file_get_contents("php://input");
  if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    //$name = trim($request->name);
    $stdID = mysqli_real_escape_string($mysqli, trim($request->stdID));
    $name = mysqli_real_escape_string($mysqli, trim($request->name));
    $sex = mysqli_real_escape_string($mysqli, trim($request->sex));
    $birthday = mysqli_real_escape_string($mysqli, trim($request->birthday));
    $personalID = mysqli_real_escape_string($mysqli, trim($request->personalID));
    $sql = "INSERT INTO `student`(`stdID`, `name`, `sex`, `birthday`, `personalID`) VALUES ('$stdID','$name','$sex','$birthday','$personalID')";
    if ($mysqli->query($sql) === TRUE){
      $authdata = [
      'stdID' => $stdID,
      'name' => $name,
      'sex' => $sex,
      'birthday' => $birthday,
      'personalID' => $personalID,
      ];
      echo json_encode($authdata);
    }
  }

?>
