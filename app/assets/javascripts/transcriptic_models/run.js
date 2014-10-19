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
      actions = this.instructions[i].actions;
      instructionlist = finalObj["instructions"];
      instructionlist.push({
      	op: instructiontype,
      	groups: []
      })
      for (var ins in instructionlist) {
        if (finalObj["instructions"][ins]["op"] == instructiontype) {	
          for (var a in actions) {
            act = actions[a].encodeAction();
            finalObj["instructions"][ins]["groups"].push(act);
          }
        }
      }
    }
    return JSON.stringify(finalObj, null, '\t')
  }
};