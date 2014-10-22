Transcriptic.InstructionEditor.UnsealController = function(instruction, unsealView) {
  this.unsealView = unsealView;
  this.instruction = instruction;

  this.render();
  this.unsealView.bindEventListeners(this);
};

Transcriptic.InstructionEditor.UnsealController.prototype = {
  render: function() {
    this.unsealView.render(this.instruction);
  },
  updateInstruction: function(instructionData) {
    this.instruction.update(instructionData);
  }
};