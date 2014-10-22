Transcriptic.Instruction.Spin = function(spinData) {
  this.update(spinData);
};

Transcriptic.Instruction.Spin.prototype = {
  update: function(data) {
    this.container = data.container || this.container;
    this.speed = data.speed || this.speed;
    this.duration = data.duration || this.duration;
  },
  encodeAction: function() {
    return {op: "spin", object: this.container, speed: this.speed, duration: this.duration};
  },
  getContainers: function() {
    return [this.container];
  },
  isValid: function() {
    return this.container && this.speed && this.duration;
  }
};