Transcriptic.InstructionForm.InstructionFormWidget = function(newInstructionBtnSelector) {
  var instructionForm = new Transcriptic.InstructionForm.InstructionFormView(newInstructionBtnSelector);
  return new Transcriptic.InstructionForm.InstructionFormController(instructionForm);
}