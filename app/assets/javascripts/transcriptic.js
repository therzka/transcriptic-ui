var Transcriptic = {};
Transcriptic.Instruction = {};

$(document).ready(function() {
  new Transcriptic.OrganizationInitializer();
  new Transcriptic.ContainerList.ContainerListWidget("#container_list");
  new Transcriptic.ProfileList.ProfileListWidget("#profile_list");
  new Transcriptic.InstructionFormWidget();
  new Transcriptic.SubmitFormWidget();

  TestData.bindEventListeners();
});