Transcriptic.InstructionList.InstructionParser = {
  parse: function(instructions) {
    var instructionData = [];

    for(var i in instructions) {
      instructionData.push(instructions[i].toString());
    }

    return instructionData;
  }
};