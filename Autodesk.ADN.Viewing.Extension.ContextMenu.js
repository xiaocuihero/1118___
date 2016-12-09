///////////////////////////////////////////////////////////////////////////////
// ContextMenu viewer extension
// by Philippe Leefsma, October 2014
//
///////////////////////////////////////////////////////////////////////////////
AutodeskNamespace("Autodesk.ADN.Viewing.Extension");


Autodesk.ADN.Viewing.Extension.ContextMenu = function (viewer, options) {

    Autodesk.Viewing.Extension.call(this, viewer, options);

    var _self = this;

    var _viewer = viewer;

    var _selectedId = null;

    _self.load = function () {

        Autodesk.ADN.Viewing.Extension.AdnContextMenu = function (viewer) {
            Autodesk.Viewing.Extensions.ViewerObjectContextMenu.call(this, viewer);
        };

        Autodesk.ADN.Viewing.Extension.AdnContextMenu.prototype =
          Object.create(Autodesk.Viewing.Extensions.ViewerObjectContextMenu.prototype);

        Autodesk.ADN.Viewing.Extension.AdnContextMenu.prototype.constructor =
          Autodesk.ADN.Viewing.Extension.AdnContextMenu;

        Autodesk.ADN.Viewing.Extension.AdnContextMenu.prototype.buildMenu =

          function (event, status) {

              var menu =  Autodesk.Viewing.Extensions.ViewerObjectContextMenu.prototype.buildMenu.call(
                this, event, status);

              // var menu =  [];
              // if(selhide) {
              //     if(viewer.getSelectionVisibility().hasVisible){
              //       menu.push({
              //         title : "藏起来",
              //         target: function(){
              //           hide();
              //         } 
              //       });
              //     }else{
              //       menu.push({
              //         title: "现形吧",
              //         target: function () {
              //           show();
              //         }
              //       });
              //     }
              // } else {
              //     menu.push({
              //         title : "请选中一个物体",
              //     });                  
              // }

              return menu;
          };

        _viewer.setContextMenu(
          new Autodesk.ADN.Viewing.Extension.AdnContextMenu(_viewer));

        _viewer.addEventListener(
          Autodesk.Viewing.SELECTION_CHANGED_EVENT,
          _self.onItemSelected);

        console.log('Autodesk.ADN.Viewing.Extension.ContextMenu loaded');

        return true;
    };

    _self.unload = function () {

        _viewer.setContextMenu(
          new Autodesk.Viewing.Extensions.ViewerObjectContextMenu(viewer)
        );

        _viewer.removeEventListener(
          Autodesk.Viewing.SELECTION_CHANGED_EVENT,
          _self.onItemSelected);

        console.log('Autodesk.ADN.Viewing.Extension.ContextMenu unloaded');

        return true;
    };

    ///////////////////////////////////////////////////////////////////////////
    // item selected callback
    //
    ///////////////////////////////////////////////////////////////////////////
    _self.onItemSelected = function (event) {

        var dbId = event.dbIdArray[0];

        if (typeof dbId !== 'undefined') {

            _selectedId = dbId;
        }
        else  _selectedId = null;
    }
};

Autodesk.ADN.Viewing.Extension.ContextMenu.prototype =
  Object.create(Autodesk.Viewing.Extension.prototype);

Autodesk.ADN.Viewing.Extension.ContextMenu.prototype.constructor =
  Autodesk.ADN.Viewing.Extension.ContextMenu;

Autodesk.Viewing.theExtensionManager.registerExtension(
  'Autodesk.ADN.Viewing.Extension.ContextMenu',
  Autodesk.ADN.Viewing.Extension.ContextMenu);