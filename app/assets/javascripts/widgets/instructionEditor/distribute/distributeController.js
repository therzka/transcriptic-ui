Transcriptic.InstructionEditor.DistributeController = function(instruction, distributeView) {
  this.distributeView = distributeView;
  this.instruction = instruction;

  this.render();
  this.distributeView.bindEventListeners(this);
};

Transcriptic.InstructionEditor.DistributeController.prototype = {
  render: function() {
    this.distributeView.render(this.instruction);
  },
  updateInstruction: function(instructionData) {
    var fromWells = Transcriptic.PlateGenerator.PlateParser.parse(instructionData.fromContainer, instructionData.fromWells);
    var toWells = Transcriptic.PlateGenerator.PlateParser.parse(instructionData.toContainer, instructionData.toWells);
    
    instructionData.from = fromWells[0];
    instructionData.to = toWells;
    this.instruction.update(instructionData);
  }
};