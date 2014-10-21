Transcriptic.InstructionForm.InstructionFormController = function(instructionForm) {
  this.instructionForm = instructionForm;
  this.instructionForm.bindEventListeners(this);
};

Transcriptic.InstructionForm.InstructionFormController.prototype = {
  registerInstructionList: function(instructionList) {
    this.instructionList = instructionList;
  },
  handleNewInstructionClick: function(evt) {
    this.instructionForm.show();
  },
  createInstruction: function(instructionData) {
    var instruction = Transcriptic.Instruction.Factory.create(instructionData.instructionType, instructionData);
    var run = Transcriptic.organization.currentProject.currentRun;
    run.addInstruction(instruction);
    
    if(this.instructionList) {
      this.instructionList.render(run);
    }
  }
};