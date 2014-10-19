Transcriptic.InstructionForm = function(showFormSelector, formSelector) {
  this.$showForm = $(showFormSelector);
  this.$instructionForm = $(formSelector);
};

Transcriptic.InstructionForm.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;

    this.$showForm.on("click", this.showNewInstructionForm.bind(this));
    this.$instructionForm.on("submit", this.handleInstructionFormSubmit.bind(this));
  },
  showNewInstructionForm: function(evt) {
    Transcriptic.Workspace.clear();
    this.$instructionForm.show();
  },
  handleInstructionFormSubmit: function(evt) {
    evt.preventDefault();
    
    var instructionType = this.$instructionForm.find("#_instruction_type").val();
    this.controller.createInstruction(instructionType);
    this.clearForm();
  },
  clearForm: function() {
    this.$instructionForm.find("#_instruction_type").val("");
    this.$instructionForm.hide();
  }
};