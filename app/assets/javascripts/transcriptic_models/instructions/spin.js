Transcriptic.Instruction.Spin = function(spinData) {
  this.container = spinData.container;
  this.speed = spinData.speed;
  this.duration = spinData.duration;
};

Transcriptic.Instruction.Spin.prototype = {
  encodeAction: function() {
    return {op: spin, object: this.container, speed: this.speed, duration: this.duration};
  },
  getContainers: function() {
    return [this.container];
  }
};