<?php
  include_once("database.php");
  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);
  if(isset($postdata) && !empty($postdata)){
    $smt = mysqli_real_escape_string($mysqli, trim($request->option));
    $stdID = mysqli_real_escape_string($mysqli, trim($request->userID));
    $sql = "SELECT course.course_code,course.subject,course.credit,course.section FROM register_result
    JOIN course ON register_result.courseID=course.courseID
    WHERE stdID='$stdID' AND course.semester=$smt";
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
