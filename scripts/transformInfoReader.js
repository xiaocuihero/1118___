
var adjustText = true;
var adjustUrl = wirelessData[0].urn;
var otherUrl = null;
var otherModel = null;
var adjustModel = null;
var adjustTestModel = null;
var adjustTestModels = [];
var adjustTestDatas = [];

var	globalOffset = {x: 0, y: 0, z: 0};

function adjustDataInit(adjust, other){
	adjustUrl = adjust || wirelessData[0].urn;
	// otherUrl = other || wirelessData[0].urn;
	adjustInit();
}

function adjustInit(){
	if (otherUrl != null){
		viewer.loadModel(otherUrl, {globalOffset : globalOffset},function(){
			otherModel = viewer.model;			
		});
	}
	var placementTransform = new THREE.Matrix4();
	viewer.loadModel(adjustUrl, { globalOffset : globalOffset}, function(){
		adjustModel = viewer.model;	
		// console.log(adjustModel);		
	});
}

function translateSubmit(){

	var rx = parseFloat($("#rx").val()) || 0;
	var ry = parseFloat($("#ry").val()) || 0;
	var rz = parseFloat($("#rz").val()) || 0;
	var keys = [$("#key1").val(), $("#key2").val(), $("#key3").val()];
	var values = [$("#value1").val(), $("#value2").val(), $("#value3").val()];
	var otherData = {};
	for (var i = 0; i < keys.length; i++){
		var key = keys[i];
		var value = values[i];
		if(key.toString().length != 0 && value.toString()!= 0){
			otherData[key.toString()] = value;		
		}
	}
	console.log(otherData);

	var rq = getRotation(rx, ry, rz)

	var rotateBox = adjustModel.getData().bbox;
	var halfz = rotateBox.max.z / 2;
	var center = new THREE.Vector3(
	  (rotateBox.min.x + rotateBox.max.x) / 2,
	  (rotateBox.min.y + rotateBox.max.y) / 2,
	  (rotateBox.min.y + rotateBox.max.y) / 2);


	var fragProxy = viewer.impl.getFragmentProxy(adjustModel, 0);
	fragProxy.getAnimTransform();			
	fragProxy.updateAnimTransform();

	var lastPosition = fragProxy.position.add(center);
	// var placementTransform = new THREE.Matrix4();
	// placementTransform.compose(lastPosition, rq, new THREE.Vector3(1,1,1));

	$("#tx").val(lastPosition.x);
	$("#ty").val(lastPosition.y);
	$("#tz").val(lastPosition.z);

	return dataToString(lastPosition, rx, ry, rz, otherData);
}

function translateTest(){
	translateSubmit();
	var tx = parseFloat($("#tx").val()) || 0;
	var ty = parseFloat($("#ty").val()) || 0;
	var tz = parseFloat($("#tz").val()) || 0;
	var rx = parseFloat($("#rx").val()) || 0;
	var ry = parseFloat($("#ry").val()) || 0;
	var rz = parseFloat($("#rz").val()) || 0;

	var placementTransform = buildTransformMatrixExt0(tx, ty, tz, rx, ry, rz);
	if (adjustTestModel != null){
		translateClear();
	}
	viewer.loadModel(adjustUrl, {globalOffset: globalOffset, placementTransform: placementTransform}, function () {
		adjustTestModel = viewer.model;
	});
}

function translateClear(){
	viewer.impl.unloadModel(adjustTestModel);
	adjustTestModel = null;
}

// function 

function CZModelReload(url){
	viewer.impl.unloadModel(adjustModel);
	adjustUrl = url;
	viewer.loadModel(adjustUrl, {globalOffset: globalOffset}, function () {
		viewer.impl.unloadModel(adjustModel);
		adjustModel = viewer.model;
	});
}

function CZReferenceModelReload(url){
	viewer.impl.unloadModel(otherModel);
	otherUrl = url;
	viewer.loadModel(otherUrl, {globalOffset: globalOffset}, function () {
		otherModel = viewer.model;
	});
}

var a = [{"id":2,"type":"microWave","name":"XMC2rvt","urn":"./svf/antenna/microwave_antenna/XMC2rvt/Resource/____/3D/3D.svf","tx":-0.05392999999999998,"ty":0.00857949999999999,"tz":0.00857949999999999,"rx":0,"ry":0,"rz":0,"ID":1,"superId":null},{"id":2,"type":"microWave","name":"XMC2rvt","urn":"./svf/antenna/microwave_antenna/XMC2rvt/Resource/____/3D/3D.svf","tx":-0.9116812502670288,"ty":-0.6191680357055664,"tz":0.00857949999999999,"rx":0,"ry":0,"rz":0,"ID":2,"superId":null},{"id":2,"type":"microWave","name":"XMC2rvt","urn":"./svf/antenna/microwave_antenna/XMC2rvt/Resource/____/3D/3D.svf","tx":0.12144428438663485,"ty":1.1873285844726562,"tz":0.00857949999999999,"rx":0,"ry":0,"rz":0,"ID":3,"superId":null}]

function dataToJson(tv3, rx, ry, rz, otherData){
	var data = {};
	data.tx = tv3.x;
	data.ty = tv3.y;
	data.tz = tv3.z;
	data.rx = rx;
	data.ry = ry;
	data.rz = rz;
	data = $.extend(otherData, data);
	return data;
}

function dataToString(tv3, rx, ry, rz,otherData){
	return JSON.stringify(dataToJson(tv3, rx, ry, rz,otherData));
	// JSON.stringify(data);
}

function deleteAdjustTestModelsByModelId(mid, callback1){
	var dindex = -1;
	for(var i = 0; i < adjustTestModels.length; i++){
		var tempModel = adjustTestModels[i];
		if(tempModel.id == mid){
			dindex = i;
		}
	}
	console.log(dindex);
	if (dindex == -1){
		alert("delete index equal -1!");
		return;
	}
	var model = {};
	model = adjustTestModels[dindex];
	viewer.impl.unloadModel(model);
	adjustTestModels.splice(dindex,1);
	adjustTestDatas.splice(dindex,1);
	callback1();
}

function deleteLastAdjustTestModels(){

}

function addNewModel(firstClass, secondClass, callback1){
	var rx = parseFloat($("#rx").val()) || 0;
	var ry = parseFloat($("#ry").val()) || 0;
	var rz = parseFloat($("#rz").val()) || 0;
	var keys = [$("#key1").val(), $("#key2").val(), $("#key3").val()];
	var values = [$("#value1").val(), $("#value2").val(), $("#value3").val()];
	var rotateBox = adjustModel.getData().bbox;
	var halfz = rotateBox.max.z / 2;
	var center = new THREE.Vector3(
	  (rotateBox.min.x + rotateBox.max.x) / 2,
	  (rotateBox.min.y + rotateBox.max.y) / 2,
	  (rotateBox.min.y + rotateBox.max.y) / 2);
	var fragProxy = viewer.impl.getFragmentProxy(adjustModel, 0);
	fragProxy.getAnimTransform();			
	fragProxy.updateAnimTransform();
	var lastPosition = fragProxy.position.add(center);
	var placementTransform = buildTransformMatrixExt0(lastPosition.x, lastPosition.y, lastPosition.z, rx, ry, rz);

	var dataT = allTypeData[firstClass.toString()][secondClass];
	var data = {};
	data.selfId = dataT.id;
	data.tx = lastPosition.x;
	data.ty = lastPosition.y;
	data.tz = lastPosition.z;
	data.rx = rx;
	data.ry = ry;
	data.rz = rz;
	adjustTestDatas.push(data);

	console.log(data);
	console.log(adjustTestDatas);

	viewer.loadModel(dataT.urn, {globalOffset: globalOffset, placementTransform: placementTransform}, function () {
		var modelt = null;
		modelt = viewer.model;
		adjustTestModels.push(modelt);
		console.log(adjustTestModels);
		callback1();
	});
}

function arrayDataPrase(super_id){	
	console.log(adjustTestDatas);
	var arr = [];
	for (var i = 0; i < adjustTestDatas.length; i++) {
		var data = adjustTestDatas[i];
		// data.selfId = data.id;
		data.pos_index = i + 1;
		if (super_id != null){
			data.superId = super_id || 1;
		}
		arr.push(data);
	}
	// console.log(arr);
	var rs = JSON.stringify(arr);
	rs = rs.replace(/},{/g, "},\r\n{");
	return rs;
}
