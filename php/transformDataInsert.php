<?php
header('Content-type:text/html; Charset=utf8');  
header( "Access-Control-Allow-Origin:*");  
header('Access-Control-Allow-Methods:POST,GET,OPTIONS');    
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
// $uid = "";
// $uid=$_POST['uid'];

$type = "";
$type = $_POST['type'];
$tdata = "";
$tdata = $_POST['tdata'];



include('dbConfig.php'); 
// $sql="";
$tname = $type_table_trans->$type;
$superId = $type_super->$type;
$selfId = $type_self->$type;

// $sql = "INSERT INTO `cwr`.`".$tname."` (`id`,`pos_index`,`".$superId."`,`".$selfId."`, `tx`, `ty`, `tz`, `rx`, `ry`, `rz`) VALUES ";
$sql = "INSERT INTO `cwr`.`".$tname."` (`pos_index`,`".$superId."`,`".$selfId."`, `tx`, `ty`, `tz`, `rx`, `ry`, `rz`) VALUES ";

$tdata = json_decode($tdata);

for($i = 0; $i < count($tdata); $i++){
	$jsonT = $tdata[$i];
	$posId = 1;
	if (!empty($jsonT->pos_index)){
		$posId = $jsonT->pos_index;
	}
	$superIdt = 1;
	if (!empty($jsonT->superId)){
		$superIdt = $jsonT->superId;
	}
	$selfIdt = 1;
	if (!empty($jsonT->selfId)){
		$selfIdt = $jsonT->selfId;
	}
	$rxt = 0;
	if (!empty($jsonT->rx)){
		$rxt = $jsonT->rx;
	}
	$ryt = 0;
	if (!empty($jsonT->ry)){
		$ryt = $jsonT->ry;
	}
	$rzt = 0;
	if (!empty($jsonT->rz)){
		$rzt = $jsonT->rz;
	}
	$sql.= "(".$posId.", ".$superIdt.", ".$selfIdt.", ".$jsonT->tx.", ".$jsonT->ty.", ".$jsonT->tz.", ".$rxt.", ".$ryt.", ".$rzt.")";
	if ($i!=count($tdata)-1){
		$sql.=", ";
	}
}

$result=mysqli_query($con,$sql);

echo $result;

?>