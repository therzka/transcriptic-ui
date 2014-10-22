Transcriptic.InstructionForm = function() {
  this.$showForm = $("button#new_instruction");
  this.$instructionForm = $("#instruction_form");
};

Transcriptic.InstructionForm.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;

    this.$showForm.on("click", this.showNewInstructionForm.bind(this));
    this.$instructionForm.on("submit", this.handleInstructionFormSubmit.bind(this));
  },
  showNewInstructionForm: function(evt) {
    Transcriptic.Workspace.clear();
    this.refreshContainerDropdown();
    this.$instructionForm.show();
  },
  refreshContainerDropdown: function() {
    var $containerDropdown = $("#containers_selector");
    $containerDropdown.empty();
    for(var c in Transcriptic.organization.containers) {
      var container = Transcriptic.organization.containers[c];
      $containerDropdown.append("<option value='" + container.containerName + "'>" + container.containerName + "</option>");
    }
  },
  handleInstructionFormSubmit: function(evt) {
    evt.preventDefault();
    
    var instructionType = this.$instructionForm.find("#_instruction_type").val();
    var containerName = this.$instructionForm.find("#containers_selector").val();
    this.controller.showInstructionTypeForm(instructionType, containerName);
    this.clearForm();
  },
  clearForm: function() {
    this.$instructionForm.find("#_instruction_type").val("");
    this.$instructionForm.hide();
  }
};