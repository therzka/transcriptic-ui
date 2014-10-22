Transcriptic.Instruction.Unseal = function(unsealData) {
  this.update(unsealData);
};

Transcriptic.Instruction.Unseal.prototype = {
  update: function(data) {
    this.container = data.container || this.container;
  },
  encodeAction: function() {
    return {op: "unseal", object: this.container.containerName};
  },
  getContainers: function() {
    return [this.container];
  },
  isValid: function() {
    return this.container;
  },
  toString: function() {
    return "Unseal " + (this.container ? this.container.toString() : "");
  }
};