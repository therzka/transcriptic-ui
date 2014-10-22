Transcriptic.InstructionEditor.DistributeController = function(instruction, distributeView) {
  this.distributeView = distributeView;
  this.instruction = instruction;

  this.render();
  this.distributeView.bindEventListeners(this);
};

Transcriptic.InstructionEditor.DistributeController.prototype = {
  render: function() {
    this.distributeView.render(this.instruction);
  },
  updateInstruction: function(instructionData) {
    // UPDATE INSTRUCTION WITH INSTRUCTION DATA
  }
};