Transcriptic.Instruction.Thermocycle = function(thermocycleData) {
  this.container = thermocycleData.container;
  this.steps = thermocycleData.steps
  this.cycles = thermocycleData.cycles
  this.groups = [];
};

Transcriptic.Instruction.Thermocycle.prototype = {
  addThermogroup: function(thermogroupData){
  	//assumes hash in the form of {cycles: int, steps: [{duration: int, temperature: int}, ... ]}
  	this.groups.push(thermogroupData);
  },
  encodeAction: function() {
    return {op: thermocycle, object: this.container, groups: this.groups};
  },
  getContainers: function() {
    return [this.container];
  }
};