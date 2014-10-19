Transcriptic.ContainerController = function(containerForm, containerList) {
  this.containerForm = new Transcriptic.ContainerForm();
  this.containerList = new Transcriptic.ContainerList();
  this.containerForm.bindEventListeners(this);
};

Transcriptic.ContainerController.prototype = {
  createContainer: function(containerData) {
    Transcriptic.organization.addContainer(new Transcriptic.Container(containerData));
    this.containerList.refresh();
  }
};