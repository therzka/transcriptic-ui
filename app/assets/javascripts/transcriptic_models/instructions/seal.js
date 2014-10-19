Transcriptic.Instruction.Seal = function(sealData) {
  this.container = sealData.container;
};

Transcriptic.Instruction.Seal.prototype = {
  encodeAction: function() {
    return {op: seal, object: this.container};
  }
};