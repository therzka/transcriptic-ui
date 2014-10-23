Transcriptic.Instruction.Transfer = function(transferData) {
  this.instructionType = "pipette";
  this.update(transferData);
};

Transcriptic.Instruction.Transfer.prototype = {
  update: function(data) {
    this.from = data.from || this.from;
    this.to = data.to || this.to;
    this.volume = data.volume || this.volume;
  },
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