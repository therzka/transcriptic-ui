Transcriptic.ContainerController = function(containerForm) {
  this.containerForm = containerForm;
  this.containerForm.bindEventListeners(this);
};

Transcriptic.ContainerController.prototype = {
  createContainer: function(containerData) {
    Transcriptic.organization.addContainer(new Transcriptic.Container(containerData));
  }
};