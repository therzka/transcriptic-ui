Transcriptic.Instruction.Transfer = function(transferData) {
  this.instructionType = "Pipette";
  this.from = transferData.from;
  this.to = transferData.to;
  this.volume = transferData.volume;
};

Transcriptic.Instruction.Transfer.prototype = {
  encodeAction: function() {
    return {transfer: [{from: this.from.reference(), to: this.to.reference(), volume: this.volume.toString() + ":microliter"}]};
  },
  toString: function() {
    return this.instructionType + "(transfer) " + this.volume + "ul from " + this.from.reference() + " to " + this.to.reference();
  },
  getContainers: function() {
    return [this.from.container, this.to.container];
  }
};