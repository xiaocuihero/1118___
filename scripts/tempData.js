var s1='./svf/testModel/building.max/building.svf';
var s2='./svf/testModel/cabinet-1.max/cabinet-1.svf';
var s3='./svf/testModel/cabinet-3.max/cabinet-3.svf';
var s4='./svf/testModel/house-01.max/house-01.svf';
var sBox = './svf/testModel/Box/____/3D/3D.svf';
var sRight = './svf/testModel/212992-rightmax/right.svf';
var sLeft = './svf/testModel/217088-leftmax/left.svf';
var sFang = './svf/testModel/fang/_3D_.svf';
var sTianXian = './svf/testModel/tianxian/_3D_.svf';
var model_floor = './svf/testModel/5107712-floorrvt/Resource/____/3D/3D.svf';
var model_cabinet = './svf/testModel/5099520-cabinetrvt/Resource/____/3D/3D.svf';

var urlPHPRoot = "http://localhost/1118___/";

var pathDefault2 = "./svf/bbbbb/aaaaa/Resource/____/3D/3D.svf";
var pathDefault1 = "./svf/aaaaa/Resource/____/3D/3D.svf";
var pathDefault3 = "./svf/bbbbb/aaaaa/Resource/____/_3D_ 332258/_3D_.svf"
var pathDefaultC = "./ALLsvf/cabinet/aaaaa/Resource/____/3D/3D.svf";



// function dataFormatAntenna() {
// 	var dataAll = [];
// 	for(var i = 0; i < microWaveFolderNames.length; i++){
// 		var namet = microWaveFolderNames[i];
// 		var data = {};
// 		data.type = "microWave";
// 		data.name = namet;
// 		data.urn = pathDefault2.replace("bbbbb", mwName).replace("aaaaa", namet);
// 		dataAll.push(data);
// 	}
// 	for(var i = 0; i < wirelessFolderNames.length; i++){
// 		var namet = wirelessFolderNames[i];
// 		var data = {};
// 		data.type = "wireless";
// 		data.name = namet;
// 		data.urn = pathDefault2.replace("bbbbb", wlName).replace("aaaaa", namet);
// 		dataAll.push(data);
// 	}
// 	return JSON.stringify(dataAll);
// }

// var antennaData = [
// 	{"id":1, "type":"microWave","name":"Antenna1rvt","urn":"./svf/antenna/microwave_antenna/Antenna1rvt/Resource/____/3D/3D.svf"},
// 	{"id":2, "type":"microWave","name":"XMC2rvt","urn":"./svf/antenna/microwave_antenna/XMC2rvt/Resource/____/3D/3D.svf"},
// 	{"id":3, "type":"microWave","name":"XMC3rvt","urn":"./svf/antenna/microwave_antenna/XMC3rvt/Resource/____/3D/3D.svf"},
// 	{"id":4, "type":"wireless","name":"DualbandantennaADU4518R11rvt","urn":"./svf/antenna/wireless_antenna/DualbandantennaADU4518R11rvt/Resource/____/3D/3D.svf"},
// 	{"id":5, "type":"wireless","name":"DualbandantennaADU451604rvt","urn":"./svf/antenna/wireless_antenna/DualbandantennaADU451604rvt/Resource/____/3D/3D.svf"},
// 	{"id":6, "type":"wireless","name":"HexaBandantennaASI4518R10rvt","urn":"./svf/antenna/wireless_antenna/HexaBandantennaASI4518R10rvt/Resource/____/3D/3D.svf"},
// 	{"id":7, "type":"wireless","name":"TriplebandantennaATR4518R7rvt","urn":"./svf/antenna/wireless_antenna/TriplebandantennaATR4518R7rvt/Resource/____/3D/3D.svf"}
// ];



function dataFormat(datas, folderName, type, pathDe)
{
	var pathDefault = pathDe || pathDefault2;
	// var idneeded = idNeed == null ? true : false;
	var dataAll = [];	
	for(var i = 0; i < datas.length; i++){
		var namet = datas[i];
		var data = {};
		data.id = i + 1;
		data.type = type;
		data.name = namet;
		data.urn = pathDefault.replace("bbbbb", folderName).replace("aaaaa", namet);
		dataAll.push(data);
	}
	return JSON.stringify(dataAll);
}



var wlType = "wireless_antenna";
var wlName = "antenna/wireless_antenna";
var wirelessFolderNames = ["DualbandantennaADU4518R11rvt","DualbandantennaADU451604rvt","HexaBandantennaASI4518R10rvt","TriplebandantennaATR4518R7rvt"];
function dataFormatWirless(){
	return dataFormat(wirelessFolderNames,wlName,wlType);
}
var wirelessData=[
	{"id":1,"type":"wireless_antenna","name":"DualbandantennaADU4518R11rvt","urn":"./svf/antenna/wireless_antenna/DualbandantennaADU4518R11rvt/Resource/____/3D/3D.svf"},
	{"id":2,"type":"wireless_antenna","name":"DualbandantennaADU451604rvt","urn":"./svf/antenna/wireless_antenna/DualbandantennaADU451604rvt/Resource/____/3D/3D.svf"},
	{"id":3,"type":"wireless_antenna","name":"HexaBandantennaASI4518R10rvt","urn":"./svf/antenna/wireless_antenna/HexaBandantennaASI4518R10rvt/Resource/____/3D/3D.svf"},
	{"id":4,"type":"wireless_antenna","name":"TriplebandantennaATR4518R7rvt","urn":"./svf/antenna/wireless_antenna/TriplebandantennaATR4518R7rvt/Resource/____/3D/3D.svf"}
];



var mwType = "microwave_antenna";
var mwName = "antenna/microwave_antenna";
var microWaveFolderNames = [	"03Mrvt",	"06Mrvt",	"09Mrvt",	"12Mrvt",	"18Mrvt",	"RTN310rvt",	"XMC2ODUrvt",	"XMC3ODUrvt"];
function dataFormatMicrowave(){
	return dataFormat(microWaveFolderNames, mwName, mwType);
}
var microwaveData = [
	{"id":1,"type":"microwave_antenna","name":"03Mrvt","urn":"./svf/antenna/microwave_antenna/03Mrvt/Resource/____/3D/3D.svf"},
	{"id":2,"type":"microwave_antenna","name":"06Mrvt","urn":"./svf/antenna/microwave_antenna/06Mrvt/Resource/____/3D/3D.svf"},
	{"id":3,"type":"microwave_antenna","name":"09Mrvt","urn":"./svf/antenna/microwave_antenna/09Mrvt/Resource/____/3D/3D.svf"},
	{"id":4,"type":"microwave_antenna","name":"12Mrvt","urn":"./svf/antenna/microwave_antenna/12Mrvt/Resource/____/3D/3D.svf"},
	{"id":5,"type":"microwave_antenna","name":"18Mrvt","urn":"./svf/antenna/microwave_antenna/18Mrvt/Resource/____/3D/3D.svf"},
	{"id":6,"type":"microwave_antenna","name":"RTN310rvt","urn":"./svf/antenna/microwave_antenna/RTN310rvt/Resource/____/3D/3D.svf"},
	{"id":7,"type":"microwave_antenna","name":"XMC2ODUrvt","urn":"./svf/antenna/microwave_antenna/XMC2ODUrvt/Resource/____/3D/3D.svf"},
	{"id":8,"type":"microwave_antenna","name":"XMC3ODUrvt","urn":"./svf/antenna/microwave_antenna/XMC3ODUrvt/Resource/____/3D/3D.svf"}
];



var towerType = "tower";
var tFolderName = "towerEtc/tower";
var towerFolderNames = ["3LegTowerrvt","4LegTowerrvt","9MPolervt","Billboardrvt","GRDMonopolervt","WaterTankrvt","WallMountrvt","WallMountonthewallrvt","SquareGuyedMasterrvt","PipePolervt","PalmTreervt","LPolervt","GuyedMastTower24mrvt","GuyedMastTower18mrvt","GuyedMastTower9mrvt"];
function dataFormatTower() {
	return dataFormat(towerFolderNames, tFolderName, towerType);
}
var towerData =	[
	{"id":1,"type":"tower","name":"3LegTowerrvt","urn":"./svf/towerEtc/tower/3LegTowerrvt/Resource/____/3D/3D.svf"},
	{"id":2,"type":"tower","name":"4LegTowerrvt","urn":"./svf/towerEtc/tower/4LegTowerrvt/Resource/____/3D/3D.svf"},
	{"id":3,"type":"tower","name":"9MPolervt","urn":"./svf/towerEtc/tower/9MPolervt/Resource/____/3D/3D.svf"},
	{"id":4,"type":"tower","name":"Billboardrvt","urn":"./svf/towerEtc/tower/Billboardrvt/Resource/____/3D/3D.svf"},
	{"id":5,"type":"tower","name":"GRDMonopolervt","urn":"./svf/towerEtc/tower/GRDMonopolervt/Resource/____/3D/3D.svf"},
	{"id":6,"type":"tower","name":"WaterTankrvt","urn":"./svf/towerEtc/tower/WaterTankrvt/Resource/____/3D/3D.svf"},
	{"id":7,"type":"tower","name":"WallMountrvt","urn":"./svf/towerEtc/tower/WallMountrvt/Resource/____/3D/3D.svf"},
	{"id":8,"type":"tower","name":"WallMountonthewallrvt","urn":"./svf/towerEtc/tower/WallMountonthewallrvt/Resource/____/3D/3D.svf"},
	{"id":9,"type":"tower","name":"SquareGuyedMasterrvt","urn":"./svf/towerEtc/tower/SquareGuyedMasterrvt/Resource/____/3D/3D.svf"},
	{"id":10,"type":"tower","name":"PipePolervt","urn":"./svf/towerEtc/tower/PipePolervt/Resource/____/3D/3D.svf"},
	{"id":11,"type":"tower","name":"PalmTreervt","urn":"./svf/towerEtc/tower/PalmTreervt/Resource/____/3D/3D.svf"},
	{"id":12,"type":"tower","name":"LPolervt","urn":"./svf/towerEtc/tower/LPolervt/Resource/____/3D/3D.svf"},
	{"id":13,"type":"tower","name":"GuyedMastTower24mrvt","urn":"./svf/towerEtc/tower/GuyedMastTower24mrvt/Resource/____/3D/3D.svf"},
	{"id":14,"type":"tower","name":"GuyedMastTower18mrvt","urn":"./svf/towerEtc/tower/GuyedMastTower18mrvt/Resource/____/3D/3D.svf"},
	{"id":15,"type":"tower","name":"GuyedMastTower9mrvt","urn":"./svf/towerEtc/tower/GuyedMastTower9mrvt/Resource/____/3D/3D.svf"}
];



var poleType = "pole";
var pFolderName = "towerEtc/pole";
var poleFolderNames = ["6MLPolervt","6MPipePolervt","9MPolervt","30MGRDMONOPOLErvt","30MRDUPolervt"];
function dataFormatPole() {
	return dataFormat(poleFolderNames, pFolderName, poleType);
}
var poleData = [
	{"id":1, "type":"pole","name":"6MLPolervt","urn":"./svf/towerEtc/pole/6MLPolervt/Resource/____/3D/3D.svf"},
	{"id":2, "type":"pole","name":"6MPipePolervt","urn":"./svf/towerEtc/pole/6MPipePolervt/Resource/____/3D/3D.svf"},
	{"id":3, "type":"pole","name":"9MPolervt","urn":"./svf/towerEtc/pole/9MPolervt/Resource/____/3D/3D.svf"},
	{"id":4, "type":"pole","name":"30MGRDMONOPOLErvt","urn":"./svf/towerEtc/pole/30MGRDMONOPOLErvt/Resource/____/3D/3D.svf"},
	{"id":5, "type":"pole","name":"30MRDUPolervt","urn":"./svf/towerEtc/pole/30MRDUPolervt/Resource/____/3D/3D.svf"}
];



var billboardType = "billboard";
var billFolderName = "towerEtc/billboard";
var billboardNames = ["Billboardrvt"];
function dataFormatBillboard(){
	return dataFormat(billboardNames,billFolderName,billboardType);
}
var billboardData = [{"id":1, "type":"billboard","name":"Billboardrvt","urn":"./svf/towerEtc/billboard/Billboardrvt/Resource/____/3D/3D.svf"}];



var wallmountType = "wallmount";
var wallmountFolderName = "towerEtc/wallmount";
var wallmountNames = ["3mWallmountrvt"];
function dataFormatWallmount(){
	return dataFormat(wallmountNames, wallmountFolderName, wallmountType);
}
var wallMountData = [{"id":1, "type":"wallmount","name":"3mWallmountrvt","urn":"./svf/towerEtc/wallmount/3mWallmountrvt/Resource/____/3D/3D.svf"}];



var watherTankType = "waterTank";
var watherTankFolderName = "towerEtc/watherTank";
var watherTankNames = ["WaterTankrvt"];
function dataFormatWatherTank(){
	return dataFormat(watherTankNames, watherTankFolderName, watherTankType);	
}
var watherTankData = [{"id":1, "type":"waterTank","name":"WaterTankrvt","urn":"./svf/towerEtc/watherTank/WaterTankrvt/Resource/____/3D/3D.svf"}];



var roomType = "room";
var roomFolderName = "roomEtc/room";
var roomNames = ["2500X2500X2800_level1rvt","2500X2500X2800_level2rvt","3300X2800X2800_level1rvt","3300X2800X2800_level2rvt","MiniShelterRoomrvt","Mini-shelterwithoutRacksrvt","Mini-shelterwithBatteryRacksrvt","Mini-shelterwithCombinationRacksrvt","Mini-shelterwithBTSRacksrvt"];
function dataFormatRoom(){
	return dataFormat(roomNames, roomFolderName, roomType);
}
var roomData = [
	{"id":1,"type":"room","name":"2500X2500X2800_level1rvt","urn":"./svf/roomEtc/room/2500X2500X2800_level1rvt/Resource/____/3D/3D.svf"},
	{"id":2,"type":"room","name":"2500X2500X2800_level2rvt","urn":"./svf/roomEtc/room/2500X2500X2800_level2rvt/Resource/____/3D/3D.svf"},
	{"id":3,"type":"room","name":"3300X2800X2800_level1rvt","urn":"./svf/roomEtc/room/3300X2800X2800_level1rvt/Resource/____/3D/3D.svf"},
	{"id":4,"type":"room","name":"3300X2800X2800_level2rvt","urn":"./svf/roomEtc/room/3300X2800X2800_level2rvt/Resource/____/3D/3D.svf"},
	{"id":5,"type":"room","name":"MiniShelterRoomrvt","urn":"./svf/roomEtc/room/MiniShelterRoomrvt/Resource/____/3D/3D.svf"},
	{"id":6,"type":"room","name":"Mini-shelterwithoutRacksrvt","urn":"./svf/roomEtc/room/Mini-shelterwithoutRacksrvt/Resource/____/3D/3D.svf"},
	{"id":7,"type":"room","name":"Mini-shelterwithBatteryRacksrvt","urn":"./svf/roomEtc/room/Mini-shelterwithBatteryRacksrvt/Resource/____/3D/3D.svf"},
	{"id":8,"type":"room","name":"Mini-shelterwithCombinationRacksrvt","urn":"./svf/roomEtc/room/Mini-shelterwithCombinationRacksrvt/Resource/____/3D/3D.svf"},
	{"id":9,"type":"room","name":"Mini-shelterwithBTSRacksrvt","urn":"./svf/roomEtc/room/Mini-shelterwithBTSRacksrvt/Resource/____/3D/3D.svf"}
];



var floorType = "floor";
var floorFolderName = "floor";
var floorNames = ["floor15X15"];
function dataFormatFloor(){
	return dataFormat(floorNames, floorFolderName, floorType, pathDefault3);
}
var floorData = [
{"id":1, "type":"floor","name":"floor15X15","urn":"./svf/floor/floor15X15/Resource/____/3D/3D.svf"}
];



var cabinetType = "cabinet";
var cabinetFolderName = "cabinet";
var cabinetNames = ["BTS3900_door_buttom","BTS3900L_door_buttom","EMERSON_door_buttom","TPB48200B_door_buttom"];
function dataFormatCabinet(){
	return dataFormat(cabinetNames, cabinetFolderName, cabinetType);
}
var cabinetData = [
	{"id":1, "type":"cabinet","name":"BTS3900_door_buttom","urn":"./svf/cabinet/BTS3900_door_buttom/Resource/____/3D/3D.svf"},
	{"id":2, "type":"cabinet","name":"BTS3900L_door_buttom","urn":"./svf/cabinet/BTS3900L_door_buttom/Resource/____/3D/3D.svf"},
	{"id":3, "type":"cabinet","name":"EMERSON_door_buttom","urn":"./svf/cabinet/EMERSON_door_buttom/Resource/____/3D/3D.svf"},
	{"id":4, "type":"cabinet","name":"TPB48200B_door_buttom","urn":"./svf/cabinet/TPB48200B_door_buttom/Resource/____/3D/3D.svf"}
];



var derrick = "derrick";
var derrickFolderName = "derrick";
var derrickNames = ["2mrvt","3mrvt","25mrvt"];
function dataFormatDerrick(){
	return dataFormat(derrickNames, derrickFolderName, derrick);
}
var derrickData = [
	{"id":1,"type":"derrick","name":"2mrvt","urn":"./svf/derrick/2mrvt/Resource/____/3D/3D.svf"},
	{"id":2,"type":"derrick","name":"3mrvt","urn":"./svf/derrick/3mrvt/Resource/____/3D/3D.svf"},
	{"id":3,"type":"derrick","name":"25mrvt","urn":"./svf/derrick/25mrvt/Resource/____/3D/3D.svf"}
];



// "derrickData":derrickData,"billboardData":billboardData,"poleData":poleData,"wirelessData":wirelessData, "microwaveData":microwaveData, "wallMountData":wallMountData,"watherTankData":watherTankData

// var CabinetData=[
// 	{"id":0,"type":"Cabinet","name":"BTS3900","urn":"./ALLsvf/cabinet/BTS3900/Resource/____/3D/3D.svf"},
// 	{"id":1,"type":"Cabinet","name":"19Inch","urn":"./ALLsvf/cabinet/19Inch/Resource/____/3D/3D.svf"},
// 	{"id":2,"type":"Cabinet","name":"ACcontrolpanel","urn":"./ALLsvf/cabinet/ACcontrolpanel/Resource/____/3D/3D.svf"},
// 	{"id":3,"type":"Cabinet","name":"ACCESSCONTROLPANEL","urn":"./ALLsvf/cabinet/ACCESSCONTROLPANEL/Resource/____/3D/3D.svf"},
// 	{"id":4,"type":"Cabinet","name":"ACcontrolrvt","urn":"./ALLsvf/cabinet/ACcontrolrvt/Resource/____/3D/3D.svf"},
// 	{"id":5,"type":"Cabinet","name":"BTS3012","urn":"./ALLsvf/cabinet/BTS3012/Resource/____/3D/3D.svf"},
// 	{"id":6,"type":"Cabinet","name":"BTS3812E","urn":"./ALLsvf/cabinet/BTS3812E/Resource/____/3D/3D.svf"},
// 	{"id":7,"type":"Cabinet","name":"BTS3900L","urn":"./ALLsvf/cabinet/BTS3900L/Resource/____/3D/3D.svf"},
// 	{"id":8,"type":"Cabinet","name":"EMERSON","urn":"./ALLsvf/cabinet/EMERSON/Resource/____/3D/3D.svf"},
// 	{"id":9,"type":"Cabinet","name":"GRACEINTERNATIONALCO","urn":"./ALLsvf/cabinet/GRACEINTERNATIONALCO/Resource/____/3D/3D.svf"},
// 	{"id":10,"type":"Cabinet","name":"IFS06L","urn":"./ALLsvf/cabinet/IFS06L/Resource/____/3D/3D.svf"},
// 	{"id":11,"type":"Cabinet","name":"Mircom","urn":"./ALLsvf/cabinet/Mircom/Resource/____/3D/3D.svf"},
// 	{"id":12,"type":"Cabinet","name":"TOPCOOL1AC-1","urn":"./ALLsvf/cabinet/TOPCOOL1AC-1/Resource/____/3D/3D.svf"},
// 	{"id":13,"type":"Cabinet","name":"TOPCOOLAC","urn":"./ALLsvf/cabinet/TOPCOOLAC/Resource/____/3D/3D.svf"},
// 	{"id":14,"type":"Cabinet","name":"TPB48200B","urn":"./ALLsvf/cabinet/TPB48200B/Resource/____/3D/3D.svf"},
// 	{"id":15,"type":"Cabinet","name":"BTS3900door","urn":"./ALLsvf/cabinet/BTS3900door/Resource/____/3D/3D.svf"},
// 	{"id":16,"type":"Cabinet","name":"BTS3900Ldoor","urn":"./ALLsvf/cabinet/BTS3900Ldoor/Resource/____/3D/3D.svf"},
// 	{"id":17,"type":"Cabinet","name":"EMERSONdoor","urn":"./ALLsvf/cabinet/EMERSONdoor/Resource/____/3D/3D.svf"},
// 	{"id":18,"type":"Cabinet","name":"TPB48200Bdoor","urn":"./ALLsvf/cabinet/TPB48200Bdoor/Resource/____/3D/3D.svf"}];		
var CabinetData=[
{"id":1,"type":"Cabinet","name":"BTS3900button","urn":"./ALLsvf/cabinet/BTS3900button/Resource/____/3D/3D.svf","superId":null},
{"id":2,"type":"Cabinet","name":"19Inch","urn":"./ALLsvf/cabinet/19Inch/Resource/____/3D/3D.svf","superId":null},
{"id":3,"type":"Cabinet","name":"ACcontrolpanel","urn":"./ALLsvf/cabinet/ACcontrolpanel/Resource/____/3D/3D.svf","superId":null},
{"id":4,"type":"Cabinet","name":"ACCESSCONTROLPANEL","urn":"./ALLsvf/cabinet/ACCESSCONTROLPANEL/Resource/____/3D/3D.svf","superId":null},
{"id":5,"type":"Cabinet","name":"ACcontrolrvt","urn":"./ALLsvf/cabinet/ACcontrolrvt/Resource/____/3D/3D.svf","superId":null},
{"id":6,"type":"Cabinet","name":"BTS3012","urn":"./ALLsvf/cabinet/BTS3012/Resource/____/3D/3D.svf","superId":null},
{"id":7,"type":"Cabinet","name":"BTS3812E","urn":"./ALLsvf/cabinet/BTS3812E/Resource/____/3D/3D.svf","superId":null},
{"id":8,"type":"Cabinet","name":"BTS3900L","urn":"./ALLsvf/cabinet/BTS3900L/Resource/____/3D/3D.svf","superId":null},
{"id":9,"type":"Cabinet","name":"EMERSON","urn":"./ALLsvf/cabinet/EMERSON/Resource/____/3D/3D.svf","superId":null},
{"id":10,"type":"Cabinet","name":"GRACEINTERNATIONALCO","urn":"./ALLsvf/cabinet/GRACEINTERNATIONALCO/Resource/____/3D/3D.svf","superId":null},
{"id":11,"type":"Cabinet","name":"IFS06L","urn":"./ALLsvf/cabinet/IFS06L/Resource/____/3D/3D.svf","superId":null},
{"id":12,"type":"Cabinet","name":"Mircom","urn":"./ALLsvf/cabinet/Mircom/Resource/____/3D/3D.svf","superId":null},
{"id":13,"type":"Cabinet","name":"TOPCOOL1AC-1","urn":"./ALLsvf/cabinet/TOPCOOL1AC-1/Resource/____/3D/3D.svf","superId":null},
{"id":14,"type":"Cabinet","name":"TOPCOOLAC","urn":"./ALLsvf/cabinet/TOPCOOLAC/Resource/____/3D/3D.svf","superId":null},
{"id":15,"type":"Cabinet","name":"TPB48200B","urn":"./ALLsvf/cabinet/TPB48200B/Resource/____/3D/3D.svf","superId":null},
{"id":16,"type":"Cabinet","name":"BTS3900buttondoor","urn":"./ALLsvf/cabinet/BTS3900buttondoor/Resource/____/3D/3D.svf","superId":null},
{"id":17,"type":"Cabinet","name":"BTS3900Ldoor","urn":"./ALLsvf/cabinet/BTS3900Ldoor/Resource/____/3D/3D.svf","superId":null},
{"id":18,"type":"Cabinet","name":"EMERSONdoor","urn":"./ALLsvf/cabinet/EMERSONdoor/Resource/____/3D/3D.svf","superId":null},
{"id":19,"type":"Cabinet","name":"TPB48200Bdoor","urn":"./ALLsvf/cabinet/TPB48200Bdoor/Resource/____/3D/3D.svf","superId":null},
{"id":20,"type":"Cabinet","name":"BTS3900","urn":"./ALLsvf/cabinet/BTS3900/Resource/____/3D/3D.svf","superId":null},
{"id":21,"type":"Cabinet","name":"BTS3900door","urn":"./ALLsvf/cabinet/BTS3900door/Resource/____/3D/3D.svf","superId":null}
];
// var FrameData=[
// 	{"id":0,"type":"Frame","name":"RFU","urn":"./ALLsvf/slot/RFU/RFUcabinet/Resource/____/3D/3D.svf"},
// 	{"id":1,"type":"Frame","name":"BBU3900","urn":"./ALLsvf/slot/BBU3900/BBU3900cabinet/Resource/____/3D/3D.svf"},
// 	{"id":2,"type":"Frame","name":"ATN950B","urn":"./ALLsvf/slot/ATN/ATN950B/ATN950Bcabinet/Resource/____/3D/3D.svf"},
// 	{"id":3,"type":"Frame","name":"CX200","urn":"./ALLsvf/slot/CX/CX200/CX200cabinet/Resource/____/3D/3D.svf"},
// 	{"id":4,"type":"Frame","name":"CX600-X2","urn":"./ALLsvf/slot/CX/CX600-X2/CX600-X2cabinet/Resource/____/3D/3D.svf"},
// 	{"id":5,"type":"Frame","name":"EPS24S48100DC","urn":"./ALLsvf/slot/EPS24S48100DC/EPS24S48100DCcabinet/Resource/____/3D/3D.svf"},
// 	{"id":6,"type":"Frame","name":"EPS4890","urn":"./ALLsvf/slot/EPS4890/EPS4890cabinet/Resource/____/3D/3D.svf"},
// 	{"id":7,"type":"Frame","name":"IDU910","urn":"./ALLsvf/slot/RTN/IDU910/IDU910cabinet/Resource/____/3D/3D.svf"},
// 	{"id":8,"type":"Frame","name":"IDU950","urn":"./ALLsvf/slot/RTN/IDU950/IDU950cabinet/Resource/____/3D/3D.svf"},
// 	{"id":9,"type":"Frame","name":"IDU980","urn":"./ALLsvf/slot/RTN/IDU980/IDU980cabinet/Resource/____/3D/3D.svf"},
// 	{"id":10,"type":"Frame","name":"ATN910B","urn":"./ALLsvf/slot/ATN/ATN910B/Resource/____/3D/3D.svf"},
// 	{"id":11,"type":"Frame","name":"DCDU-01","urn":"./ALLsvf/slot/DCDU/DCDU-01/Resource/____/3D/3D.svf"},
// 	{"id":12,"type":"Frame","name":"DCDU-11A","urn":"./ALLsvf/slot/DCDU/DCDU-11A/Resource/____/3D/3D.svf"},
// 	{"id":13,"type":"Frame","name":"DCDU-12A","urn":"./ALLsvf/slot/DCDU/DCDU-12A/Resource/____/3D/3D.svf"},
// 	{"id":14,"type":"Frame","name":"FAN","urn":"./ALLsvf/slot/FAN_WIND/FAN/Resource/____/3D/3D.svf"},
// 	{"id":15,"type":"Frame","name":"WIND","urn":"./ALLsvf/slot/FAN_WIND/WIND/Resource/____/3D/3D.svf"},
// 	{"id":16,"type":"Frame","name":"ODF-1","urn":"./ALLsvf/slot/ODF/ODF-1/Resource/____/3D/3D.svf"},
// 	{"id":17,"type":"Frame","name":"ODF-2","urn":"./ALLsvf/slot/ODF/ODF-2/Resource/____/3D/3D.svf"},
// 	{"id":18,"type":"Frame","name":"IDU905_2E","urn":"./ALLsvf/slot/RTN/IDU905_2E/Resource/____/3D/3D.svf"},
// 	{"id":19,"type":"Frame","name":"Battery","urn":"./ALLsvf/slot/Battery/BatteryCabinet/Resource/____/3D/3D.svf"},
// 	{"id":20,"type":"Frame","name":"RRU-2","urn":"./ALLsvf/slot/RRU/RRU-2/Resource/____/3D/3D.svf"},
// 	{"id":21,"type":"Frame","name":"RRU-4","urn":"./ALLsvf/slot/RRU/RRU-4/Resource/____/3D/3D.svf"},
// 	{"id":22,"type":"Frame","name":"RRU-9","urn":"./ALLsvf/slot/RRU/RRU-9/Resource/____/3D/3D.svf"},
// 	{"id":23,"type":"Frame","name":"EMUA","urn":"./ALLsvf/slot/Monitor/EMUA/Resource/____/3D/3D.svf"},
// 	{"id":24,"type":"Frame","name":"EMUB","urn":"./ALLsvf/slot/Monitor/EMUB/Resource/____/3D/3D.svf"}];
var FrameData=[
{"id":1,"type":"Frame","name":"RFU","urn":"./ALLsvf/slot/RFU/RFUcabinet/Resource/____/3D/3D.svf","superId":null},
{"id":2,"type":"Frame","name":"BBU3900","urn":"./ALLsvf/slot/BBU3900/BBU3900cabinet/Resource/____/3D/3D.svf","superId":null},
{"id":3,"type":"Frame","name":"ATN950B","urn":"./ALLsvf/slot/ATN/ATN950B/ATN950Bcabinet/Resource/____/3D/3D.svf","superId":null},
{"id":4,"type":"Frame","name":"CX200","urn":"./ALLsvf/slot/CX/CX200/CX200cabinet/Resource/____/3D/3D.svf","superId":null},
{"id":5,"type":"Frame","name":"CX600-X2","urn":"./ALLsvf/slot/CX/CX600-X2/CX600-X2cabinet/Resource/____/3D/3D.svf","superId":null},
{"id":6,"type":"Frame","name":"EPS24S48100DC","urn":"./ALLsvf/slot/EPS24S48100DC/EPS24S48100DCcabinet/Resource/____/3D/3D.svf","superId":null},
{"id":7,"type":"Frame","name":"EPS4890","urn":"./ALLsvf/slot/EPS4890/EPS4890cabinet/Resource/____/3D/3D.svf","superId":null},
{"id":8,"type":"Frame","name":"IDU910","urn":"./ALLsvf/slot/RTN/IDU910/IDU910cabinet/Resource/____/3D/3D.svf","superId":null},
{"id":9,"type":"Frame","name":"IDU950","urn":"./ALLsvf/slot/RTN/IDU950/IDU950cabinet/Resource/____/3D/3D.svf","superId":null},
{"id":10,"type":"Frame","name":"IDU980","urn":"./ALLsvf/slot/RTN/IDU980/IDU980cabinet/Resource/____/3D/3D.svf","superId":null},
{"id":11,"type":"Frame","name":"ATN910B","urn":"./ALLsvf/slot/ATN/ATN910B/Resource/____/3D/3D.svf","superId":null},
{"id":12,"type":"Frame","name":"DCDU-01","urn":"./ALLsvf/slot/DCDU/DCDU-01/Resource/____/3D/3D.svf","superId":null},
{"id":13,"type":"Frame","name":"DCDU-11A","urn":"./ALLsvf/slot/DCDU/DCDU-11A/Resource/____/3D/3D.svf","superId":null},
{"id":14,"type":"Frame","name":"DCDU-12A","urn":"./ALLsvf/slot/DCDU/DCDU-12A/Resource/____/3D/3D.svf","superId":null},
{"id":15,"type":"Frame","name":"FAN","urn":"./ALLsvf/slot/FAN_WIND/FAN/Resource/____/3D/3D.svf","superId":null},
{"id":16,"type":"Frame","name":"WIND","urn":"./ALLsvf/slot/FAN_WIND/WIND/Resource/____/3D/3D.svf","superId":null},
{"id":17,"type":"Frame","name":"ODF-1","urn":"./ALLsvf/slot/ODF/ODF-1/Resource/____/3D/3D.svf","superId":null},
{"id":18,"type":"Frame","name":"ODF-2","urn":"./ALLsvf/slot/ODF/ODF-2/Resource/____/3D/3D.svf","superId":null},
{"id":19,"type":"Frame","name":"IDU905_2E","urn":"./ALLsvf/slot/RTN/IDU905_2E/Resource/____/3D/3D.svf","superId":null},
{"id":20,"type":"Frame","name":"Battery","urn":"./ALLsvf/slot/Battery/BatteryCabinet/Resource/____/3D/3D.svf","superId":null},
{"id":21,"type":"Frame","name":"RRU-2","urn":"./ALLsvf/slot/RRU/RRU-2/Resource/____/3D/3D.svf","superId":null},
{"id":22,"type":"Frame","name":"RRU-4","urn":"./ALLsvf/slot/RRU/RRU-4/Resource/____/3D/3D.svf","superId":null},
{"id":23,"type":"Frame","name":"RRU-9","urn":"./ALLsvf/slot/RRU/RRU-9/Resource/____/3D/3D.svf","superId":null},
{"id":24,"type":"Frame","name":"EMUA","urn":"./ALLsvf/slot/Monitor/EMUA/Resource/____/3D/3D.svf","superId":null},
{"id":25,"type":"Frame","name":"EMUB","urn":"./ALLsvf/slot/Monitor/EMUB/Resource/____/3D/3D.svf","superId":null}
];
// var SlotData=[
// 	{"id":0,"type":"RFU","name":"CRFUd","urn":"./ALLsvf/slot/RFU/CRFUd/Resource/____/3D/3D.svf"},
// 	{"id":1,"type":"RFU","name":"CRFUe","urn":"./ALLsvf/slot/RFU/CRFUe/Resource/____/3D/3D.svf"},
// 	{"id":2,"type":"RFU","name":"DRFU","urn":"./ALLsvf/slot/RFU/DRFU/Resource/____/3D/3D.svf"},
// 	{"id":3,"type":"RFU","name":"GRFU","urn":"./ALLsvf/slot/RFU/GRFU/Resource/____/3D/3D.svf"},
// 	{"id":4,"type":"RFU","name":"LRFU","urn":"./ALLsvf/slot/RFU/LRFU/Resource/____/3D/3D.svf"},
// 	{"id":5,"type":"RFU","name":"LRFUe","urn":"./ALLsvf/slot/RFU/LRFUe/Resource/____/3D/3D.svf"},
// 	{"id":6,"type":"RFU","name":"MRFU","urn":"./ALLsvf/slot/RFU/MRFU/Resource/____/3D/3D.svf"},
// 	{"id":7,"type":"RFU","name":"MRFUc","urn":"./ALLsvf/slot/RFU/MRFUc/Resource/____/3D/3D.svf"},
// 	{"id":8,"type":"RFU","name":"MRFUe","urn":"./ALLsvf/slot/RFU/MRFUe/Resource/____/3D/3D.svf"},
// 	{"id":9,"type":"RFU","name":"WRFU","urn":"./ALLsvf/slot/RFU/WRFU/Resource/____/3D/3D.svf"},
// 	{"id":10,"type":"RFU","name":"WRFUa","urn":"./ALLsvf/slot/RFU/WRFUa/Resource/____/3D/3D.svf"},
// 	{"id":11,"type":"RFU","name":"WRFUd","urn":"./ALLsvf/slot/RFU/WRFUd/Resource/____/3D/3D.svf"},
// 	{"id":12,"type":"RFU","name":"WRFUe","urn":"./ALLsvf/slot/RFU/WRFUe/Resource/____/3D/3D.svf"},
// 	{"id":13,"type":"BBU3900","name":"FANBBU","urn":"./ALLsvf/slot/BBU3900/FANBBU/Resource/____/3D/3D.svf"},
// 	{"id":14,"type":"BBU3900","name":"GTMUb","urn":"./ALLsvf/slot/BBU3900/GTMUb/Resource/____/3D/3D.svf"},
// 	{"id":15,"type":"BBU3900","name":"UBBPd4","urn":"./ALLsvf/slot/BBU3900/UBBPd4/Resource/____/3D/3D.svf"},
// 	{"id":16,"type":"BBU3900","name":"UBBPd6","urn":"./ALLsvf/slot/BBU3900/UBBPd6/Resource/____/3D/3D.svf"},
// 	{"id":17,"type":"BBU3900","name":"UBBPe4","urn":"./ALLsvf/slot/BBU3900/UBBPe4/Resource/____/3D/3D.svf"},
// 	{"id":18,"type":"BBU3900","name":"UBRIb","urn":"./ALLsvf/slot/BBU3900/UBRIb/Resource/____/3D/3D.svf"},
// 	{"id":19,"type":"BBU3900","name":"UMPTa1","urn":"./ALLsvf/slot/BBU3900/UMPTa1/Resource/____/3D/3D.svf"},
// 	{"id":20,"type":"BBU3900","name":"UMPTb1","urn":"./ALLsvf/slot/BBU3900/UMPTb1/Resource/____/3D/3D.svf"},
// 	{"id":21,"type":"BBU3900","name":"UPEUa","urn":"./ALLsvf/slot/BBU3900/UPEUa/Resource/____/3D/3D.svf"},
// 	{"id":22,"type":"BBU3900","name":"UPEUb","urn":"./ALLsvf/slot/BBU3900/UPEUb/Resource/____/3D/3D.svf"},
// 	{"id":23,"type":"BBU3900","name":"UPEUc","urn":"./ALLsvf/slot/BBU3900/UPEUc/Resource/____/3D/3D.svf"},
// 	{"id":24,"type":"BBU3900","name":"UPEUd","urn":"./ALLsvf/slot/BBU3900/UPEUd/Resource/____/3D/3D.svf"},
// 	{"id":25,"type":"BBU3900","name":"WBBPa","urn":"./ALLsvf/slot/BBU3900/WBBPa/Resource/____/3D/3D.svf"},
// 	{"id":26,"type":"BBU3900","name":"WBBPb2","urn":"./ALLsvf/slot/BBU3900/WBBPb2/Resource/____/3D/3D.svf"},
// 	{"id":27,"type":"BBU3900","name":"WBBPb3","urn":"./ALLsvf/slot/BBU3900/WBBPb3/Resource/____/3D/3D.svf"},
// 	{"id":28,"type":"BBU3900","name":"WBBPb4","urn":"./ALLsvf/slot/BBU3900/WBBPb4/Resource/____/3D/3D.svf"},
// 	{"id":29,"type":"BBU3900","name":"WBBPd1","urn":"./ALLsvf/slot/BBU3900/WBBPd1/Resource/____/3D/3D.svf"},
// 	{"id":30,"type":"BBU3900","name":"WBBPd2","urn":"./ALLsvf/slot/BBU3900/WBBPd2/Resource/____/3D/3D.svf"},
// 	{"id":31,"type":"BBU3900","name":"WBBPf4","urn":"./ALLsvf/slot/BBU3900/WBBPf4/Resource/____/3D/3D.svf"},
// 	{"id":32,"type":"BBU3900","name":"WMPT","urn":"./ALLsvf/slot/BBU3900/WMPT/Resource/____/3D/3D.svf"},
// 	{"id":33,"type":"BBU3900","name":"UEIU","urn":"./ALLsvf/slot/BBU3900/UEIU/Resource/____/3D/3D.svf"},
// 	{"id":34,"type":"ATN910B","name":"ATN910B","urn":"./ALLsvf/slot/ATN/ATN910B/Resource/____/3D/3D.svf"},
// 	{"id":35,"type":"ATN950B","name":"AND1CXPA","urn":"./ALLsvf/slot/ATN/ATN950B/AND1CXPA/Resource/____/3D/3D.svf"},
// 	{"id":36,"type":"ATN950B","name":"AND1CXPB","urn":"./ALLsvf/slot/ATN/ATN950B/AND1CXPB/Resource/____/3D/3D.svf"},
// 	{"id":37,"type":"ATN950B","name":"AND1EM4F","urn":"./ALLsvf/slot/ATN/ATN950B/AND1EM4F/Resource/____/3D/3D.svf"},
// 	{"id":38,"type":"ATN950B","name":"AND1EM4T","urn":"./ALLsvf/slot/ATN/ATN950B/AND1EM4T/Resource/____/3D/3D.svf"},
// 	{"id":39,"type":"ATN950B","name":"AND1EM8F","urn":"./ALLsvf/slot/ATN/ATN950B/AND1EM8F/Resource/____/3D/3D.svf"},
// 	{"id":40,"type":"ATN950B","name":"AND1EM8T","urn":"./ALLsvf/slot/ATN/ATN950B/AND1EM8T/Resource/____/3D/3D.svf"},
// 	{"id":41,"type":"ATN950B","name":"AND1EX1","urn":"./ALLsvf/slot/ATN/ATN950B/AND1EX1/Resource/____/3D/3D.svf"},
// 	{"id":42,"type":"ATN950B","name":"AND1FANANT950B","urn":"./ALLsvf/slot/ATN/ATN950B/AND1FANANT950B/Resource/____/3D/3D.svf"},
// 	{"id":43,"type":"ATN950B","name":"AND2EM4T","urn":"./ALLsvf/slot/ATN/ATN950B/AND2EM4T/Resource/____/3D/3D.svf"},
// 	{"id":44,"type":"ATN950B","name":"TND1PIUANT950B","urn":"./ALLsvf/slot/ATN/ATN950B/TND1PIUANT950B/Resource/____/3D/3D.svf"},
// 	{"id":45,"type":"CX200","name":"CX200Battery","urn":"./ALLsvf/slot/CX/CX200/CX200Battery/Resource/____/3D/3D.svf"},
// 	{"id":46,"type":"CX200","name":"KCX200","urn":"./ALLsvf/slot/CX/CX200/KCX200/Resource/____/3D/3D.svf"},
// 	{"id":47,"type":"CX200","name":"SCU","urn":"./ALLsvf/slot/CX/CX200/SCU/Resource/____/3D/3D.svf"},
// 	{"id":48,"type":"CX200","name":"SIC","urn":"./ALLsvf/slot/CX/CX200/SIC/Resource/____/3D/3D.svf"},
// 	{"id":49,"type":"CX600-X2","name":"CX6D00MPUG70","urn":"./ALLsvf/slot/CX/CX600-X2/CX6D00MPUG70/Resource/____/3D/3D.svf"},
// 	{"id":50,"type":"CX600-X2","name":"CX6DNPUI2070","urn":"./ALLsvf/slot/CX/CX600-X2/CX6DNPUI2070/Resource/____/3D/3D.svf"},
// 	{"id":51,"type":"CX600-X2","name":"CX6M00E8FE10","urn":"./ALLsvf/slot/CX/CX600-X2/CX6M00E8FE10/Resource/____/3D/3D.svf"},
// 	{"id":52,"type":"CX600-X2","name":"CX6M00E8FF10","urn":"./ALLsvf/slot/CX/CX600-X2/CX6M00E8FF10/Resource/____/3D/3D.svf"},
// 	{"id":53,"type":"CX600-X2","name":"CX6M00E8GF70","urn":"./ALLsvf/slot/CX/CX600-X2/CX6M00E8GF70/Resource/____/3D/3D.svf"},
// 	{"id":54,"type":"CX600-X2","name":"CX6M0E8GFA70","urn":"./ALLsvf/slot/CX/CX600-X2/CX6M0E8GFA70/Resource/____/3D/3D.svf"},
// 	{"id":55,"type":"CX600-X2","name":"FANCX600-X2","urn":"./ALLsvf/slot/CX/CX600-X2/FANCX600-X2/Resource/____/3D/3D.svf"},
// 	{"id":56,"type":"CX600-X2","name":"PSUCX600-X2","urn":"./ALLsvf/slot/CX/CX600-X2/PSUCX600-X2/Resource/____/3D/3D.svf"},
// 	{"id":57,"type":"DCDU-01","name":"DCDU-01","urn":"./ALLsvf/slot/DCDU/DCDU-01/Resource/____/3D/3D.svf"},
// 	{"id":58,"type":"DCDU-11A","name":"DCDU-11A","urn":"./ALLsvf/slot/DCDU/DCDU-11A/Resource/____/3D/3D.svf"},
// 	{"id":59,"type":"DCDU-12A","name":"DCDU-12A","urn":"./ALLsvf/slot/DCDU/DCDU-12A/Resource/____/3D/3D.svf"},
// 	{"id":60,"type":"FAN","name":"FAN","urn":"./ALLsvf/slot/FAN_WIND/FAN/Resource/____/3D/3D.svf"},
// 	{"id":61,"type":"WIND","name":"WIND","urn":"./ALLsvf/slot/FAN_WIND/WIND/Resource/____/3D/3D.svf"},
// 	{"id":62,"type":"ODF-1","name":"ODF-1","urn":"./ALLsvf/slot/ODF/ODF-1/Resource/____/3D/3D.svf"},
// 	{"id":63,"type":"ODF-2","name":"ODF-2","urn":"./ALLsvf/slot/ODF/ODF-2/Resource/____/3D/3D.svf"},
// 	{"id":64,"type":"RRU-2","name":"RRU-2","urn":"./ALLsvf/slot/RRU/RRU-2/Resource/____/3D/3D.svf"},
// 	{"id":65,"type":"RRU-4","name":"RRU-4","urn":"./ALLsvf/slot/RRU/RRU-4/Resource/____/3D/3D.svf"},
// 	{"id":66,"type":"RRU-9","name":"RRU-9","urn":"./ALLsvf/slot/RRU/RRU-9/Resource/____/3D/3D.svf"},
// 	{"id":67,"type":"IDU905_2E","name":"IDU905_2E","urn":"./ALLsvf/slot/RTN/IDU905_2E/Resource/____/3D/3D.svf"},
// 	{"id":68,"type":"EPS24S48100DC","name":"zhengliu1","urn":"./ALLsvf/slot/EPS24S48100DC/zhengliu1/Resource/____/3D/3D.svf"},
// 	{"id":69,"type":"EPS24S48100DC","name":"zhengliu2","urn":"./ALLsvf/slot/EPS24S48100DC/zhengliu2/Resource/____/3D/3D.svf"},
// 	{"id":70,"type":"EPS4890","name":"EPS-1","urn":"./ALLsvf/slot/EPS4890/EPS-1/Resource/____/3D/3D.svf"},
// 	{"id":71,"type":"EPS4890","name":"EPW30-48AR4850N1","urn":"./ALLsvf/slot/EPS4890/EPW30-48AR4850N1/Resource/____/3D/3D.svf"},
// 	{"id":72,"type":"EPS4890","name":"EPW30-48AR4850N2","urn":"./ALLsvf/slot/EPS4890/EPW30-48AR4850N2/Resource/____/3D/3D.svf"},
// 	{"id":73,"type":"Battery","name":"AgissonTCB150B","urn":"./ALLsvf/slot/Battery/AgissonTCB150B/Resource/____/3D/3D.svf"},
// 	{"id":74,"type":"IDU910","name":"CSHA","urn":"./ALLsvf/slot/RTN/IDU910/CSHA/Resource/____/3D/3D.svf"},
// 	{"id":75,"type":"IDU910","name":"CSHC","urn":"./ALLsvf/slot/RTN/IDU910/CSHC/Resource/____/3D/3D.svf"},
// 	{"id":76,"type":"IDU910","name":"CSHB","urn":"./ALLsvf/slot/RTN/IDU910/CSHB/Resource/____/3D/3D.svf"},
// 	{"id":77,"type":"IDU910","name":"FANIDU910","urn":"./ALLsvf/slot/RTN/IDU910/FANIDU910/Resource/____/3D/3D.svf"},
// 	{"id":78,"type":"IDU910","name":"IF1","urn":"./ALLsvf/slot/RTN/IDU910/IF1/Resource/____/3D/3D.svf"},
// 	{"id":79,"type":"IDU910","name":"IFU2","urn":"./ALLsvf/slot/RTN/IDU910/IFU2/Resource/____/3D/3D.svf"},
// 	{"id":80,"type":"IDU910","name":"IFX2","urn":"./ALLsvf/slot/RTN/IDU910/IFX2/Resource/____/3D/3D.svf"},
// 	{"id":81,"type":"IDU910","name":"ISU2","urn":"./ALLsvf/slot/RTN/IDU910/ISU2/Resource/____/3D/3D.svf"},
// 	{"id":82,"type":"IDU910","name":"ISV3","urn":"./ALLsvf/slot/RTN/IDU910/ISV3/Resource/____/3D/3D.svf"},
// 	{"id":83,"type":"IDU910","name":"ISX2","urn":"./ALLsvf/slot/RTN/IDU910/ISX2/Resource/____/3D/3D.svf"},
// 	{"id":84,"type":"IDU910","name":"PIURTN910","urn":"./ALLsvf/slot/RTN/IDU910/PIURTN910/Resource/____/3D/3D.svf"},
// 	{"id":85,"type":"IDU950","name":"CSH","urn":"./ALLsvf/slot/RTN/IDU950/CSH/Resource/____/3D/3D.svf"},
// 	{"id":86,"type":"IDU950","name":"CST","urn":"./ALLsvf/slot/RTN/IDU950/CST/Resource/____/3D/3D.svf"},
// 	{"id":87,"type":"IDU950","name":"FANRTN950","urn":"./ALLsvf/slot/RTN/IDU950/FANRTN950/Resource/____/3D/3D.svf"},
// 	{"id":88,"type":"IDU950","name":"PIURTN950","urn":"./ALLsvf/slot/RTN/IDU950/PIURTN950/Resource/____/3D/3D.svf"},
// 	{"id":89,"type":"IDU980","name":"CSHN","urn":"./ALLsvf/slot/RTN/IDU980/CSHN/Resource/____/3D/3D.svf"},
// 	{"id":90,"type":"IDU980","name":"EG4","urn":"./ALLsvf/slot/RTN/IDU980/EG4/Resource/____/3D/3D.svf"},
// 	{"id":91,"type":"IDU980","name":"EM6F","urn":"./ALLsvf/slot/RTN/IDU980/EM6F/Resource/____/3D/3D.svf"},
// 	{"id":92,"type":"IDU980","name":"EM6T","urn":"./ALLsvf/slot/RTN/IDU980/EM6T/Resource/____/3D/3D.svf"},
// 	{"id":93,"type":"IDU980","name":"FANIDU980","urn":"./ALLsvf/slot/RTN/IDU980/FANIDU980/Resource/____/3D/3D.svf"},
// 	{"id":94,"type":"IDU980","name":"PIUIDU980","urn":"./ALLsvf/slot/RTN/IDU980/PIUIDU980/Resource/____/3D/3D.svf"},
// 	{"id":95,"type":"IDU950","name":"ISV3","urn":"./ALLsvf/slot/RTN/IDU910/ISV3/Resource/____/3D/3D.svf"},
// 	{"id":96,"type":"EMUA","name":"EMUA","urn":"./ALLsvf/slot/Monitor/EMUA/Resource/____/3D/3D.svf"},
// 	{"id":97,"type":"EMUB","name":"EMUB","urn":"./ALLsvf/slot/Monitor/EMUB/Resource/____/3D/3D.svf"}];
var SlotData=[
{"id":1,"type":"RFU","name":"CRFUd","urn":"./ALLsvf/slot/RFU/CRFUd/Resource/____/3D/3D.svf","superId":null},
{"id":2,"type":"RFU","name":"CRFUe","urn":"./ALLsvf/slot/RFU/CRFUe/Resource/____/3D/3D.svf","superId":null},
{"id":3,"type":"RFU","name":"DRFU","urn":"./ALLsvf/slot/RFU/DRFU/Resource/____/3D/3D.svf","superId":null},
{"id":4,"type":"RFU","name":"GRFU","urn":"./ALLsvf/slot/RFU/GRFU/Resource/____/3D/3D.svf","superId":null},
{"id":5,"type":"RFU","name":"LRFU","urn":"./ALLsvf/slot/RFU/LRFU/Resource/____/3D/3D.svf","superId":null},
{"id":6,"type":"RFU","name":"LRFUe","urn":"./ALLsvf/slot/RFU/LRFUe/Resource/____/3D/3D.svf","superId":null},
{"id":7,"type":"RFU","name":"MRFU","urn":"./ALLsvf/slot/RFU/MRFU/Resource/____/3D/3D.svf","superId":null},
{"id":8,"type":"RFU","name":"MRFUc","urn":"./ALLsvf/slot/RFU/MRFUc/Resource/____/3D/3D.svf","superId":null},
{"id":9,"type":"RFU","name":"MRFUe","urn":"./ALLsvf/slot/RFU/MRFUe/Resource/____/3D/3D.svf","superId":null},
{"id":10,"type":"RFU","name":"WRFU","urn":"./ALLsvf/slot/RFU/WRFU/Resource/____/3D/3D.svf","superId":null},
{"id":11,"type":"RFU","name":"WRFUa","urn":"./ALLsvf/slot/RFU/WRFUa/Resource/____/3D/3D.svf","superId":null},
{"id":12,"type":"RFU","name":"WRFUd","urn":"./ALLsvf/slot/RFU/WRFUd/Resource/____/3D/3D.svf","superId":null},
{"id":13,"type":"RFU","name":"WRFUe","urn":"./ALLsvf/slot/RFU/WRFUe/Resource/____/3D/3D.svf","superId":null},
{"id":14,"type":"BBU3900","name":"FANBBU","urn":"./ALLsvf/slot/BBU3900/FANBBU/Resource/____/3D/3D.svf","superId":null},
{"id":15,"type":"BBU3900","name":"GTMUb","urn":"./ALLsvf/slot/BBU3900/GTMUb/Resource/____/3D/3D.svf","superId":null},
{"id":16,"type":"BBU3900","name":"UBBPd4","urn":"./ALLsvf/slot/BBU3900/UBBPd4/Resource/____/3D/3D.svf","superId":null},
{"id":17,"type":"BBU3900","name":"UBBPd6","urn":"./ALLsvf/slot/BBU3900/UBBPd6/Resource/____/3D/3D.svf","superId":null},
{"id":18,"type":"BBU3900","name":"UBBPe4","urn":"./ALLsvf/slot/BBU3900/UBBPe4/Resource/____/3D/3D.svf","superId":null},
{"id":19,"type":"BBU3900","name":"UBRIb","urn":"./ALLsvf/slot/BBU3900/UBRIb/Resource/____/3D/3D.svf","superId":null},
{"id":20,"type":"BBU3900","name":"UMPTa1","urn":"./ALLsvf/slot/BBU3900/UMPTa1/Resource/____/3D/3D.svf","superId":null},
{"id":21,"type":"BBU3900","name":"UMPTb1","urn":"./ALLsvf/slot/BBU3900/UMPTb1/Resource/____/3D/3D.svf","superId":null},
{"id":22,"type":"BBU3900","name":"UPEUa","urn":"./ALLsvf/slot/BBU3900/UPEUa/Resource/____/3D/3D.svf","superId":null},
{"id":23,"type":"BBU3900","name":"UPEUb","urn":"./ALLsvf/slot/BBU3900/UPEUb/Resource/____/3D/3D.svf","superId":null},
{"id":24,"type":"BBU3900","name":"UPEUc","urn":"./ALLsvf/slot/BBU3900/UPEUc/Resource/____/3D/3D.svf","superId":null},
{"id":25,"type":"BBU3900","name":"UPEUd","urn":"./ALLsvf/slot/BBU3900/UPEUd/Resource/____/3D/3D.svf","superId":null},
{"id":26,"type":"BBU3900","name":"WBBPa","urn":"./ALLsvf/slot/BBU3900/WBBPa/Resource/____/3D/3D.svf","superId":null},
{"id":27,"type":"BBU3900","name":"WBBPb2","urn":"./ALLsvf/slot/BBU3900/WBBPb2/Resource/____/3D/3D.svf","superId":null},
{"id":28,"type":"BBU3900","name":"WBBPb3","urn":"./ALLsvf/slot/BBU3900/WBBPb3/Resource/____/3D/3D.svf","superId":null},
{"id":29,"type":"BBU3900","name":"WBBPb4","urn":"./ALLsvf/slot/BBU3900/WBBPb4/Resource/____/3D/3D.svf","superId":null},
{"id":30,"type":"BBU3900","name":"WBBPd1","urn":"./ALLsvf/slot/BBU3900/WBBPd1/Resource/____/3D/3D.svf","superId":null},
{"id":31,"type":"BBU3900","name":"WBBPd2","urn":"./ALLsvf/slot/BBU3900/WBBPd2/Resource/____/3D/3D.svf","superId":null},
{"id":32,"type":"BBU3900","name":"WBBPf4","urn":"./ALLsvf/slot/BBU3900/WBBPf4/Resource/____/3D/3D.svf","superId":null},
{"id":33,"type":"BBU3900","name":"WMPT","urn":"./ALLsvf/slot/BBU3900/WMPT/Resource/____/3D/3D.svf","superId":null},
{"id":34,"type":"BBU3900","name":"UEIU","urn":"./ALLsvf/slot/BBU3900/UEIU/Resource/____/3D/3D.svf","superId":null},
{"id":35,"type":"ATN910B","name":"ATN910B","urn":"./ALLsvf/slot/ATN/ATN910B/Resource/____/3D/3D.svf","superId":null},
{"id":36,"type":"ATN950B","name":"AND1CXPA","urn":"./ALLsvf/slot/ATN/ATN950B/AND1CXPA/Resource/____/3D/3D.svf","superId":null},
{"id":37,"type":"ATN950B","name":"AND1CXPB","urn":"./ALLsvf/slot/ATN/ATN950B/AND1CXPB/Resource/____/3D/3D.svf","superId":null},
{"id":38,"type":"ATN950B","name":"AND1EM4F","urn":"./ALLsvf/slot/ATN/ATN950B/AND1EM4F/Resource/____/3D/3D.svf","superId":null},
{"id":39,"type":"ATN950B","name":"AND1EM4T","urn":"./ALLsvf/slot/ATN/ATN950B/AND1EM4T/Resource/____/3D/3D.svf","superId":null},
{"id":40,"type":"ATN950B","name":"AND1EM8F","urn":"./ALLsvf/slot/ATN/ATN950B/AND1EM8F/Resource/____/3D/3D.svf","superId":null},
{"id":41,"type":"ATN950B","name":"AND1EM8T","urn":"./ALLsvf/slot/ATN/ATN950B/AND1EM8T/Resource/____/3D/3D.svf","superId":null},
{"id":42,"type":"ATN950B","name":"AND1EX1","urn":"./ALLsvf/slot/ATN/ATN950B/AND1EX1/Resource/____/3D/3D.svf","superId":null},
{"id":43,"type":"ATN950B","name":"AND1FANANT950B","urn":"./ALLsvf/slot/ATN/ATN950B/AND1FANANT950B/Resource/____/3D/3D.svf","superId":null},
{"id":44,"type":"ATN950B","name":"AND2EM4T","urn":"./ALLsvf/slot/ATN/ATN950B/AND2EM4T/Resource/____/3D/3D.svf","superId":null},
{"id":45,"type":"ATN950B","name":"TND1PIUANT950B","urn":"./ALLsvf/slot/ATN/ATN950B/TND1PIUANT950B/Resource/____/3D/3D.svf","superId":null},
{"id":46,"type":"CX200","name":"CX200Battery","urn":"./ALLsvf/slot/CX/CX200/CX200Battery/Resource/____/3D/3D.svf","superId":null},
{"id":47,"type":"CX200","name":"KCX200","urn":"./ALLsvf/slot/CX/CX200/KCX200/Resource/____/3D/3D.svf","superId":null},
{"id":48,"type":"CX200","name":"SCU","urn":"./ALLsvf/slot/CX/CX200/SCU/Resource/____/3D/3D.svf","superId":null},
{"id":49,"type":"CX200","name":"SIC","urn":"./ALLsvf/slot/CX/CX200/SIC/Resource/____/3D/3D.svf","superId":null},
{"id":50,"type":"CX600-X2","name":"CX6D00MPUG70","urn":"./ALLsvf/slot/CX/CX600-X2/CX6D00MPUG70/Resource/____/3D/3D.svf","superId":null},
{"id":51,"type":"CX600-X2","name":"CX6DNPUI2070","urn":"./ALLsvf/slot/CX/CX600-X2/CX6DNPUI2070/Resource/____/3D/3D.svf","superId":null},
{"id":52,"type":"CX600-X2","name":"CX6M00E8FE10","urn":"./ALLsvf/slot/CX/CX600-X2/CX6M00E8FE10/Resource/____/3D/3D.svf","superId":null},
{"id":53,"type":"CX600-X2","name":"CX6M00E8FF10","urn":"./ALLsvf/slot/CX/CX600-X2/CX6M00E8FF10/Resource/____/3D/3D.svf","superId":null},
{"id":54,"type":"CX600-X2","name":"CX6M00E8GF70","urn":"./ALLsvf/slot/CX/CX600-X2/CX6M00E8GF70/Resource/____/3D/3D.svf","superId":null},
{"id":55,"type":"CX600-X2","name":"CX6M0E8GFA70","urn":"./ALLsvf/slot/CX/CX600-X2/CX6M0E8GFA70/Resource/____/3D/3D.svf","superId":null},
{"id":56,"type":"CX600-X2","name":"FANCX600-X2","urn":"./ALLsvf/slot/CX/CX600-X2/FANCX600-X2/Resource/____/3D/3D.svf","superId":null},
{"id":57,"type":"CX600-X2","name":"PSUCX600-X2","urn":"./ALLsvf/slot/CX/CX600-X2/PSUCX600-X2/Resource/____/3D/3D.svf","superId":null},
{"id":58,"type":"DCDU-01","name":"DCDU-01","urn":"./ALLsvf/slot/DCDU/DCDU-01/Resource/____/3D/3D.svf","superId":null},
{"id":59,"type":"DCDU-11A","name":"DCDU-11A","urn":"./ALLsvf/slot/DCDU/DCDU-11A/Resource/____/3D/3D.svf","superId":null},
{"id":60,"type":"DCDU-12A","name":"DCDU-12A","urn":"./ALLsvf/slot/DCDU/DCDU-12A/Resource/____/3D/3D.svf","superId":null},
{"id":61,"type":"FAN","name":"FAN","urn":"./ALLsvf/slot/FAN_WIND/FAN/Resource/____/3D/3D.svf","superId":null},
{"id":62,"type":"WIND","name":"WIND","urn":"./ALLsvf/slot/FAN_WIND/WIND/Resource/____/3D/3D.svf","superId":null},
{"id":63,"type":"ODF-1","name":"ODF-1","urn":"./ALLsvf/slot/ODF/ODF-1/Resource/____/3D/3D.svf","superId":null},
{"id":64,"type":"ODF-2","name":"ODF-2","urn":"./ALLsvf/slot/ODF/ODF-2/Resource/____/3D/3D.svf","superId":null},
{"id":65,"type":"RRU-2","name":"RRU-2","urn":"./ALLsvf/slot/RRU/RRU-2/Resource/____/3D/3D.svf","superId":null},
{"id":66,"type":"RRU-4","name":"RRU-4","urn":"./ALLsvf/slot/RRU/RRU-4/Resource/____/3D/3D.svf","superId":null},
{"id":67,"type":"RRU-9","name":"RRU-9","urn":"./ALLsvf/slot/RRU/RRU-9/Resource/____/3D/3D.svf","superId":null},
{"id":68,"type":"IDU905_2E","name":"IDU905_2E","urn":"./ALLsvf/slot/RTN/IDU905_2E/Resource/____/3D/3D.svf","superId":null},
{"id":69,"type":"EPS24S48100DC","name":"zhengliu1","urn":"./ALLsvf/slot/EPS24S48100DC/zhengliu1/Resource/____/3D/3D.svf","superId":null},
{"id":70,"type":"EPS24S48100DC","name":"zhengliu2","urn":"./ALLsvf/slot/EPS24S48100DC/zhengliu2/Resource/____/3D/3D.svf","superId":null},
{"id":71,"type":"EPS4890","name":"EPS-1","urn":"./ALLsvf/slot/EPS4890/EPS-1/Resource/____/3D/3D.svf","superId":null},
{"id":72,"type":"EPS4890","name":"EPW30-48AR4850N1","urn":"./ALLsvf/slot/EPS4890/EPW30-48AR4850N1/Resource/____/3D/3D.svf","superId":null},
{"id":73,"type":"EPS4890","name":"EPW30-48AR4850N2","urn":"./ALLsvf/slot/EPS4890/EPW30-48AR4850N2/Resource/____/3D/3D.svf","superId":null},
{"id":74,"type":"Battery","name":"AgissonTCB150B","urn":"./ALLsvf/slot/Battery/AgissonTCB150B/Resource/____/3D/3D.svf","superId":null},
{"id":75,"type":"IDU910","name":"CSHA","urn":"./ALLsvf/slot/RTN/IDU910/CSHA/Resource/____/3D/3D.svf","superId":null},
{"id":76,"type":"IDU910","name":"CSHC","urn":"./ALLsvf/slot/RTN/IDU910/CSHC/Resource/____/3D/3D.svf","superId":null},
{"id":77,"type":"IDU910","name":"CSHB","urn":"./ALLsvf/slot/RTN/IDU910/CSHB/Resource/____/3D/3D.svf","superId":null},
{"id":78,"type":"IDU910","name":"FANIDU910","urn":"./ALLsvf/slot/RTN/IDU910/FANIDU910/Resource/____/3D/3D.svf","superId":null},
{"id":79,"type":"IDU910","name":"IF1","urn":"./ALLsvf/slot/RTN/IDU910/IF1/Resource/____/3D/3D.svf","superId":null},
{"id":80,"type":"IDU910","name":"IFU2","urn":"./ALLsvf/slot/RTN/IDU910/IFU2/Resource/____/3D/3D.svf","superId":null},
{"id":81,"type":"IDU910","name":"IFX2","urn":"./ALLsvf/slot/RTN/IDU910/IFX2/Resource/____/3D/3D.svf","superId":null},
{"id":82,"type":"IDU910","name":"ISU2","urn":"./ALLsvf/slot/RTN/IDU910/ISU2/Resource/____/3D/3D.svf","superId":null},
{"id":83,"type":"IDU910","name":"ISV3","urn":"./ALLsvf/slot/RTN/IDU910/ISV3/Resource/____/3D/3D.svf","superId":null},
{"id":84,"type":"IDU910","name":"ISX2","urn":"./ALLsvf/slot/RTN/IDU910/ISX2/Resource/____/3D/3D.svf","superId":null},
{"id":85,"type":"IDU910","name":"PIURTN910","urn":"./ALLsvf/slot/RTN/IDU910/PIURTN910/Resource/____/3D/3D.svf","superId":null},
{"id":86,"type":"IDU950","name":"CSH","urn":"./ALLsvf/slot/RTN/IDU950/CSH/Resource/____/3D/3D.svf","superId":null},
{"id":87,"type":"IDU950","name":"CST","urn":"./ALLsvf/slot/RTN/IDU950/CST/Resource/____/3D/3D.svf","superId":null},
{"id":88,"type":"IDU950","name":"FANRTN950","urn":"./ALLsvf/slot/RTN/IDU950/FANRTN950/Resource/____/3D/3D.svf","superId":null},
{"id":89,"type":"IDU950","name":"PIURTN950","urn":"./ALLsvf/slot/RTN/IDU950/PIURTN950/Resource/____/3D/3D.svf","superId":null},
{"id":90,"type":"IDU980","name":"CSHN","urn":"./ALLsvf/slot/RTN/IDU980/CSHN/Resource/____/3D/3D.svf","superId":null},
{"id":91,"type":"IDU980","name":"EG4","urn":"./ALLsvf/slot/RTN/IDU980/EG4/Resource/____/3D/3D.svf","superId":null},
{"id":92,"type":"IDU980","name":"EM6F","urn":"./ALLsvf/slot/RTN/IDU980/EM6F/Resource/____/3D/3D.svf","superId":null},
{"id":93,"type":"IDU980","name":"EM6T","urn":"./ALLsvf/slot/RTN/IDU980/EM6T/Resource/____/3D/3D.svf","superId":null},
{"id":94,"type":"IDU980","name":"FANIDU980","urn":"./ALLsvf/slot/RTN/IDU980/FANIDU980/Resource/____/3D/3D.svf","superId":null},
{"id":95,"type":"IDU980","name":"PIUIDU980","urn":"./ALLsvf/slot/RTN/IDU980/PIUIDU980/Resource/____/3D/3D.svf","superId":null},
{"id":96,"type":"IDU950","name":"ISV3","urn":"./ALLsvf/slot/RTN/IDU910/ISV3/Resource/____/3D/3D.svf","superId":null},
{"id":97,"type":"EMUA","name":"EMUA","urn":"./ALLsvf/slot/Monitor/EMUA/Resource/____/3D/3D.svf","superId":null},
{"id":98,"type":"EMUB","name":"EMUB","urn":"./ALLsvf/slot/Monitor/EMUB/Resource/____/3D/3D.svf","superId":null}
];


var allData = {"towerData":towerData,"roomData":roomData,"floorData":floorData,"cabinetData":CabinetData,"FrameData":FrameData};


var insertTypeDatas = {"cabinet_type":CabinetData, "room_type":roomData, "tower_type":towerData, "slot_type":SlotData, "frame_type":FrameData};


function insertTypeData(table_name, table_datas){
	var insertStr = "INSERT INTO `cwr`.`aaaaa` (`id`, `name`, `urn`) VALUES";
	insertStr.replace("aaaaa", table_name);
	var rs = "";
	for(var i = 0; i < table_datas.length; i++){
		var data = table_datas[i];
		var temp = "(NULL, '" + data.name + "', '" + data.urn + "'), ";
		rs = rs + temp;	
	}
	return rs;
}