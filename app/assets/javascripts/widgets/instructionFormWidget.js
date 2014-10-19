Transcriptic.InstructionFormWidget = function(showFormSelector, formSelector, listSelector) {
  var instructionFormView = new Transcriptic.InstructionForm(showFormSelector, formSelector);
  var instructionListView = new Transcriptic.InstructionList(listSelector);
  new Transcriptic.InstructionController(instructionFormView, instructionListView);
}