var Transcriptic = {};
Transcriptic.Instruction = {};
Transcriptic.InstructionList = {};
Transcriptic.InstructionForm = {};
Transcriptic.InstructionEditor = {};
Transcriptic.PlateGenerator = {};

$(document).ready(function() {
  new Transcriptic.OrganizationInitializer();
  new Transcriptic.ContainerList.ContainerListWidget("#container_list");
  var profileList = new Transcriptic.ProfileList.ProfileListWidget("#profile_list");
  var instructionList = new Transcriptic.InstructionList.InstructionListWidget("#instruction_list");
  var instructionForm = new Transcriptic.InstructionForm.InstructionFormWidget("#new_instruction_btn");
  new Transcriptic.SubmitFormWidget();

  profileList.registerInstructionList(instructionList);
  instructionForm.registerInstructionList(instructionList);

  TestData.bindEventListeners();
});