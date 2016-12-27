<?php
header('Content-type:text/html; Charset=utf8'); 
header("Access-Control-Allow-Origin:*");  
header('Access-Control-Allow-Methods:POST,GET,OPTIONS');    
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 

include('dbConfig.php'); 

$siteId = 1;
// $siteId = $_POST["siteId"];

$siteRs = [];
$siteSql = "SELECT 'site' AS type, t.*,l.* FROM CWRSD_SITE_CUSTOMERSITE_T t INNER JOIN CWRSD_LOGIC_INFORMATION_T l ON t.INNER_CODE=l.SITE_INNER_CODE WHERE t.INNER_CODE=".$siteId;
$siteCom = oci_parse($ocon, $siteSql);
oci_execute($siteCom);
while ($row = oci_fetch_assoc($siteCom)) {
	$row["type"] = $row["TYPE"];	
	array_push($siteRs, $row);
	// echo var_dump($row);
}

$oilRs = [];
$oilSql = "SELECT 'oilEngine' AS type, t.*,m.*, to_char(t.LEAVE_FACTORY_DATE,'yyyy-mm-dd hh24:mi:ss') AS LEAVE_FACTORY_DATE FROM CWRSD_OIL_ENGINE_T t INNER JOIN BASE_MODEL_OIL_ENGINE_T m ON t.MODEL_ID=m.MODEL_ID WHERE t.SITE_INNER_CODE=".$siteId;
$oilCom = oci_parse($ocon, $oilSql);
oci_execute($oilCom);
while ($row = oci_fetch_assoc($oilCom)) {
	$row["type"] = $row["TYPE"];
	array_push($oilRs, $row);
}

$roomRs = [];
$roomSelectSql = "SELECT 'room' AS type, t.*, m.* FROM CWRSD_ROOM_BASEINFO_T t INNER JOIN BASE_MODEL_ROOM_T m ON t.MODEL_ID=m.MODEL_ID WHERE t.SITE_INNER_CODE=".$siteId;
// $roomSelectSql = "SELECT  'room' AS type, t.* FROM CWRSD_ROOM_BASEINFO_T t WHERE t.SITE_INNER_CODE=".$siteId;
$roomCom = oci_parse($ocon, $roomSelectSql);
oci_execute($roomCom);
while ($row = oci_fetch_assoc($roomCom)) {
	$row["type"] = $row["TYPE"];
	$row["infoId"] = $row["INNER_CODE"];
	$row["selfId"] = $row["MODEL_ID"];
	array_push($roomRs, $row);
}

$towerRs = [];
$towerId = 0;
$towerSelectSql = "SELECT 'tower' AS type, t.*, m.*  FROM CWRSD_TOWER_IRONTOWER_T t INNER JOIN BASE_MODEL_IRONTOWER_T m ON t.MODEL_ID=m.MODEL_ID WHERE t.SITE_INNER_CODE=".$siteId;
// $towerSelectSql = "SELECT  'tower' AS type, t.* FROM CWRSD_TOWER_IRONTOWER_T t WHERE SITE_INNER_CODE=".$siteId;
$towerCom = oci_parse($ocon, $towerSelectSql);
oci_execute($towerCom);
while ($row = oci_fetch_assoc($towerCom)) {
	$row["type"] = $row["TYPE"];
	$row["infoId"] = $row["INNER_CODE"];
	$row["selfId"] = $row["MODEL_ID"];
	array_push($towerRs, $row);
	$towerId = $row["INNER_CODE"];
	// array_push($towerIds, $row["INNER_CODE"]);
}

$derrickRs = [];
$derrickIds = [];
if($towerId != 0) {
	$derrickIds = [];
	$derrickSelectSql = "SELECT 'derrick' AS type, t.*, m.*  FROM CWRSD_TOWER_POLE_T t INNER JOIN BASE_MODEL_POLE_T m ON t.MODEL_ID=m.MODEL_ID WHERE t.TOWER_INNER_CODE=".$towerId;
	$derrickCom = oci_parse($ocon, $derrickSelectSql);
	oci_execute($derrickCom);
	while ($row = oci_fetch_assoc($derrickCom)) {
		$row["type"] = $row["TYPE"];
		$row["infoId"] = $row["INNER_CODE"];
		$row["selfId"] = $row["MODEL_ID"];
		$row["superId"] = $towerRs[0]["MODEL_ID"];
		$row["superInfoId"] = $towerRs[0]["INNER_CODE"];
		$row["pos_index"] = $row["TOWER_LOCATION_NO"];
		array_push($derrickRs, $row);
		array_push($derrickIds, $row["INNER_CODE"]);
	}
}

$antennaRs = [];
if(count($derrickRs)){
	$antennaIn = "('".join("','", $derrickIds)."')";
	$antennaSelectSql = "SELECT 'antenna' AS type, t.*, m.* FROM CWRSD_TOWER_RFANTENNA_T t INNER JOIN BASE_MODEL_RFANTENNA_T m ON t.MODEL_ID=m.MODEL_ID WHERE t.POLE_INNER_CODE IN ".$antennaIn;
	$antennaCom = oci_parse($ocon, $antennaSelectSql);
	oci_execute($antennaCom);
	while ($row = oci_fetch_assoc($antennaCom)) {
		$row["type"] = $row["TYPE"];
		$row["infoId"] = $row["INNER_CODE"];
		$row["selfId"] = $row["MODEL_ID"];
		foreach ($derrickRs as $key => $value) {
			if($value["INNER_CODE"] == $row["POLE_INNER_CODE"]){
				$row["superInfoId"] = $row["POLE_INNER_CODE"];
				$row["superId"] = $value["selfId"];
				break;
			}
		}
		array_push($antennaRs, $row);
	}
}


$rs = array_merge($siteRs, $oilRs, $roomRs, $towerRs, $derrickRs, $antennaRs);

echo json_encode($rs);
// echo var_dump($rs);
oci_free_statement($siteCom); 
// oci_free_statement($logicCom); 
oci_free_statement($oilCom); 
oci_free_statement($roomCom); 
oci_free_statement($towerCom); 
oci_close($ocon); 


?>
