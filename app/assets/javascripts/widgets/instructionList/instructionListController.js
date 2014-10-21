Transcriptic.InstructionList.InstructionListController = function(instructionList) {
  this.instructionList = instructionList;
  this.render(Transcriptic.organization.currentProject.currentRun);
};

Transcriptic.InstructionList.InstructionListController.prototype = {
  render: function(run) {
    var instructionData = Transcriptic.InstructionList.InstructionParser.parse(run.instructions);
    console.log(instructionData);
  }
};