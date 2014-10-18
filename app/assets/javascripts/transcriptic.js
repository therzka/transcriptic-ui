var Transcriptic = {};

$(document).ready(function() {
  new Transcriptic.OrganizationInitializer();
  new Transcriptic.ContainerFormWidget("button#new_container", "#container_form");
});