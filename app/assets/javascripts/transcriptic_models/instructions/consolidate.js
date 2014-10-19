Transcriptic.Instruction.Consolidate = function(consolidateData) {
  this.container = consolidateData.container;
  this.instructionType = "Pipette";
  this.from = consolidateData.from;
  this.to = consolidateData.to;
  this.volume = consolidateData.volume;
};
  
Transcriptic.Instruction.Consolidate.prototype = {
  addTo: function(well) {
    this.to.push(well);
  },

  encodeAction: function() {
    var fromWells = [];
    for (var w in this.from) {
      fromWells.push({well: this.from[w].reference(), volume: this.from[w].volume});
    }
    return {consolidate: {to: this.from.reference(), from: fromWells}};
  }
};