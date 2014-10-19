Transcriptic.ContainerForm = function() {
  this.$showFormButton = $("button#new_container");
  this.$containerForm = $("#container_form");
};

Transcriptic.ContainerForm.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;

    this.$showFormButton.on("click", this.showNewContainerForm.bind(this));
    this.$containerForm.on("submit", this.handleContainerFormSubmit.bind(this));
  },
  showNewContainerForm: function(evt) {
    Transcriptic.Workspace.clear();
    this.$containerForm.show();
  },
  handleContainerFormSubmit: function(evt) {
    evt.preventDefault();
    
    var containerData = {
      containerName:  this.$containerForm.find("#container_name").val(),
      containerID:    this.$containerForm.find("#container_id").val(),
      containerType:  this.$containerForm.find("#_container_type").val(),
      storage:        this.$containerForm.find("#_storage").val()
    }

    this.controller.createContainer(containerData);
    this.$containerForm.hide();
    this.clearForm();
  },
  clearForm: function() {
    this.$containerForm.find("#container_name").val("");
    this.$containerForm.find("#container_id").val("");
    this.$containerForm.find("#_container_type").val("");
    this.$containerForm.find("#_storage").val("");
    this.$containerForm.hide();
  }
};