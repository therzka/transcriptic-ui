Transcriptic.InstructionEditor.TransferWidget = function(instruction, $instructionAccordion) {
  var transferForm = new Transcriptic.InstructionEditor.TransferForm($instructionAccordion);
  return new Transcriptic.InstructionEditor.TransferController(instruction, transferForm);
}