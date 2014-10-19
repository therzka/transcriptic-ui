Transcriptic.Instruction.Transfer = function(container, from, to, volume) {
  this.container = container;
  this.instructionType = "pipette";
  this.from = from;
  this.to = to;
  this.volume = volume;
};

Transcriptic.Instruction.Transfer.prototype = {
  encodeAction: function() {
    return {transfer: [{from: this.from.refence(), to: this.to.reference(), volume: this.volume}]};
  }
};