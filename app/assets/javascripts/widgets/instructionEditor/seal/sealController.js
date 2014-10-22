Transcriptic.InstructionEditor.SealController = function(instruction, sealView) {
  this.sealView = sealView;
  this.instruction = instruction;

  this.render();
  this.sealView.bindEventListeners(this);
};

Transcriptic.InstructionEditor.SealController.prototype = {
  render: function() {
    this.sealView.render(this.instruction);
  },
  updateInstruction: function(instructionData) {
    this.instruction.update(instructionData);
  }
};