var	globalOffset = {x: 0, y: 0, z: 0};
var loadedModel = null;
function CZloadModel(urn, transform){
	viewer.loadModel(urn, { globalOffset : globalOffset, placementTransform: transformFormatMatrix(transform)},function(){
		loadedModel = viewer.model;
	});
}

function CZloadReferenceModel(url){
	viewer.loadModel(urn, { globalOffset : globalOffset });
}

function CZLoadModelWith(data, callback){
	viewer.loadModel(data.urn, { globalOffset : globalOffset, placementTransform: transformFormatMatrix(data), infoId : data.infoId},function(){
		callback(viewer.model, viewer.model.myData.loadOptions.infoId);
	});
}

/*
	callback : block function, paramater is loaded model.
	para : 
		type 		: 	not null;
						model type;
							{"room","tower","cabinet","frame","slot"}
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
	$.ajax({
		url:"./php/select.php",
		type:"POST",
		data: para,
		dataType:"JSON",
		success:function(data){
			if (data.length > 0){
				//para ? FIXIT...
				var dataTemp = data[0];
				dataTemp.infoId = para.infoId;
				CZLoadModelWith(dataTemp, function(model, infoId){
					callback(model, infoId);
				});
			}else{
				console.log("CZLoad error 1");
			}
		},
		error:function(e){
			console.log(e);
		}
	})
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

