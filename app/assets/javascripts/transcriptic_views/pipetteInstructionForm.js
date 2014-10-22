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
      fromContainer: this.$form.find(".from_container").val(),
      fromWell: parseInt(this.$form.find(".from_well").val(), 10),
      toContainer: this.$form.find(".to_container").val(),
      toWell: parseInt(this.$form.find(".to_well").val(), 10),
      volume: parseInt(this.$form.find(".volume").val(), 10)
    };
    this.controller.createInstruction(instructionData);
    this.clearForm();
  },
  clearForm: function() {
    this.$form.find(".from_container").val("");
    this.$form.find(".from_well").val("");
    this.$form.find(".to_container").val("");
    this.$form.find(".to_well").val("");
    this.$form.find(".volume").val("");
    this.$form.hide();
  }
};