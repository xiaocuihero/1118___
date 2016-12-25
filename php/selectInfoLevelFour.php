<?php
header('Content-type:text/html; Charset=utf8'); 
header("Access-Control-Allow-Origin:*");  
header('Access-Control-Allow-Methods:POST,GET,OPTIONS');    
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 

include('dbConfig.php'); 

$boardId = "2";
// $boardId = $_POST["boardId"];

$rs = [];

$boardRs = [];
$boardSelectSql = "SELECT 'slot' AS type, t.*, m.* FROM CWRSD_CHASSIS_BOARD_T t INNER JOIN BASE_MODEL_BOARD_T m ON t.MODEL_ID=m.MODEL_ID WHERE t.INNER_CODE=".$boardId;
$boardCom = oci_parse($ocon, $boardSelectSql);
oci_execute($boardCom);
while ($row = oci_fetch_assoc($boardCom)) {
	array_push($boardRs, $row);
}

$portRs =[];
$portSelectSql = "SELECT 'port' AS type, t.ID, t.BOARD_INNER_CODE, t.INNER_CODE, t.PORT_LOCATION, t.USAGE_STATUS, t.PORT_NUMBER, t.PORT_NAME, t.DELETE_FLAG, t.CREATED_BY, t.LAST_UPDATED_BY FROM CWRSD_ROOM_BOARDPORT_T t WHERE t.BOARD_INNER_CODE=".$boardId;
$portCom = oci_parse($ocon, $portSelectSql);
oci_execute($portCom);
while ($row = oci_fetch_assoc($portCom)) {
	array_push($portRs, $row);
	// echo json_encode($row);
}
$rs = array_merge($boardRs, $portRs);

echo json_encode($rs);

?>