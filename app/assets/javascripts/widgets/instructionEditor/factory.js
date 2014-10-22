Transcriptic.InstructionEditor.Factory = {
  create: function(instruction, $instructionAccordion, $saveBtn) {
    if(instruction instanceof Transcriptic.Instruction.Distribute) {
      return new Transcriptic.InstructionEditor.DistributeWidget(instruction, $instructionAccordion, $saveBtn);
    }
    else if(instruction instanceof Transcriptic.Instruction.Seal) {
      return new Transcriptic.InstructionEditor.SealWidget(instruction, $instructionAccordion);
    }
    else if(instruction instanceof Transcriptic.Instruction.Unseal) {
      return new Transcriptic.InstructionEditor.UnsealWidget(instruction, $instructionAccordion);
    }
  }
}