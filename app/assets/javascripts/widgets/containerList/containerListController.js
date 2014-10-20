Transcriptic.ContainerList.ContainerListController = function(containerList) {
  this.containerList = containerList;
  this.refreshList();
};

Transcriptic.ContainerList.ContainerListController.prototype = {
  refreshList: function() {
    var listData = Transcriptic.ContainerList.ContainerParser.parse(Transcriptic.organization.containers, this);
    this.containerList.renderTree(listData);
  },
  handleNewContainerClick: function(evt) {
    TestData.generateTestContainer();
    this.refreshList();
  }
};