<?php
header('Content-type:text/html; Charset=utf8');  
header( "Access-Control-Allow-Origin:*");  
header('Access-Control-Allow-Methods:POST,GET,OPTIONS');    
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
// $uid = "";
// $uid=$_POST['uid'];

$tname = "";
$tname = $_POST['tname'];
$tdata = "";
$tdata = $_POST['tdata'];

include('dbConfig.php'); 
$sql="";


$sql = "INSERT INTO `cwr`.`".$tname."` (`id`, `name`, `urn`) VALUES ";
$tdata = json_decode($tdata);
for($i = 0; $i < count($tdata); $i++){
	$jsonT = $tdata[$i];
	$sql.= "(".$jsonT->id.", '".$jsonT->name."', '".$jsonT->urn."')";
	if ($i!=count($tdata)-1){
		$sql.=", ";
	}
}
$result=mysqli_query($con,$sql);

echo $result;

// $sql="SELECT u.id AS uid, u.realname AS un, p.id AS pid, p.projectname AS pn,c.Id AS cid, c.Subject AS content, c.Category AS planOrFinish FROM calendar c LEFT JOIN user u ON u.id=c.UPAccount LEFT JOIN project p ON p.id=c.Location WHERE u.id=".$uid." AND c.StartTime='".$today."' ORDER BY p.id, c.Category";
// $result=mysqli_query($con,$sql);
// if($result!=null) {	
// 	while ($row = mysqli_fetch_assoc($result)){
// 		array_push($para,$row);
// 	}	
// }
// echo json_encode($para);
?>