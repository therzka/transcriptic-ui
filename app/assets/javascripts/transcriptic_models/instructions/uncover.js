Transcriptic.Instruction.Uncover = function(uncoverData) {
  this.update(uncoverData);
};

Transcriptic.Instruction.Uncover.prototype = {
  update: function(data) {
    this.container = data.container || this.container;
  },
  encodeAction: function() {
    return {op: uncover, object: this.container};
  },
  getContainers: function() {
    return [this.container];
  },
  isValid: function() {
    return this.container;
  },
  toString: function() {
    return "Uncover " + (this.container ? this.container.toString() : "");
  }
};