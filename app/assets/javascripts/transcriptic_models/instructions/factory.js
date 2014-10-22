Transcriptic.Instruction.Factory = {
  create: function(instructionType, instructionData) {
    switch(instructionType) {
      case "distribute":
        return Transcriptic.Instruction.Factory.createDistributeAction(instructionData);
        break;
      case "transfer":
        return Transcriptic.Instruction.Factory.createTransferAction(instructionData);
        break;
      case "seal":
        return Transcriptic.Instruction.Factory.createSealAction(instructionData);
        break;
      case "unseal":
        return Transcriptic.Instruction.Factory.createUnsealAction(instructionData);
        break;
      case "cover":
        return Transcriptic.Instruction.Factory.createCoverAction(instructionData);
        break;
      case "uncover":
        return Transcriptic.Instruction.Factory.createUncoverAction(instructionData);
        break;
      case "mix":
        return Transcriptic.Instruction.Factory.createMixAction(instructionData);
        break;
      case "consolidate":
        return Transcriptic.Instruction.Factory.createConsolidateAction(instructionData);
        break;
      case "spin":
        return Transcriptic.Instruction.Factory.createSpinAction(instructionData);
        break;
      case "thermocycle":
        return Transcriptic.Instruction.Factory.createThermocycleAction(instructionData);
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
  },
  createSealAction: function(sealData) {
    return new Transcriptic.Instruction.Seal(sealData);
  },
  createUnsealAction: function(unsealData) {
    return new Transcriptic.Instruction.Unseal(unsealData);
  },
  createCoverAction: function(coverData) {
    return new Transcriptic.Instruction.Cover(coverData);
  },
  createUncoverAction: function(uncoverData) {
    return new Transcriptic.Instruction.Uncover(uncoverData);
  },
  createMixAction: function(mixData) {
    return new Transcriptic.Instruction.Mix(mixData);
  },
  createConsolidateAction: function(consolidateData) {
    return new Transcriptic.Instruction.Consolidate(consolidateData);
  },
  createSpinAction: function(spinData) {
    return new Transcriptic.Instruction.Spin(spinData);
  },
  createThermocycleAction: function(thermocycleData) {
    return new Transcriptic.Instruction.Thermocycle(thermocycleData);
  }
};