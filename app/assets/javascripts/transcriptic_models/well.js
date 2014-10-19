Transcriptic.Well = function(wellData) {
  this.container = wellData.container;
  this.wellIndex = wellData.wellIndex;
  this.volume = wellData.volume;
};

Transcriptic.Well.prototype = {
  reference: function() {
    return this.container.containerName + "/" + this.wellIndex;
  }
};