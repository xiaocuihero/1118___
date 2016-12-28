<?php
header('Content-type:text/html; Charset=utf8'); 
header("Access-Control-Allow-Origin:*");  
header('Access-Control-Allow-Methods:POST,GET,OPTIONS');    
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 

include('dbConfig.php'); 

// $roomId = 1;
$roomId = $_POST["roomId"];

$rs = [];

$roomRS = [];
$roomSelectSql = "SELECT  'room' AS type, t.*, m.* FROM CWRSD_ROOM_BASEINFO_T t INNER JOIN BASE_MODEL_ROOM_T m ON t.MODEL_ID=m.MODEL_ID WHERE t.INNER_CODE=".$roomId;
// $roomSelectSql = "SELECT  'room' AS type, t.* FROM CWRSD_ROOM_BASEINFO_T t WHERE t.SITE_INNER_CODE=".$siteId;
$roomCom = oci_parse($ocon, $roomSelectSql);
oci_execute($roomCom);
while ($row = oci_fetch_assoc($roomCom)) {
	$row["type"] = $row["TYPE"];	
	$row["infoId"] = $row["INNER_CODE"];
	$row["selfId"] = $row["MODEL_ID"];
	array_push($roomRS, $row);
}

$reckIds = [];
$reckRs = [];
$reckSelectSql = "SELECT 'cabinet' AS type, t.*, m.* FROM CWRSD_ROOM_RACK_T t INNER JOIN BASE_MODEL_RACK_T m ON t.MODEL_ID=m.MODEL_ID WHERE t.ROOM_INNER_CODE=".$roomId;
// $reckSelectSql = "SELECT 'cabinet' AS type, t.* FROM CWRSD_ROOM_RACK_T t WHERE ROOM_INNER_CODE=".$roomId;
$reckCom = oci_parse($ocon, $reckSelectSql);
oci_execute($reckCom);
while ($row = oci_fetch_assoc($reckCom)) {
	$row["type"] = $row["TYPE"];	
	$row["infoId"] = $row["INNER_CODE"];
	$row["selfId"] = $row["MODEL_ID"];
	$row["pos_index"] = $row["SPATIAL_LOCATION"];
	$row["superId"] = $roomRS[0]["MODEL_ID"];
	array_push($reckRs, $row);
	array_push($reckIds, $row["INNER_CODE"]);
}

// CWRSD_ROOM_CHASSIS_T
$chassisRs = [];
$chassisIn = "('";
if(count($reckIds) != 0) {
	$chassisIn.= join("','", $reckIds)."')";
	$chassisSelectSql = "SELECT 'frame' AS type, t.*, m.* FROM CWRSD_ROOM_CHASSIS_T t INNER JOIN BASE_MODEL_CHASSIS_T m ON t.MODEL_ID=m.MODEL_ID WHERE t.RACK_INNER_CODE IN ".$chassisIn;
	$chassisCom = oci_parse($ocon, $chassisSelectSql);
	oci_execute($chassisCom);
	while ($row = oci_fetch_assoc($chassisCom)) {		
		$row["type"] = $row["TYPE"];	
		$row["infoId"] = $row["INNER_CODE"];
		$row["selfId"] = $row["MODEL_ID"];
		$row["Uheight"] = $row["U_NUMBER_START"];
		foreach ($reckRs as $key => $value) {
			if($value["INNER_CODE"] == $row["RACK_INNER_CODE"]){
				$row["superInfoId"] = $row["RACK_INNER_CODE"];
				$row["superId"] = $value["selfId"];
				break;
			}
		}
		array_push($chassisRs, $row);
	}
}
$rs = array_merge($roomRS, $reckRs, $chassisRs);

echo json_encode($rs);

oci_free_statement($reckCom); 
oci_free_statement($chassisCom); 
oci_close($ocon); 
?>