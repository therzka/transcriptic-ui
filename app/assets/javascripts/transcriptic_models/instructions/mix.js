Transcriptic.Instruction.Mix = function(mixData) {
  this.well = mixData.well;
  this.instructionType = "Pipette";
  this.speed = mixData.speed;
  this.volume = mixData.volume;
  this.repetitions = mixData.repetitions;
};
  
Transcriptic.Instruction.Mix.prototype = {
  addTo: function(well) {
    this.to.push(well);
  },

  encodeAction: function() {
    var mixes = [];
    mixes.push({well: this.well.reference(), volume: this.volume.toString() + ":microliter", speed: this.speed, repititions: this.repititions})
    return {mix: mixes};
  },
  getContainers: function() {
    return [this.well.container];
  },
  isValid: function() {
    return this.well && this.speed && this.volume && this.repetitions;
  }
};