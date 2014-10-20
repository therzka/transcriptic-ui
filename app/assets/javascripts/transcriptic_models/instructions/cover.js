Transcriptic.Instruction.Cover = function(coverData) {
  this.container = coverData.container;
  this.lid = coverData.lid || "standard";
};

Transcriptic.Instruction.Cover.prototype = {
  encodeAction: function() {
    return {op: cover, object: this.container, lid: this.lid};
  },
  getContainers: function() {
    return [this.container];
  }
};