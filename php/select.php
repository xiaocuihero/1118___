<?php
header('Content-type:text/html; Charset=utf8'); 
header( "Access-Control-Allow-Origin:*");  
header('Access-Control-Allow-Methods:POST,GET,OPTIONS');    
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
// $uid = "";
// $uid=$_POST['uid'];
include('dbConfig.php'); 

$type = "";
$type = $_POST['type'];

$superId = 1;
$selfId = 1;
$pos_index = 1;

$superId = empty($_POST['superId']) ? 1 : $_POST['superId'];
$selfId = empty($_POST['selfId']) ? 1 : $_POST['selfId'];
$pos_index = empty($_POST['pos_index']) ? 1 : $_POST['pos_index'];
// if(empty($superId)){$superId=1;}
// if(empty($selfId)){$selfId=1;}
// if(empty($pos_index)){$pos_index=1;}

$tTypeName = $type_table_type->$type;
$superIdc = $type_super->$type;
$selfIdc = $type_self->$type;
$tTransName = $type_table_trans->$type;

$rs=[];
$sql="SELECT type.id, type.urn, tr.tx, tr.ty, tr.tz, tr.rx, tr.ry, tr.rz FROM ".$tTypeName." type INNER JOIN ".$tTransName." tr ON type.id=tr.".$selfIdc."  where type.id=".$selfId." and tr.pos_index=".$pos_index." and tr.".$superIdc."=".$superId;
$result=mysqli_query($con, $sql);
if ($result != null) {
	while ($row = mysqli_fetch_assoc($result)) {
		array_push($rs, $row);
	}
}
// echo $sql;
echo json_encode($rs);

// if (isset($table_match_type[$type])){
// 	$tname = $table_match_type[$type];

// 	$sql="";
// 	$sql = "INSERT INTO `cwr`.`".$tname."` (`id`, `tx`, `ty`, `tz`, `rx`, `ry`, `rz`) VALUES ";
// 	$tdata = json_decode($tdata);

// 	for($i = 0; $i < count($tdata); $i++){
// 		$jsonT = $tdata[$i];
// 		$sql.= "(".$jsonT->id.", '".$jsonT->tx."', '".$jsonT->ty."', '".$jsonT->tz."', '".$jsonT->rx."', '".$jsonT->ry."', '".$jsonT->rz."')";
// 		if ($i!=count($tdata)-1){
// 			$sql.=", ";
// 		}
// 	}
// 	$result=mysqli_query($con,$sql);

// 	echo $result;
// }else{
// 	echo {"error":"error1 : type not definde!!!..."};
// }

// $result=mysqli_query($con,$sql);
// if($result!=null) {	
// 	 while ($row = mysqli_fetch_assoc($result)){
// 	 	array_push($para,$row);
// 	 }	
// }

?>