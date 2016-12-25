<?php
header('Content-type:text/html; Charset=utf8'); 
header("Access-Control-Allow-Origin:*");  
header('Access-Control-Allow-Methods:POST,GET,OPTIONS');    
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 

include('dbConfig.php'); 

$cabinetId = 2;
// $roomId = $_POST["roomId"];

$rs = [];

$reckRs = [];
$reckSelectSql = "SELECT 'cabinet' AS type, t.*, m.* FROM CWRSD_ROOM_RACK_T t INNER JOIN BASE_MODEL_RACK_T m ON t.MODEL_ID=m.MODEL_ID WHERE t.INNER_CODE=".$cabinetId;
// $reckSelectSql = "SELECT 'cabinet' AS type, t.* FROM CWRSD_ROOM_RACK_T t WHERE ROOM_INNER_CODE=".$roomId;
$reckCom = oci_parse($ocon, $reckSelectSql);
oci_execute($reckCom);
while ($row = oci_fetch_assoc($reckCom)) {
	array_push($reckRs, $row);
}

$chassisRs = [];
$chassisIds = [];
$chassisSelectSql = "SELECT 'frame' AS type, t.*, m.* FROM CWRSD_ROOM_CHASSIS_T t INNER JOIN BASE_MODEL_CHASSIS_T m ON t.MODEL_ID=m.MODEL_ID WHERE t.RACK_INNER_CODE=".$cabinetId;
// $chassisSelectSql = "SELECT 'frame' AS type, t.*  FROM CWRSD_ROOM_CHASSIS_T t WHERE RACK_INNER_CODE IN ".$chassisIn;
$chassisCom = oci_parse($ocon, $chassisSelectSql);
oci_execute($chassisCom);
while ($row = oci_fetch_assoc($chassisCom)) {
	array_push($chassisRs, $row);
	array_push($chassisIds, $row["INNER_CODE"]);
}

$boardRs = [];
if(count($chassisIds)){
	$boardIn = "('";
	$boardIn.= join("','", $chassisIds)."')";
	$boardSelectSql = "SELECT 'slot' AS type, t.*, m.* FROM CWRSD_CHASSIS_BOARD_T t INNER JOIN BASE_MODEL_BOARD_T m ON t.MODEL_ID=m.MODEL_ID WHERE t.CHASSIS_INNER_CODE IN ".$boardIn;
	$boardCom = oci_parse($ocon, $boardSelectSql);
	oci_execute($boardCom);
	while ($row = oci_fetch_assoc($boardCom)) {
		array_push($boardRs, $row);
	}
	// echo json_encode($boardSelectSql);
}

$rs = array_merge($reckRs, $chassisRs, $boardRs);

echo json_encode($rs);

oci_free_statement($reckCom); 
oci_free_statement($chassisCom); 
oci_close($ocon); 

?>