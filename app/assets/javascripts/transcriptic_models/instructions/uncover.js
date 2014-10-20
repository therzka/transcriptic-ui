Transcriptic.Instruction.Uncover = function(uncoverData) {
  this.container = uncoverData.container;
};

Transcriptic.Instruction.Uncover.prototype = {
  encodeAction: function() {
    return {op: uncover, object: this.container};
  },
  getContainers: function() {
    return [this.container];
  }
};