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
      containername = this.instructions[c].containerName;
      containertype = this.instructions[c].containerType;
      storage = this.instructions[c].storage;
      containerid = this.instructions[c].containerID;

      if (containerid == "new"){
        finalObj["refs"][containername] = {
            new: containertype,
            store: {
              where: storage
            }
        }
      }
      else{
        finalObj["refs"][containername] = {
          id: containerid,
          store: {
              where: storage
          }
        }
      }
    }
    return JSON.stringify(finalObj, null, '\t')
  }
};