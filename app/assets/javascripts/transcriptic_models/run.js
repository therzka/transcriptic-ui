Transcriptic.Run = function(runData) {
  this.title = runData.title || "My Run";
  this.instructions = [];
};

Transcriptic.Run.prototype = {
  addInstruction: function(instruction) {
    this.instructions.push(instruction);
  },
  encodeInstructions: function() {
    var instructions = [];

    for (var i in this.instructions) {
      var ins  = this.instructions[i];
      var type = ins.instructionType;
      var instructionList = [];

      if (type){
        instructionList.push({
          op: type,
          groups:[]
        });
        for (var x in instructionList) {
          if (instructionList[x]["op"] === type) {
            instructionList[x]["groups"].push(ins.encodeAction());
          }
          else{
            instructionList.push({
              op: type,
              groups:[]
            });
          }   
        }
      }
      else{
        instructions.push(ins.encodeAction());
      }

      for (var instruction in instructionList) {
        instructions.push(instructionList[instruction]);
      }
    }
    return instructions;
  },
  encodeRefs: function(){
    var refs = {};
    var containers = [];

    for (var i in this.instructions) {
      var instructionContainers = this.instructions[i].getContainers();
      for (var j in instructionContainers) {
        var container = instructionContainers[j];
        if (containers.indexOf(container) === -1) {
          containers.push(container)
        }
      }
    }
    for (var c in containers) {
      if (containers[c].containerID === "new") {
        refs[containers[c].containerName] = 
        {
          new: containers[c].containerType,
          store: {
            where: containers[c].storage
          }
        }
      }
      else{
        refs[containers[c].containerName] = 
        {
          id: containers[c].containerID,
          store: {
            where: containers[c].storage
          }
        }
      }
    }
    return refs;
  },
  toString: function() {
    return this.title;
  }
};