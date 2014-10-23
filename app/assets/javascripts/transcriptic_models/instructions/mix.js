Transcriptic.Instruction.Mix = function(mixData) {
  this.instructionType = "pipette";
  this.update(mixData);
};
  
Transcriptic.Instruction.Mix.prototype = {
  update: function(data) {
    this.well = data.well || this.well;
    this.speed = data.speed || this.speed;
    this.volume = data.volume || this.volume;
    this.repetitions = data.repetitions || this.repetitions;
  },
  encodeAction: function() {
    var mixes = [];
    mixes.push({well: this.well.reference(), volume: this.volume.toString() + ":microliters", speed: this.speed, repititions: this.repititions})
    return {mix: mixes};
  },
  getContainers: function() {
    return [this.well.container];
  },
  isValid: function() {
    return this.well && this.speed && this.volume && this.repetitions;
  }
};