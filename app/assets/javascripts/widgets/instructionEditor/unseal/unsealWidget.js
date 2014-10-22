Transcriptic.InstructionEditor.UnsealWidget = function(instruction, $instructionAccordion, $saveBtn) {
  var unsealForm = new Transcriptic.InstructionEditor.UnsealForm($instructionAccordion, $saveBtn);
  return new Transcriptic.InstructionEditor.UnsealController(instruction, unsealForm);
}