Transcriptic.Instruction.Distribute = function(distributeData) {
  this.instructionType = "pipette";
  this.update(distributeData);
};
  
Transcriptic.Instruction.Distribute.prototype = {
  update: function(data) {
    this.from = data.from || this.from;
    this.to = data.to || this.to || [];
    this.volume = data.volume || this.volume;
  },
  addTo: function(well) {
    this.to.push(well);
  },
  encodeAction: function() {
    var toWells = [];
    for (var w in this.to) {
      toWells.push({well: this.to[w].reference(), volume: this.volume.toString() + ":microliter"});
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