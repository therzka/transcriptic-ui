Transcriptic.PipetteInstructionForm = function(actionType) {
  this.actionType = actionType;
  this.$form = $("#" + actionType + "_instruction_form");
};

Transcriptic.PipetteInstructionForm.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;
    this.$form.on("submit", this.handleFormSubmit.bind(this));
  },
  show: function(containerName) {
    this.$form.find(".from_container").val(containerName);
    this.refreshContainerDropdown();
    this.$form.show();
  },
  refreshContainerDropdown: function() {
    var $containerDropdown = this.$form.find(".to_container");
    $containerDropdown.empty();
    for(var c in Transcriptic.organization.containers) {
      var container = Transcriptic.organization.containers[c];
      $containerDropdown.append("<option value='" + container.containerName + "'>" + container.containerName + "</option>");
    }
  },
  handleFormSubmit: function(evt) {
    evt.preventDefault();
    
    var instructionData = {
      type: this.actionType,
      fromContainer: this.$form.find(".from_container"),
      fromWell: this.$form.find(".from_well"),
      toContainer: this.$form.find(".to_container"),
      toWell: this.$form.find(".to_well"),
      volume: this.$form.find(".volume")
    }
    this.controller.createInstruction(instructionData);
  }
};