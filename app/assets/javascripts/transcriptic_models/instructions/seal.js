Transcriptic.Instruction.Seal = function(sealData) {
  this.update(sealData);
};

Transcriptic.Instruction.Seal.prototype = {
  update: function(data) {
    this.container = data.container || this.container;
  },
  encodeAction: function() {
    return {op: "seal", object: this.container.containerName};
  },
  getContainers: function() {
    return [this.container];
  },
  isValid: function() {
    return this.container;
  },
  toString: function() {
    return "Seal " + (this.container ? this.container.toString() : "");
  }
};