<?php
header('Content-type:text/html; Charset=utf8'); 
header( "Access-Control-Allow-Origin:*");  
header('Access-Control-Allow-Methods:POST,GET,OPTIONS');    
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 

include('dbConfig.php'); 

$type = "";
$type = $_POST['type'];

$tTypeName = $type_table_type->$type;

$rs=[];
$sql="SELECT id, name, urn FROM ".$tTypeName."";
$result=mysqli_query($con, $sql);
if ($result != null) {
	while ($row = mysqli_fetch_assoc($result)) {
		array_push($rs, $row);
	}
}

echo json_encode($rs);

?>