Transcriptic.ContainerList.ContainerListWidget = function(containerListSelector) {
  var containerList = new Transcriptic.Tree.TreeWidget(containerListSelector);
  return new Transcriptic.ContainerList.ContainerListController(containerList);
}