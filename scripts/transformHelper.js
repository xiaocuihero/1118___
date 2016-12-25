

		function buildTransformMatrix() {
			var t = getTranslation();
			var r = getRotation();
			var s = getScale();
			var m = new THREE.Matrix4();
			m.compose(t, r, s);
			// console.log(m);
			return m;
		}

		function buildTransformMatrixExt0(tx, ty, tz, rx, ry, rz)
		{
			var t = getTranslation(tx, ty, tz);
			var r = getRotation(rx, ry, rz);
			var s = getScale();
			var m = new THREE.Matrix4();
			m.compose(t, r, s);
			return m;
		}

		function buildTransformMatrixExt(tv3, rv3)
		{
			var s = new THREE.Vector3(1,1,1);
			var m = new THREE.Matrix4();
			m.compose(tv3, rv3, s);
			return m;
		}

		function getScale() {
			var x = 1;//parseFloat($(`#${panelId}-Sx`).val());
			var y = 1;//parseFloat($(`#${panelId}-Sy`).val());
			var z = 1;//parseFloat($(`#${panelId}-Sz`).val());

			x = isNaN(x) ? 1.0 : x;
			y = isNaN(y) ? 1.0 : y;
			z = isNaN(z) ? 1.0 : z;
			console.log("getScale："+x+"+"+y+"+"+z);
			return new THREE.Vector3(x, y, z);
		}
		function getTranslation(tx, ty, tz) {
			var x = isNaN(tx) ? 0.0 : tx;
			var y = isNaN(ty) ? 0.0 : ty;
			var z = isNaN(tz) ? 0.0 : tz;
			// console.log("getTranslation："+x+"+"+y+"+"+z);
			return new THREE.Vector3(x, y, z);
		}

		function getRotation(rx, ry, rz) {
			var x = isNaN(rx) ? 0.0 : rx;
			var y = isNaN(ry) ? 0.0 : ry;
			var z = isNaN(rz) ? 0.0 : rz;
			// console.log("getRotation："+x+"+"+y+"+"+z);
			var euler = new THREE.Euler(
				x * 3.14 / 180.0,
				y * 3.14 / 180.0,
				z * 3.14 / 180.0,
				'XYZ');
			// console.log(euler);
			var q = new THREE.Quaternion();
			// console.log(q);

			q.setFromEuler(euler);

			return q;
		}

		function OnSelectedChanged(selections){
			console.log(312);
			var selection = null;
	 		if (selections.length){
	 			selection = selections[0];
	 		}else{
	 			selection = selections;
	 		}
	 		var nodeId =  selection.nodeArray;
	 		var nodeCount =  selection.nodeArray.length;
	 		var dbId = selection.dbIdArray;
	 		var dbCount = selection.dbIdArray.length;
	 		var fragId = selection.fragIdsArray;
	 		var fragCount = selection.fragIdsArray.length;
			var modelId = selection.model.id;			
			var modelurn = selection.model.getData().urn;
		 		
	 		$("#dbId").html("dbId: " + dbId + ";___count: " + dbCount);
	 		$("#fragId").html("fragId: " + fragId + ";___count: " + fragCount);
	 		$("#modelId").html("modelId:" + modelId);
	 		$("#modelsvf").html(" : " + modelurn);
	 	}
