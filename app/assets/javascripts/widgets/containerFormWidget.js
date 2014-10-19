Transcriptic.ContainerFormWidget = function(showFormSelector, formSelector, listSelector) {
  var containerFormView = new Transcriptic.ContainerForm(showFormSelector, formSelector);
  var containerListView = new Transcriptic.ContainerList(listSelector);
  new Transcriptic.ContainerController(containerFormView, containerListView);
}