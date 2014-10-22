Transcriptic.InstructionEditor.SealWidget = function(instruction, $instructionAccordion, $saveBtn) {
  var sealForm = new Transcriptic.InstructionEditor.SealForm($instructionAccordion, $saveBtn);
  return new Transcriptic.InstructionEditor.SealController(instruction, sealForm);
}