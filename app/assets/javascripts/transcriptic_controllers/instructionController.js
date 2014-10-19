Transcriptic.InstructionController = function(instructionForm, instructionList) {
  this.instructionForm = instructionForm;
  this.instructionList = instructionList;
  this.instructionForm.bindEventListeners(this);
};

Transcriptic.InstructionController.prototype = {
  createInstruction: function(instructionType) {
    var instruction = new Transcriptic.Instruction(instructionType);
    Transcriptic.organization.currentProject.currentRun.addInstruction(instruction);
    this.instructionList.refresh();
  }
};