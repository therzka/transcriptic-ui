Transcriptic.InstructionController = function() {
  this.setupForms();
  this.bindEventListeners();
};

Transcriptic.InstructionController.prototype = {
  setupForms: function() {
    this.instructionForm = new Transcriptic.InstructionForm();
    this.instructionList = new Transcriptic.InstructionList();
    this.distributeInstructionForm = new Transcriptic.DistributeInstructionForm();
    this.transferInstructionForm = new Transcriptic.TransferInstructionForm();
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
  showInstruction: function(index) {
    
  }
};