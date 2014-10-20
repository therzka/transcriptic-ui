var Transcriptic = {};
Transcriptic.Instruction = {};

$(document).ready(function() {
  new Transcriptic.OrganizationInitializer();
  new Transcriptic.ContainerFormWidget();
  new Transcriptic.ContainerList.ContainerListWidget("#container_list");
  new Transcriptic.InstructionFormWidget();
  new Transcriptic.SubmitFormWidget();

  TestData.bindEventListeners();
});