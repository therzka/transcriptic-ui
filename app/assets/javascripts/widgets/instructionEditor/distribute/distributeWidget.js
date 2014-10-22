Transcriptic.InstructionEditor.DistributeWidget = function(instruction, $instructionAccordion, $saveBtn) {
  var distributeForm = new Transcriptic.InstructionEditor.DistributeForm($instructionAccordion, $saveBtn);
  return new Transcriptic.InstructionEditor.DistributeController(instruction, distributeForm);
}