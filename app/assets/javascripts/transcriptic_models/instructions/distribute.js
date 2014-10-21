Transcriptic.Instruction.Distribute = function(distributeData) {
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
    if(this.isValid()) {
      return this.instructionType + " (distribute) " + this.volume + "ul from " + this.from.reference() + " to " + this.to[0].reference();
    }
    else {
      return this.instructionType + " (distribute)"
    }
  },
  getContainers: function() {
    var toContainers = [];
    for(var i in this.to) {
      toContainers.push(this.to[i].container);
    }
    toContainers.push(this.from.container);
    return toContainers;
  },
  isValid: function() {
    return this.from && this.to && this.volume;
  }
};