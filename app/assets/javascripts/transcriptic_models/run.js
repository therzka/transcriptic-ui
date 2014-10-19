Transcriptic.Run = function(title) {
  this.title = title || "My Run";
  this.instructions = [];
};

Transcriptic.Run.prototype = {
  addInstruction: function(instruction) {
    this.instructions.push(instruction);
  },
  encodeInstructions: function(){
    finalObj = {instructions:[]};

    for (var i in this.instructions){
      instructiontype = this.instructions[c].instructionType;
      actions = this.instructions[c].actions
      finalObj["instructions"].push({
      	op: instuctiontype,
      	groups: []
      })
  	}
    return JSON.stringify(finalObj, null, '\t')
  }
};