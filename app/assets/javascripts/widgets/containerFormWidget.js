Transcriptic.ContainerFormWidget = function(showFormSelector, formSelector) {
  var containerFormView = new Transcriptic.ContainerForm(showFormSelector, formSelector);
  new Transcriptic.ContainerController(containerFormView);
}