Transcriptic.Instruction.Factory = {
  create: function(instructionType, instructionData) {
    switch(instructionType) {
      case "distribute":
        return Transcriptic.Instruction.Factory.createDistributeAction(instructionData);
        break;
      case "transfer":
        return Transcriptic.Instruction.Factory.createTransferAction(instructionData);
        break;
    }
  },
  createDistributeAction: function(distributeData) {
    if(distributeData.fromContainer && distributeData.toContainer) {
      var fromContainer = Transcriptic.organization.getContainer(distributeData.fromContainer);
      var toContainer = Transcriptic.organization.getContainer(distributeData.toContainer);
      distributeData.from = fromContainer.getWell(distributeData.fromWell);
      distributeData.to = [toContainer.getWell(distributeData.toWell)];
    }

    return new Transcriptic.Instruction.Distribute(distributeData);
  },
  createTransferAction: function(transferData) {
    if(transferData.fromContainer && transferData.toContainer) {
      var fromContainer = Transcriptic.organization.getContainer(transferData.fromContainer);
      var toContainer = Transcriptic.organization.getContainer(transferData.toContainer);
      transferData.from = fromContainer.getWell(transferData.fromWell);
      transferData.to = toContainer.getWell(transferData.toWell);
    }

    return new Transcriptic.Instruction.Transfer(transferData);
  }
};