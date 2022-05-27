<?php
  include_once("database.php");
  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);
  if(isset($postdata) && !empty($postdata)){
    $sec = mysqli_real_escape_string($mysqli, trim($request->option));
    $teacherID = mysqli_real_escape_string($mysqli, trim($request->userID));
    $sql = "SELECT student.stdID,student.name,section FROM course
      JOIN register_result ON course.courseID=register_result.courseID
      JOIN student ON register_result.stdID=student.stdID
      WHERE teacherID='$teacherID' AND semester=1 AND section='$sec'";
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
