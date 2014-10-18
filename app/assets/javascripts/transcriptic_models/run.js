Transcriptic.Run = function(title) {
  this.title = title || "My Run";
  this.instructions = [];
};

Transcriptic.Run.prototype = {
  addInstruction: function(instruction) {
    this.instructions.push(instruction);
  }
};