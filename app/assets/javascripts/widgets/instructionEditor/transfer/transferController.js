Transcriptic.InstructionEditor.TransferController = function(instruction, transferView) {
  this.transferView = transferView;
  this.instruction = instruction;

  this.render();
  this.transferView.bindEventListeners(this);
};

Transcriptic.InstructionEditor.TransferController.prototype = {
  render: function() {
    this.transferView.render(this.instruction);
  },
  updateInstruction: function(instructionData) {
    var fromWells = Transcriptic.PlateGenerator.PlateParser.parse(instructionData.fromContainer, instructionData.fromWells);
    var toWells = Transcriptic.PlateGenerator.PlateParser.parse(instructionData.toContainer, instructionData.toWells);
    
    instructionData.from = fromWells[0];
    instructionData.to = toWells;
    this.instruction.update(instructionData);
  }
};