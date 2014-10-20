Transcriptic.ContainerList.ContainerForm = function() {
  this.$modal = $('#containerModal');
  this.$form = this.$modal.find("#container_form");
  this.$submitButton = this.$modal.find(".submit");
};

Transcriptic.ContainerList.ContainerForm.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;
    this.$submitButton.on("click", this.handleFormSubmit.bind(this));
  },
  show: function() {
    this.$modal.modal('show');
  },
  handleFormSubmit: function() {
    var containerData = {
      containerName:  this.$form.find("#container_name").val(),
      containerID:    this.$form.find("#container_id").val(),
      containerType:  this.$form.find("#container_type").val(),
      storage:        this.$form.find("#storage").val()
    }
    this.controller.createContainer(containerData);
    this.clearForm();
    this.$modal.modal('hide');
  },
  clearForm: function() {
    this.$form.find("#container_name").val("");
    this.$form.find("#container_id").val("");
  }
};