var Transcriptic = {};

$(document).ready(function() {
  new Transcriptic.OrganizationInitializer();
  new Transcriptic.ContainerFormWidget("button#new_container", "#container_form", "#container_list");
  new Transcriptic.InstructionFormWidget("button#new_instruction", "#instruction_form", "#instruction_list");
});