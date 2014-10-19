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
      instructiontype = this.instructions[i].instructionType;
      actions = this.instructions[i].actions
      finalObj["instructions"].push({
      	op: instructiontype,
      	groups: []
      })
      for (var a in actions){
      	finalObj[instructions][groups].push({
      		
      	})
      }
  	}
    return JSON.stringify(finalObj, null, '\t')
  }
};