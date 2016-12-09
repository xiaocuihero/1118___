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

var pathDefault2 = "./svf/bbbbb/aaaaa/Resource/____/3D/3D.svf";
var pathDefault1 = "./svf/aaaaa/Resource/____/3D/3D.svf";
var pathDefault3 = "./svf/bbbbb/aaaaa/Resource/____/_3D_ 332258/_3D_.svf"




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
var roomNames = ["1949696-MiniShelterRoomrvt","1966080-Mini-shelterwithoutRacksrvt","2433024-Mini-shelterwithBatteryRacksrvt","5013504-3300X2800X2800rvt","4911104-2400X2400X2800rvt","4833280-Mini-shelterwithCombinationRacksrvt","3588096-Mini-shelterwithBTSRacksrvt"];
function dataFormatRoom(){
	return dataFormat(roomNames, roomFolderName, roomType);
}
var roomData = [
	{"id":1,"type":"room","name":"1949696-MiniShelterRoomrvt","urn":"./svf/roomEtc/room/1949696-MiniShelterRoomrvt/Resource/____/3D/3D.svf"},
	{"id":2,"type":"room","name":"1966080-Mini-shelterwithoutRacksrvt","urn":"./svf/roomEtc/room/1966080-Mini-shelterwithoutRacksrvt/Resource/____/3D/3D.svf"},
	{"id":3,"type":"room","name":"2433024-Mini-shelterwithBatteryRacksrvt","urn":"./svf/roomEtc/room/2433024-Mini-shelterwithBatteryRacksrvt/Resource/____/3D/3D.svf"},
	{"id":4,"type":"room","name":"5013504-3300X2800X2800rvt","urn":"./svf/roomEtc/room/5013504-3300X2800X2800rvt/Resource/____/3D/3D.svf"},
	{"id":5,"type":"room","name":"4911104-2400X2400X2800rvt","urn":"./svf/roomEtc/room/4911104-2400X2400X2800rvt/Resource/____/3D/3D.svf"},
	{"id":6,"type":"room","name":"4833280-Mini-shelterwithCombinationRacksrvt","urn":"./svf/roomEtc/room/4833280-Mini-shelterwithCombinationRacksrvt/Resource/____/3D/3D.svf"},
	{"id":7,"type":"room","name":"3588096-Mini-shelterwithBTSRacksrvt","urn":"./svf/roomEtc/room/3588096-Mini-shelterwithBTSRacksrvt/Resource/____/3D/3D.svf"}
];



var floorType = "floor";
var floorFolderName = "floor";
var floorNames = ["floor10X10"];
function dataFormatFloor(){
	return dataFormat(floorNames, floorFolderName, floorType, pathDefault3);
}
var floorData = [{"id":1, "type":"floor","name":"floor10X10","urn":"./svf/floor/floor10X10/Resource/____/_3D_ 332258/_3D_.svf"}];

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

var allData = {"wirelessData":wirelessData, "microwaveData":microwaveData,"towerData":towerData,"poleData":poleData,"billboardData":billboardData,
"wallMountData":wallMountData,"watherTankData":watherTankData,"roomData":roomData,"floorData":floorData,
"cabinetData":cabinetData,"derrickData":derrickData};

