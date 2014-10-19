Transcriptic.InstructionController = function() {
  this.setupForms();
  this.bindEventListeners();
};

Transcriptic.InstructionController.prototype = {
  setupForms: function() {
    this.instructionForm = new Transcriptic.InstructionForm();
    this.instructionList = new Transcriptic.InstructionList();
    this.distributeInstructionForm = new Transcriptic.PipetteInstructionForm("distribute");
    this.transferInstructionForm = new Transcriptic.PipetteInstructionForm("transfer");
  },
  bindEventListeners: function() {
    this.instructionForm.bindEventListeners(this);
    this.instructionList.bindEventListeners(this);
    this.distributeInstructionForm.bindEventListeners(this);
    this.transferInstructionForm.bindEventListeners(this);
  },
  showInstructionTypeForm: function(instructionType, containerName) {
    switch(instructionType) {
      case "distribute":
        this.distributeInstructionForm.show(containerName);
        break;
      case "transfer":
        this.transferInstructionForm.show(containerName);
        break;
    }
  },
  createInstruction: function(instructionData) {
    var instruction = Transcriptic.Instruction.Factory.create(instructionData.type, instructionData);
    Transcriptic.organization.addInstructionToCurrentRun(instruction);
    this.instructionList.refresh();
  }
};