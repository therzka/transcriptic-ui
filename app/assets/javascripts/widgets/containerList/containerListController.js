Transcriptic.ContainerList.ContainerListController = function(containerList) {
  this.containerList = containerList;
  this.containerForm = new Transcriptic.ContainerList.ContainerForm();
  this.containerForm.bindEventListeners(this);
  this.refreshList();
};

Transcriptic.ContainerList.ContainerListController.prototype = {
  refreshList: function() {
    var listData = Transcriptic.ContainerList.ContainerParser.parse(Transcriptic.organization.containers, this);
    this.containerList.renderTree(listData);
  },
  handleNewContainerClick: function(evt) {
    this.containerForm.show();
  },
  createContainer: function(containerData) {
    Transcriptic.organization.addContainer(new Transcriptic.Container(containerData));
    this.refreshList();
  }
};