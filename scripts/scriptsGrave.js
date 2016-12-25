	// function translateUpdate(){
			// var model = adjustModel;
	 	// 	var fragProxy = viewer.impl.getFragmentProxy(model, 0);
		 //    fragProxy.getAnimTransform();			
		 //    fragProxy.updateAnimTransform();	
		 //    // var position = fragProxy.position.add(model.getData().loadOptions.translate);
		 //    $("#tx").val(position.x);
		 //    $("#ty").val(position.y);
		 //    $("#tz").val(position.z);
	 	// }

	 	// console.log(rotation);
		// console.log(translation);
		// console.log(result);

		// var dataList = {z:null,c:null}
		// // viewer.loadModel(model_cabinet);
		// viewer.loadModel(model_cabinet,{placementTransform : result}, function(){
		// 	dataList.z = viewer.model;	
		// 	viewer.addEventListener (Autodesk.Viewing.GEOMETRY_LOADED_EVENT, function (event) {
		// 		if(event.model.id == dataList.z.id){
	 // 				// centerRotate(dataList.z,45);
		// 		}
	 // 		});			
		// });		
		// viewer.loadModel(model_floor,{},function(){
		// 	dataList.c = viewer.model;	
		// });

	 	// var globalOffset =  { x:0, y:0, z:0 };

	 	// var posL = [-3.5, 3, 1.5, 0, 0, 0];
	 	// var posR = [3.5, 3,1.5,0,0,0];
	 	// var posU = [5.5, -17,1.5,0,0,180];
	 	// var posD = [12.5, -17,1.5,0,0,180];
	 	// var poss = [{loc:"Left", pos:posL}, {loc:"Right", pos:posR}, {loc:"Up", pos:posU}, {loc:"Down", pos:posD}];

	 	// var dataList = [];

	 		// function getPlacementTransform(tv3, rq){
	 	// 	console.log(tv3);
	 	// 	console.log(rq);

			// var position = new THREE.Vector3(
			// 	tv3.x - center.x,
			// 	tv3.y - center.y,
			// 	tv3.z - center.z);

			// // var position = tv3;
			// console.log(position);
			// console.log(position);
			// position.add(center);
			// position = new THREE.Vector3(
			// 	position.x + center.x,
			// 	position.y + center.y,
			// 	position.z + center.z);
			// position.applyQuaternion(rq);
				
			// console.log(position);
			// var m4 = new THREE.Matrix4();
			// m4.compose(position, rq, new THREE.Vector3(1,1,1));
			// return m4;
	 	// }

	 	// function adjustInit0(placementTransform){
	 	// 	if(adjustModel != null) {
	 	// 		viewer.impl.unloadModel(adjustModel);
	 	// 		adjustModel = null;
	 	// 	}
	 	// 	var pt = placementTransform || new THREE.Matrix4();
	 	// 	globalOffset = {x: 0, y: 0, z: 0};
	 	// 	viewer.loadModel(adjustUrl, {placementTransform : pt}, function(){
			// 	adjustModel = viewer.model;	
			// });
	 	// }

	 		 	// function onLoadAdjust(event){
	 	// 	var rotateV3t = event.model.getData().loadOptions.rotate;
			// if(event.model.id == adjustModel.id && rotateV3t != null){
 		// 		centerRotate(adjustModel, rotateV3t);
 		// 		// translateUpdate();
			// }
	 	// }



	 // 	function OnSelectedChanged0(selections){
	 // 		var selection = null;
	 // 		if (selections.length){
	 // 			selection = selections[0];
	 // 		}else{
	 // 			selection = selections;
	 // 		}
	 // 		OnSelectedChanged(selection.nodeArray,selection.nodeArray.length
	 // 			,selection.dbIdArray,selection.dbIdArray.length
	 // 			,selection.fragIdsArray,selection.fragIdsArray.length,selection.model.id);
	 // 		var fragProxy = viewer.impl.getFragmentProxy(selection.model,selection.fragIdsArray[0]);

	 // 		console.log(selection.model.getData());
	 // 		var m4 = selection.model.getData().loadOptions.placementTransform;
	 // 		var pos = new THREE.Vector3();
	 // 		pos.setFromMatrixPosition(m4);

	 // 		var globaloffsetTemp = selection.model.getData().globalOffset;

		//     // console.log(pos);
		//     // console.log(globaloffsetTemp);

		//     var fragProxy = viewer.impl.getFragmentProxy(selection.model, selection.fragIdsArray);
		//     // fragProxy.position.set(1,1,1);
		//     // fragProxy.updateAnimTransform();
		//     // viewer.impl.sceneUpdated(true);
		//     console.log(fragProxy);
		// }

		// function centerRotate(model,rotateV3){

		// 	var rv3 = rotateV3 || new THREE.Vector3();

		// 	var rotateBox = model.getData().bbox;
		// 	console.log(rotateBox);
		// 	var center= new THREE.Vector3(
		// 		(rotateBox.min.x + rotateBox.max.x) / 2,
		// 		(rotateBox.min.y + rotateBox.max.y) / 2,
		// 		(rotateBox.min.z + rotateBox.max.z) / 2 )

		// 	var transform = {
		// 		translation: getTranslation(0,0,0),
		// 		rotation: getRotation(rv3.x, rv3.y, rv3.z)
		// 	};


		// 	var fragCount = model.getFragmentList().
		// 	fragments.fragId2dbId.length;

		// 	for(var fragId=0; fragId<fragCount; ++fragId){

		// 		_transformFragProxy(fragId);
		// 	}

		// 	function  _transformFragProxy(fragId){
		// 		var fragProxy = viewer.impl.getFragmentProxy(model, fragId);
		// 		console.log(fragProxy);
		// 		var translateOrigin = model.getData().loadOptions.translate || new THREE.Vector3();
		// 		fragProxy.getAnimTransform();
		// 		var position = new THREE.Vector3(
		// 			fragProxy.position.x - center.x,
		// 			fragProxy.position.y - center.y,
		// 			fragProxy.position.z - center.z);
		// 			// fragProxy.position.x + translateOrigin.x - center.x,
		// 			// fragProxy.position.y + translateOrigin.x - center.y,
		// 			// fragProxy.position.z + translateOrigin.x - center.z)
		// 		// console.log(transform);
		// 		   // fragProxy.position.center = center;
		//     	// fragProxy.getAnimTransform();	
		// 		position.applyQuaternion(transform.rotation);
		// 		position.add(center);
		// 		console.log(center);
		// 		return position;
		// 		// 				console.log(fragProxy.position);
		// 		// console.log(position);

		// 		fragProxy.position = position;


		// 		fragProxy.quaternion._x = transform.rotation.x;
		// 		fragProxy.quaternion._y = transform.rotation.y;
		// 		fragProxy.quaternion._z = transform.rotation.z;
		// 		fragProxy.quaternion._w = transform.rotation.w;
		// 		fragProxy.updateAnimTransform();

		// 	}  
		// 	viewer.impl.sceneUpdated(true);
		// }

		// function CCTransform(model){
		// 	console.log("rotate");	
		// 	var transform = {
		// 		translation: getTranslation(),
		// 		rotation: getRotation()
		// 	};

		// 	var fragCount = model.getFragmentList().fragments.fragId2dbId.length;

		// 	for(var fragId=0; fragId<fragCount; ++fragId){
		// 		_transformFragProxy(fragId);
		// 	}

		// 	function  _transformFragProxy(fragId){
		// 		var fragProxy = viewer.impl.getFragmentProxy(model, fragId);
		// 		console.log(fragProxy);
		// 		fragProxy.getAnimTransform();
		// 		fragProxy.position = transform.translation;
		// 		fragProxy.quaternion._x = transform.rotation.x;
		// 		fragProxy.quaternion._y = transform.rotation.y;
		// 		fragProxy.quaternion._z = transform.rotation.z;
		// 		fragProxy.quaternion._w = transform.rotation.w;
		// 		fragProxy.updateAnimTransform();
		// 	}  
		// 	viewer.impl.sceneUpdated(true);
		// }
//--------------level1------------------------
				 					// var superTrans = {};
		 					// superTrans.tx = datat.tx;
		 					// superTrans.ty = datat.ty;
		 					// superTrans.tz = datat.tz;
		 					// superTrans.rx = datat.rx;
		 					// superTrans.ry = datat.ry;
		 					// superTrans.rz = datat.rz;
		 					// dataD.superTrans = [superTrans];
		 					// var newM4 = new THREE.Matrix4();
		 					// newM4 = datat.dataTransM4;
		 					// dataD.superTrans = modelt.myData.loadOptions.placementTransform;
//---------------------czload------------------------------
		 							// var tempM4 = new THREE.Matrix4();
		// // for(var i = 0; i < data.superTrans.length; i++){
		// var superTransM4 = transformFormatMatrix(data.superTrans[0]);
		// var superTransM4 = data.superTrans[0];
		// tempM4.multiply(superTransM4);
		// // }
		// tempM4.multiply(transM4);
		// transM4 = tempM4;
		// // dataTemp.tx += data.superTrans.tx;
		// // dataTemp.ty += data.superTrans.ty;
		// // dataTemp.tz += data.superTrans.tz;
		// // dataTemp.rx += data.superTrans.rx;
		// // dataTemp.ry += data.superTrans.ry;
		// // dataTemp.rz += data.superTrans.rz;