Transcriptic.Instruction.Cover = function(coverData) {
  this.update(coverdata);
};

Transcriptic.Instruction.Cover.prototype = {
  update: function(data) {
    this.container = data.container || this.container;
    this.lid = data.lid || this.lid || "standard";
  },
  encodeAction: function() {
    return {op: "cover", object: this.container, lid: this.lid};
  },
  getContainers: function() {
    return [this.container];
  },
  isValid: function() {
    return this.container && this.lid;
  },
  toString: function() {
    return "Cover " + (this.container ? this.container.toString() + " (" + this.lid + ")" : "");
  }
};