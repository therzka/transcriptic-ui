Transcriptic.Instruction.Distribute = function(distributeData) {
  this.container = distributeData.container;
  this.instructionType = "Pipette";
  this.from = distributeData.from;
  this.to = distributeData.to;
  this.volume = distributeData.volume;
};
  
Transcriptic.Instruction.Distribute.prototype = {
  addTo: function(well) {
    this.to.push(well);
  },
  encodeAction: function() {
    var toWells = [];
    for (var w in this.to) {
      toWells.push({well: this.to[w].reference(), volume: this.to[w].volume.toString() + ":microliter"});
    }
    return {distribute: {from: this.from.reference(), to: toWells}};
  },
  toString: function() {
    return this.instructionType + "(distribute) " + this.volume + "ul from " + this.from.reference() + " to " + this.to[0].reference();
  }
};