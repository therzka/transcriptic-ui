Transcriptic.InstructionController = function(instructionForm, instructionList) {
  this.instructionForm = instructionForm;
  this.instructionList = instructionList;
  this.instructionForm.bindEventListeners(this);
  this.instructionList.bindEventListeners(this);
};

Transcriptic.InstructionController.prototype = {
  createInstruction: function(instructionType, containerName) {
    switch(instructionType) {
      case "distribute":
        break;
      case "transfer":
        break;
    }
  },
  showInstruction: function(index) {
    
  }
};