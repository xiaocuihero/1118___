var	globalOffset = {x: 0, y: 0, z: 0};
var loadedModel = null;


/*
	callback : block function, paramater is loaded model.
	para : 
		type 		: 	not null;
						model type;
							{"room","tower","cabinet","frame","slot","antenna","derrick"}
						one of them;
		pos_index 	: 	index of position. 
						default:1,
						option;
		superId 	: 	model owner type id, the model id of which is the containner
						default:1,
						option;
		selfId		: 	model type id
						default:1,
						need to be not null, but now is optional.
		infoId		: 	info id. connet model to info data
*/
function CZLoad(para, callback){
	// console.log(1);
	$.ajax({
		url:"./php/select.php",
		type:"POST",
		data: para,
		dataType:"JSON",
		success:function(data){
			// console.log(2);
			// console.log(JSON.stringify(data));
			if (data.length > 0){
				var dataTemp = data[0];
				dataTemp.superTrans = para.superTrans;
				dataTemp.para = para;
				// dataTemp.superTrans.push(para.superTrans)
				CZLoadModelWith(dataTemp, function(model, data1){		
					// console.log(3);
					if(callback){
						callback(model, data1);
						// console.log(data1);
					}
				});
			}else{
				console.log("CZLoad error 1");
				console.log(para);
			}
		},
		error:function(e){
			console.log(e.responseText);
		}
	});
}

// 3629,3620,3621,3622,3623


// function CZLoadBasicModel(para, callback){
// 	$.ajax({
// 		url:"./php/select.php",
// 		type:"POST",
// 		data: para,
// 		dataType:"JSON",
// 		success:function(data){
// 			if (data.length > 0){
// 				//para life-circle? FIXIT...
// 				var dataTemp = data[0];
// 				dataTemp.infoId = para.infoId;
// 				CZLoadModelWith(dataTemp, function(model, data1){
// 					callback(model, data1);
// 				});
// 			}else{
// 				console.log("CZLoadBasicModel error 1");
// 			}
// 		},
// 		error:function(e){
// 			console.log(e);
// 		}
// 	});
// }

function CZloadModel(urn, transform){
	viewer.loadModel(urn, { globalOffset : globalOffset, placementTransform: transformFormatMatrix(transform)},function(){
		loadedModel = viewer.model;
	});
}

function CZloadReferenceModel(urn){
	viewer.loadModel(urn, { globalOffset : globalOffset });
}

function CZLoadModelWith(data, callback){
	var dataTemp = data;
	console.log(data);
	if (dataTemp.para.Uheight) {
		dataTemp.tz = dataTemp.tz - (parseInt(dataTemp.para.Uheight) - 1) * 0.1458333;
	}
	var transM4 = transformFormatMatrix(dataTemp);
	if(data.superTrans) {
		var dataSuperTrans = dataTemp.superTrans;
		var superTransM4 = new THREE.Matrix4();
		superTransM4.set(
			dataSuperTrans[0],dataSuperTrans[4],dataSuperTrans[8],dataSuperTrans[12],
			dataSuperTrans[1],dataSuperTrans[5],dataSuperTrans[9],dataSuperTrans[13],
			dataSuperTrans[2],dataSuperTrans[6],dataSuperTrans[10],dataSuperTrans[14],
			dataSuperTrans[3],dataSuperTrans[7],dataSuperTrans[11],dataSuperTrans[15]);
		superTransM4.multiply(transM4);
		transM4 = superTransM4;
	}
	dataTemp.dataTransM4 = transM4.elements;

	var urn = dataTemp.urn;
	if(dataTemp.urn_other !== null || dataTemp.urn_other!== undefined || dataTemp.urn_other!==''){		
		urn = dataTemp.urn_other;
	}
	console.log(urn);
	viewer.loadModel(urn, { globalOffset : globalOffset, placementTransform: transM4, data1 : dataTemp}, function(){
		var dataStore = viewer.model.myData.loadOptions.data1;
		dataStore.mid = viewer.model.id;
		callback(viewer.model, dataStore);
	});
}

function CZLoadFloor(){
	CZloadReferenceModel("./svf/floor/floor15X15/Resource/____/3D/3D.svf");
}



function transformFormatMatrix(transf){
	var m4 = new THREE.Matrix4();
	var transform = transf || defaultData();
	var translate = new THREE.Vector3(transform.tx, transform.ty, transform.tz);
	var rotation = getRotation(transform.rx, transform.ry, transform.rz);
	var scale = new THREE.Vector3(1,1,1);
	m4.compose(translate, rotation, scale);
	return m4;
}

function getRotation(rx, ry, rz) {
	var x = isNaN(rx) ? 0.0 : rx;
	var y = isNaN(ry) ? 0.0 : ry;
	var z = isNaN(rz) ? 0.0 : rz;
	var euler = new THREE.Euler(
		x * 3.14 / 180.0,
		y * 3.14 / 180.0,
		z * 3.14 / 180.0,
		'XYZ');
	var q = new THREE.Quaternion();
	q.setFromEuler(euler);
	return q;
}

function defaultData(){
	var data = {};
	data.tx = 0;
	data.ty = 0;
	data.tz = 0;
	data.rx = 0;
	data.ry = 0;
	data.rz = 0;
	return data;
}

