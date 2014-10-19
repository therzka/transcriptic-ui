Transcriptic.Well = function(container, wellIndex, volume) {
  this.container = container;
  this.wellIndex = wellIndex;
  this.volume = volume;
};

Transcriptic.Well.prototype = {
  reference: function() {
    return this.container.containerName + "/" + this.wellIndex;
  }
};