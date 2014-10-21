Transcriptic.InstructionList.InstructionListView = function(instructionListSelector) {
  this.$list = $(instructionListSelector);
  this.instructionTemplate = Handlebars.compile($("#instruction-template").html());
};

Transcriptic.InstructionList.InstructionListView.prototype = {
  render: function(instructions) {
    this.$list.empty();
    for(var i in instructions) {
      this.$list.append(this.instructionTemplate(instructions[i]));
    }
  }
};