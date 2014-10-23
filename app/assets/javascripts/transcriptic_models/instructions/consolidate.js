Transcriptic.Instruction.Consolidate = function(consolidateData) {
  this.instructionType = "pipette";
  this.update(consolidateData);
};
  
Transcriptic.Instruction.Consolidate.prototype = {
  update: function(data) {
    this.from = data.from || this.from;
    this.to = data.to || this.to;
    this.volume = data.volume || this.volume;
  },
  addTo: function(well) {
    this.to.push(well);
  },
  encodeAction: function() {
    var fromWells = [];
    for (var w in this.from) {
      fromWells.push({well: this.from[w].reference(), volume: this.from[w].volume.toString() + ":microliter"});
    }
    return {consolidate: {to: this.from.reference(), from: fromWells}};
  },
  getContainers: function() {
    return [this.from.container, this.to.container];
  },
  isValid: function() {
    return this.from && this.to && this.volume;
  }
};