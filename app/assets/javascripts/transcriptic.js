var Transcriptic = {};
Transcriptic.Instruction = {};

$(document).ready(function() {
  new Transcriptic.OrganizationInitializer();
  new Transcriptic.ContainerFormWidget();
  new Transcriptic.InstructionFormWidget();
  new Transcriptic.SubmitFormWidget();
});