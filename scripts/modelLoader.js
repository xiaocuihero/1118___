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

