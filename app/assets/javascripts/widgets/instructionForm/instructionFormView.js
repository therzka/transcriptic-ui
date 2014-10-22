Transcriptic.InstructionForm.InstructionFormView = function(newInstructionBtnSelector) {
  this.$modal = $('#instructionModal');
  this.$choices = this.$modal.find($(".instruction_type"));
  this.$newInstructionBtn = $(newInstructionBtnSelector);
};

Transcriptic.InstructionForm.InstructionFormView.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;
    this.$newInstructionBtn.on("click", this.show.bind(this));
    this.$choices.on("click", this.handleInstructionChoice.bind(this));
  },
  show: function() {
    this.$modal.modal('show');
  },

  handleInstructionChoice: function(e){
    var $choice = $(e.currentTarget ).data("instruction")
    var instructionData = {
      instructionType:  $choice
    }

    this.handleFormSubmit(instructionData)
  },

  handleFormSubmit: function(instructionData) {
    this.controller.createInstruction(instructionData);
    this.$modal.modal('hide');
  }
};