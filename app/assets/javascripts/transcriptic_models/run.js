Transcriptic.Run = function(runData) {
  this.title = runData.title || "My Run";
  this.instructions = [];
};

Transcriptic.Run.prototype = {
  addInstruction: function(instruction) {
    this.instructions.push(instruction);
  },
  encodeInstructions: function(){
    finalObj = {instructions:[]};

    for (var i in this.instructions){
      var ins  = this.instructions[i];
      var type = ins.instructionType;
      var instructionList = []
      if (type){
        instructionList.push({
          op: type,
          groups:[]
        });
        for (var x in instructionList){
            instructionList[x]["groups"].push(ins.encodeAction())
        }
        finalObj["instructions"].push(instructionList)
      }
      else{
        finalObj["instructions"].push(ins.encodeAction());
      }
    }

    return JSON.stringify(finalObj, null, '\t')
  }
};