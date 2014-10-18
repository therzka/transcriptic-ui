Transcriptic.ContainerForm = function(showFormSelector, formSelector) {
  this.$showForm = $(showFormSelector);
  this.$containerForm = $(formSelector);
};

Transcriptic.ContainerForm.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;

    this.$showForm.on("click", this.showNewContainerForm.bind(this));
    this.$containerForm.on("submit", this.handleContainerFormSubmit.bind(this));
  },
  showNewContainerForm: function(evt) {
    this.$containerForm.show();
  },
  handleContainerFormSubmit: function(evt) {
    evt.preventDefault();
    
    var containerName = this.$containerForm.find("#container_name").val();
    var containerID = this.$containerForm.find("#container_name").val();
    var containerType = this.$containerForm.find("#container_name").val();
    var storage = this.$containerForm.find("#container_name").val();

    this.controller.createContainer(containerName, containerID, containerType, storage)
  }
};