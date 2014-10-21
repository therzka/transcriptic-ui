Transcriptic.InstructionList.InstructionParser = {
  parse: function(instructions) {
    var instructionData = [];

    for(var i in instructions) {
      instructionData.push({
        index: i, 
        instruction: instructions[i], 
        instructionString: instructions[i].toString()
      });
    }

    return instructionData;
  }
};