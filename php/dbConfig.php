<?php 
$con = mysqli_connect('localhost', 'sa', '123456', 'cwr');
mysqli_query($con,"set names 'utf8'");
if (!$con){
	die('Could not connect: ' . mysqli_error());
}

$ocon = oci_connect('cwrsd', '123456', 'localhost/cwr_siteDB');
if (!$ocon) {
  $e = oci_error();
  print htmlentities($e['message']);
  exit;
}

$type_table_type = '{"floor":"cwr.floor_type", "room":"cwr.room_type", "tower":"cwr.tower_type", "cabinet":"cwr.cabinet_type", "frame":"cwr.frame_type", "slot":"cwr.slot_type", "derrick":"cwr.derrick_type", "antenna":"cwr.antenna_type"}';
$type_table_trans = '{"slot":"cwr.slot_transform", "frame":"cwr.frame_transform", "room":"cwr.room_transform", "tower":"cwr.tower_transform", "cabinet":"cwr.cabinet_transform", "derrick":"cwr.derrick_transform", "antenna": "cwr.antenna_transform"}';
$type_super = '{"slot":"frame_type_id", "frame":"cabinet_type_id","room":"floor_type_id", "tower":"floor_type_id","cabinet":"room_type_id","derrick":"tower_type_id", "antenna":"derrick_type_id"}';
$type_self = '{"slot":"slot_type_id", "frame":"frame_type_id", "room":"room_type_id", "tower":"tower_type_id","cabinet":"cabinet_type_id","derrick":"derrick_type_id", "antenna":"antenna_type_id"}';
$type_hide1 = '{"room":" type.hide_dbIds, " , "tower":"", "cabinet":"", "frame":"", "slot":"", "derrick":"", "antenna":""}';
$type_stander_height = '{"room":"" , "tower":"", "cabinet":"", "frame":"", "slot":"", "derrick":", tr.stander_height ", "antenna":""}';

$level_urn = '{"-1":"urn", "stander":"urn", "door_button":"urn_door_button", "door":"urn_door", "basic":"urn_", "button":"urn_button", "one":"urn_one", "two":"urn_two"}';
$lever_urn_special = '{"-1":"0", "stander":"0", "door_button":"1", "door":"1", "basic":"0", "button":"1", "one":"1", "two":"1"}';
// $level3_urn = '{"-1":"urn", "1":"urn_door_button", "2":"urn_door_button", "3":"urn_", "4":"urn_button", "stander":"urn", "door_button":"urn_door_button", "door":"urn_door", "basic":"urn_", "button":"urn_button"}';

$type_table_type = json_decode($type_table_type);
$type_table_trans = json_decode($type_table_trans);
$type_super = json_decode($type_super);
$type_self = json_decode($type_self);
$type_hide = json_decode($type_hide1);
$level_urn = json_decode($level_urn);
$lever_urn_special = json_decode($lever_urn_special);
$type_stander_height = json_decode($type_stander_height);


?>
