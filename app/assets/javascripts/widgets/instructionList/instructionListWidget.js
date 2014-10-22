Transcriptic.InstructionList.InstructionListWidget = function(instructionListSelector) {
  var instructionList = new Transcriptic.InstructionList.InstructionListView(instructionListSelector);
  return new Transcriptic.InstructionList.InstructionListController(instructionList);
}