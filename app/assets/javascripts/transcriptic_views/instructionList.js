Transcriptic.InstructionList = function() {
  this.$instructionList = $("#instruction_list");
};

Transcriptic.InstructionList.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;
    this.$instructionList.on("click", ".instruction", this.handleInstructionClick.bind(this));
  },
  handleInstructionClick: function(evt) {
    evt.preventDefault();
    var instructionIndex = $(evt.currentTarget).data("index");
    this.controller.showInstruction(instructionIndex)
  },
  refresh: function() {
    this.$instructionList.empty();
    var instructions = Transcriptic.organization.currentProject.currentRun.instructions;
    for(var c in instructions) {
      var instruction = instructions[c];
      this.$instructionList.append("<p><a href='#' class='instruction' data-index='" + c + "'>" + instruction.instructionType + "</a></p>");
    }
  }
};