//toolbar extension;
		function addToolbar(){
			var viewerToolbar = viewer.getToolbar(true);
			var modelTools = viewerToolbar.getControl(
				Autodesk.Viewing.TOOLBAR.MODELTOOLSID);
			var button = createButton(
				'Autodesk.ADN.Viewing.Extension.Toolbar.lala',
				'url(doge.jpg)',
				'ModelTools button',
				function (e){
					alert("嘿!嘿!嘿!!!!!!!!");
				});
			modelTools.addControl(button, {index:2});
		}

		function deleteToolbar(){
			var viewerToolbar = viewer.getToolbar(true); 
			// viewerToolbar.removeControl("navTools");
			viewerToolbar.removeControl("modelTools"); 
			// viewerToolbar.removeControl("settingsTools"); 

			// var modelTools = viewerToolbar.getControl(Autodesk.Viewing.TOOLBAR.MODELTOOLSID);
			// modelTools.removeControl("toolbar-explodeTool");	  
			// viewer.setToolbar = null; 
		}

		function createButton(id, imgUrl, tooltip, handler) {

			var button = new Autodesk.Viewing.UI.Button(id);

			button.icon.style.backgroundImage = imgUrl;

			button.setToolTip(tooltip);

			button.onClick = handler;

			return button;
		}

		function LoadExtensionNeed(){
	 		// viewer.loadExtension('Autodesk.ADN.Viewing.Extension.TransformTool');	
	 		// viewer.loadExtension('Autodesk.ADN.Viewing.Extension.TransformTool');	
	 		// viewer.loadExtension('Autodesk.ADN.Viewing.Extension.ModelStructure');
	 		deleteToolbar();
	 		addToolbar();
	 	}