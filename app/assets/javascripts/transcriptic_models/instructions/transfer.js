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
    if(this.isValid()) {
      return this.instructionType + " (transfer) " + this.volume + "ul from " + this.from.reference() + " to " + this.to.reference();
    }
    else {
      return this.instructionType + " (transfer)"
    }
  },
  getContainers: function() {
    return [this.from.container, this.to.container];
  },
  isValid: function() {
    return this.from && this.to && this.volume;
  }
};