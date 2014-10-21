var Transcriptic = {};
Transcriptic.Instruction = {};

$(document).ready(function() {
  new Transcriptic.OrganizationInitializer();
  new Transcriptic.ContainerList.ContainerListWidget("#container_list");
  var profileList = new Transcriptic.ProfileList.ProfileListWidget("#profile_list");
  var instructionList = new Transcriptic.InstructionList.InstructionListWidget("#instruction_list");
  new Transcriptic.InstructionFormWidget();
  new Transcriptic.SubmitFormWidget();

  profileList.registerInstructionList(instructionList);

  TestData.bindEventListeners();
});