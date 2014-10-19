Transcriptic.InstructionList = function(instructionListSelector) {
  this.$instructionList = $(instructionListSelector);
};

Transcriptic.InstructionList.prototype = {
  refresh: function() {
    this.$instructionList.empty();
    var instructions = Transcriptic.organization.currentProject.currentRun.instructions;
    for(var c in instructions) {
      var instruction = instructions[c];
      this.$instructionList.append("<p>" + instruction.instructionType + "</p>");
    }
  }
};