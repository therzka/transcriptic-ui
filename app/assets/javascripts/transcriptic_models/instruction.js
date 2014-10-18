var Instruction = function(instructionType) {
  this.instructionType = instructionType;
  this.actions = [];
};

Instruction.prototype = {
  addAction: function(action) {
    this.actions.push(action);
  }
};