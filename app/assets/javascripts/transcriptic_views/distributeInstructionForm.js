Transcriptic.DistributeInstructionForm = function() {
  this.$form = $("#distribute_instruction_form");
};

Transcriptic.DistributeInstructionForm.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;
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
  }
};