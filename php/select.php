<?php
header('Content-type:text/html; Charset=utf8'); 
header( "Access-Control-Allow-Origin:*");  
header('Access-Control-Allow-Methods:POST,GET,OPTIONS');    
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 

include('dbConfig.php'); 


$type = "";
$type = $_POST['type'];

// $superId = 1;
// $selfId = 1;
// $pos_index = 1;

$superId = empty($_POST['superId']) ? 1 : $_POST['superId'];
$selfId = empty($_POST['selfId']) ? 1 : $_POST['selfId'];
$pos_index = empty($_POST['pos_index']) ? 1 : $_POST['pos_index'];
$level = empty($_POST['level']) ? "-1" : $_POST['level']; 

// echo $level;

$tTypeName = $type_table_type->$type;
$superIdc = $type_super->$type;
$selfIdc = $type_self->$type;
$tTransName = $type_table_trans->$type;
$tHide = $type_hide->$type;
$urnOther = $level_urn->$level;

$rs=[];
$sql="SELECT type.id, type.urn, type.".$urnOther." urn_other, ".$tHide." tr.tx, tr.ty, tr.tz, tr.rx, tr.ry, tr.rz FROM ".$tTypeName." type INNER JOIN ".$tTransName." tr ON type.id=tr.".$selfIdc."  where type.id=".$selfId." and tr.pos_index='".$pos_index."' and tr.".$superIdc."=".$superId;
$result=mysqli_query($con, $sql);
if ($result != null) {
	while ($row = mysqli_fetch_assoc($result)) {
		array_push($rs, $row);
	}
}else{
	// echo json_encode($sql);
}

// echo $sql;
echo json_encode($rs);

?>