Transcriptic.Instruction.Distribute = function(container, from, volume) {
  this.container = container;
  this.instructionType = "pipette";
  this.from = from;
  this.to = [];
  this.volume = volume;
};

Transcriptic.Instruction.Distribute.prototype = {
  addTo: function(well) {
    this.to.push(well);
  },
  encodeAction: function() {
    var toWells = [];
    for (var w in this.to) {
      toWells.push({well: w.reference(), volume: this.volume});
    }
    return {distribute: {from: this.from, to: toWells}};
  }
};