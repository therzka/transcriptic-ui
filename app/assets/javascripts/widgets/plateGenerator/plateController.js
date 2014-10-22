Transcriptic.PlateGenerator.PlateController = function(plateView, container, multiSelect) {
  this.plateView = plateView;
  this.container = container;

  plateView.generatePlate(container.containerDimensions[0], container.containerDimensions[1]);
  
  if(multiSelect) {
    plateView.setDragSelectable();
  }
  else {
    plateView.setSingleSelectable();
  }
};

Transcriptic.PlateGenerator.PlateController.prototype = {
  getSelectedWells: function() {
    return this.plateView.getSelectedWells();
  }
};