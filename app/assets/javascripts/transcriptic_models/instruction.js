Transcriptic.Instruction = function(instructionType) {
  this.instructionType = instructionType;
  this.actions = [];
};

Transcriptic.Instruction.prototype = {
  addAction: function(action) {
    this.actions.push(action);
  }
};