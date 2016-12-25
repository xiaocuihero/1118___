//hide and show extension
		var selhide;

		function hide0(model,dbId){
			// console.log("hide0");
			hideNode(model, dbId, nodeOff=false);
		}

		function hide(){
			var model = selhide.model;
			var nodeId = selhide.dbIdArray[0];		
			hideNode(model, nodeId, nodeOff=false);
		}

		function hideNode(model, dbIds, nodeOff=false) {
			return new Promise((resolve, reject)=> {
				dbIds = Array.isArray(dbIds) ? dbIds : [dbIds];
				model.getObjectTree((instanceTree)=> {
					var vm = new Autodesk.Viewing.Private.VisibilityManager(
						viewer.impl,
						model);
					dbIds.forEach((dbId)=> {
						var node=dbId;
						vm.hide(node);
						vm.setNodeOff(node, nodeOff);
					});
					return resolve();
				});
			});
		}

		function show(){
			var model = selhide.model;
			var nodeId = selhide.dbIdArray[0];		
			showNode(model, nodeId);
		}

		function showNode (model, dbIds) {
			return new Promise((resolve, reject)=> {
				dbIds = Array.isArray(dbIds) ? dbIds : [dbIds];
				model.getObjectTree((instanceTree)=> {
					var vm = new Autodesk.Viewing.Private.VisibilityManager(
						viewer.impl,
						viewer.model);
					dbIds.forEach((dbId)=> {
						var node=dbId;
						vm.setNodeOff(node, false);
						vm.show(node);
					});
					return resolve();
				});
			});
		}	