Transcriptic.ContainerController = function(containerForm) {
  this.containerForm = containerForm;
  this.containerForm.bindEventListeners(this);
};

Transcriptic.ContainerController.prototype = {
  createContainer: function(containerName, containerID, containerType, storage) {
    console.log(containerName);
  }
};