var models = [];
var infos = [];
var siteId = 1;
CZLoadFloor();
$.ajax({
	url:"./php/selectInfoLevelOne.php",
	type:"POST",
	data: {"siteId": siteId},
	dataType:"JSON",
	success:function(datas){
		// console.log(1);
		var rooms = [];
		var towers = [];
		var derricks=[];
		var antennas = [];
		for(var i in datas){
			if(datas[i].type == "room"){
				rooms.push(datas[i]);
			}else if(datas[i].type == "tower"){
				towers.push(datas[i]);						
			}else if(datas[i].type == "derrick"){
				derricks.push(datas[i]);
			}else if(datas[i].type == "antenna"){
				antennas.push(datas[i]);
			}
		}
		render(rooms, towers, derricks, antennas);
	}
});


function render(rooms, towers, derricks, antennas){
	for(var i in rooms){
		var data = rooms[i];
		data.pos_index = parseInt(i) + 1;
		CZLoad(data, function(modelr, datar){
			infos.push(datar);	 				
			// models.push(modelr);
		});
	}
	//Tower
	for(var i in towers){
		var dataT = towers[i];
		CZLoad(dataT, function(modelt, datat){
			infos.push(datat);
			// models.push(modelt);
			//Derrick
			// dfor:
			for(var j in derricks){
				var dataD = derricks[j];
				if(datat.para.infoId == dataD.superInfoId){
					dataD.superTrans = datat.dataTransM4;
					CZLoad(dataD, function(modeld, datad){		 						
						infos.push(datad);
						// models.push(modeld);
						// Antenna
						// afor:
						for(var k in antennas){
							var dataA = antennas[k];
							if(datad.para.infoId == dataA.superInfoId){
								dataA.superTrans = datad.dataTransM4;
								console.log(dataA);
								CZLoad(dataA, function(modela, dataa){
									infos.push(dataa);
									// models.push(modela);
								});
								// continue afor;
							}
							// console.log(1);
						}
						// console.log(datad);
					});
					// continue dfor;		
				}
			}			
		});
	}	 		 		
} 