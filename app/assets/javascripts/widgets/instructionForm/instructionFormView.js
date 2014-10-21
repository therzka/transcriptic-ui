Transcriptic.InstructionForm.InstructionFormView = function(newInstructionBtnSelector) {
  this.$modal = $('#instructionModal');
  this.$form = this.$modal.find("#instruction_form");
  this.$submitButton = this.$modal.find(".submit");
  this.$newInstructionBtn = $(newInstructionBtnSelector);
};

Transcriptic.InstructionForm.InstructionFormView.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;
    this.$submitButton.on("click", this.handleFormSubmit.bind(this));
    this.$newInstructionBtn.on("click", this.show.bind(this));
  },
  show: function() {
    this.$modal.modal('show');
  },
  handleFormSubmit: function() {
    var instructionData = {
      instructionType:  this.$form.find("#instruction_type").val(),
    }
    this.controller.createInstruction(instructionData);
    this.$modal.modal('hide');
  }
};