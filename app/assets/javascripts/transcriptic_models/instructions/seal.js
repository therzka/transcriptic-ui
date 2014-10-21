Transcriptic.Instruction.Seal = function(sealData) {
  this.container = sealData.container;
};

Transcriptic.Instruction.Seal.prototype = {
  encodeAction: function() {
    return {op: "seal", object: this.container.containerName};
  },
  getContainers: function() {
    return [this.container];
  },
  isValid: function() {
    return this.container;
  }
};