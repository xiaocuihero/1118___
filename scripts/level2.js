var myViewerDiv = document.getElementById('MyViewerDiv');
	 	var viewer = new Autodesk.Viewing.Private.GuiViewer3D(myViewerDiv);
	 	var options = {
	 		'env' : 'Local',
	 		// 'document' : './svf/building.max/building.svf'
	 	}; 	

	 	var modelRoom = null;
	 	var dbIds = [];

		Autodesk.Viewing.Initializer(options, function() {
	 		viewer.initialize ();	
	 		viewer.addEventListener (Autodesk.Viewing.GEOMETRY_LOADED_EVENT, function (event) {     
	 			viewer.loadExtension('Autodesk.ADN.Viewing.Extension.TransformTool');
	 			// deleteToolbar();
	 			if (event.model.id == modelRoom.id){
					viewer.setViewCube("[front],[top],[right]");
	 				hide0(modelRoom, dbIds);					
	 			}

	 		});	
 		});
	 
		var models = [];
		var infos = [];
		var roomId = 1;

		$.ajax({
			url:"./php/selectInfoLevelTwo.php",
			type:"POST",
			data: {"roomId": roomId},
			dataType:"JSON",
			success:function(datas){
				console.log(datas);
				var rooms = [];
				var cabinets = [];
				var frames=[];
				// var antennas = [];
				for(var i in datas){
					if(datas[i].type == "room"){
						rooms.push(datas[i]);
					}else if(datas[i].type == "cabinet"){
						cabinets.push(datas[i]);						
					}else if(datas[i].type == "frame"){
						frames.push(datas[i]);
					}
				}
				// console.log(rooms);
				// console.log(cabinets);
				// console.log(frames);
				render(rooms, cabinets, frames);
			},
			error:function(e){
				console.log(e.responseText);
			}
		});

		function render(rooms, cabinets, frames){
 			var data = rooms[0];	 			
 			data.level = "two";
 			data.pos_index = "-1";
 			CZLoad(data, function(modelr, datar){
 				// console.log(datar);
 				infos.push(datar);
 				modelRoom = modelr;
		 		var strIds = datar.hide_dbIds.split(",");
		 		if(strIds.length != null) {
		 			strIds.forEach((str)=>{
		 				dbIds.push(parseInt(str));
		 			});
		 		}
	 		});

	 		for(var i in cabinets){
	 			var dataC = cabinets[i];
	 			dataC.level = "door";
	 			CZLoad(dataC, function(modelc, datac){
	 				infos.push(datac);
	 				console.log(datac);
	 				var dataPara = datac.para;
	 				if(dataPara.urn_other !== null || dataPara.urn_other!== undefined || dataPara.urn_other!==''){
	 					console.log(233);
	 				}else{
	 					for(var k in frames){
	 						var dataF = frames[k];
	 						if(datac.para.infoId == dataF.superInfoId){
	 							dataF.superTrans = datac.dataTransM4;
	 							CZLoad(dataF, function(modelf, dataf){
	 								infos.push(dataf);
	 							})
	 						}
	 					}
	 				}
	 				
		 		});
	 		}
		}