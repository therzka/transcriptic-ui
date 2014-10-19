Transcriptic.ContainerController = function(containerForm, containerList) {
  this.containerForm = containerForm;
  this.containerList = containerList;
  this.containerForm.bindEventListeners(this);
};

Transcriptic.ContainerController.prototype = {
  createContainer: function(containerData) {
    Transcriptic.organization.addContainer(new Transcriptic.Container(containerData));
    this.containerList.refresh();
  }
};