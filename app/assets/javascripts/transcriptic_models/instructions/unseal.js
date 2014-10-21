Transcriptic.Instruction.Unseal = function(unsealData) {
  this.container = unsealData.container;
};

Transcriptic.Instruction.Unseal.prototype = {
  encodeAction: function() {
    return {op: unseal, object: this.container};
  },
  getContainers: function() {
    return [this.container];
  },
  isValid: function() {
    return this.container;
  }
};