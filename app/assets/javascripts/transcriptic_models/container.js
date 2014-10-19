Transcriptic.Container = function(containerData) {
  this.containerName = containerData.containerName;
  this.containerType = containerData.containerType;
  this.storage = containerData.storage;
  this.containerID = containerData.containerID;
  
  this.containerDimensions = this.getContainerDimensions(this.containerType);
  this.wells = [];

  this.generateWells();
};

Transcriptic.Container.prototype = {
  generateWells: function() {
    var wellVolume = this.getWellVolume(this.containerType);
    var numWells = this.containerDimensions[0] * this.containerDimensions[1];
    for(var index = 0; index < numWells; index++) {
      this.wells.push(new Transcriptic.Well(this, index, wellVolume));
    }
  },
  getWellVolume: function(containerType) {
    switch(containerType) {
      case "96-pcr":
      case "96-flat":
      case "96-flat-uv":
        return 360;
        break;
      case "96-deep":
        return 2000;
        break;
      case "384-pcr":
        return 50;
        break;
      case "384-flat", "384-flat-uv":
        return 112;
        break; 
    }
  },
  getContainerDimensions: function(containerType) {
    if(/.*96.*/.test(containerType)) {
      return [8, 12];
    }
    else if(/.*384.*/.test(containerType)) {
      return [16, 24];
    }
  }

};