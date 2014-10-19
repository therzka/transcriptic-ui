Transcriptic.Instruction.Mix = function(mixData) {
  this.well = mixData.well
  this.instructionType = "Pipette"
  this.speed = mixData.speed
  this.volume = mixData.volume
  this.repititions = mixData.repititions
};
  
Transcriptic.Instruction.Mix.prototype = {
  addTo: function(well) {
    this.to.push(well);
  },

  encodeAction: function() {
    var mixes = [];
    mixes.push({well: this.well.reference(), volume: this.volume, speed: this.speed, repititions:this.repititions,})
    return {mix: mixes};
  }
};