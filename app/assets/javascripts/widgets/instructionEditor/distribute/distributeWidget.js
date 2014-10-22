Transcriptic.InstructionEditor.DistributeWidget = function(instruction, $instructionAccordion) {
  var distributeForm = new Transcriptic.InstructionEditor.DistributeForm($instructionAccordion);
  return new Transcriptic.InstructionEditor.DistributeController(instruction, distributeForm);
}