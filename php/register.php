<?php
  include_once("database.php");
  $postdata = file_get_contents("php://input");
  if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $stdID = mysqli_real_escape_string($mysqli, trim($request->stdID));
    $course_code = mysqli_real_escape_string($mysqli, trim($request->course_code));
    $section = mysqli_real_escape_string($mysqli, trim($request->section));
    $sql = "INSERT INTO `register_result`(`resultID`, `stdID`, `courseID`)
    VALUES ('','$stdID',(SELECT course.courseID FROM course WHERE course.course_code='$course_code' AND course.section=$section))";
    if ($mysqli->query($sql) === TRUE){
      $authdata = [
      'resultID' => mysqli_insert_id($mysqli),
      'stdID' => $stdID,
      'course_code' => $course_code,
      //'section' => $section
      ];
      echo json_encode($authdata);
    }
  }

?>
