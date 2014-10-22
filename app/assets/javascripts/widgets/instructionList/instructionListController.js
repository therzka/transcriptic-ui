Transcriptic.InstructionList.InstructionListController = function(instructionList) {
  this.instructionWidgets = [];
  this.instructionList = instructionList;
  this.render(Transcriptic.organization.currentProject.currentRun);
};

Transcriptic.InstructionList.InstructionListController.prototype = {
  render: function(run) {
    var instructionData = Transcriptic.InstructionList.InstructionParser.parse(run.instructions);
    this.instructionList.render(instructionData);
    this.createInstructionWidgets(run.instructions);
  },
  createInstructionWidgets: function(instructions) {
    for(var i in instructions) {
      var instruction = instructions[i];

      var $instructionAccordion = this.instructionList.getInstructionAccordion(i);
      var $instructionContainer = $instructionAccordion.find(".instruction_widget");
      var $saveBtn = $instructionAccordion.find(".save");

      var instructionWidget = Transcriptic.InstructionEditor.InstructionEditorWidget(instruction, $instructionContainer, $saveBtn);
      this.instructionWidgets.push(instructionWidget)
    }
  }
};