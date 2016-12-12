<?php 
$con = mysqli_connect('localhost', 'sa', '123456', 'calendardb');
mysqli_query($con,"set names 'utf8'");
if (!$con){
	die('Could not connect: ' . mysqli_error());
}	

$type_table_type = '{"room":"cwr.room_type", "tower":"cwr.tower_type", "cabinet":"cwr.cabinet_type", "frame":"cwr.frame_type", "slot":"cwr.slot_type"}';
$type_table_trans = '{"slot":"cwr.slot_transform", "frame":"cwr.frame_transform", "room":"cwr.room_transform", "tower":"cwr.tower_transform", "cabinet":"cabinet_transform"}';
$type_super = '{"slot":"frame_type_id", "frame":"cabinet_type_id","room":"floor_type_id", "tower":"floor_type_id","cabinet":"room_type_id"}';
$type_self = '{"slot":"slot_type_id", "frame":"frame_type_id", "room":"room_type_id", "tower":"tower_type_id","cabinet":"cabinet_type_id"}';

$type_table_type = json_decode($type_table_type);
$type_table_trans = json_decode($type_table_trans);
$type_super = json_decode($type_super);
$type_self = json_decode($type_self);



?>
