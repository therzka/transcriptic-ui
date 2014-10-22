Transcriptic.Instruction.Thermocycle = function(thermocycleData) {
  this.update(thermocycleData);
};

Transcriptic.Instruction.Thermocycle.prototype = {
  update: function(data) {
    this.container = data.container || this.container;
    this.steps = data.steps || this.steps;
    this.cycles = data.cycles || this.cycles;
    this.groups = data.groups || this.groups || [];
  },
  addThermogroup: function(thermogroupData){
  	//assumes hash in the form of {cycles: int, steps: [{duration: int, temperature: int}, ... ]}
  	this.groups.push(thermogroupData);
  },
  encodeAction: function() {
    return {op: "thermocycle", object: this.container, groups: this.groups};
  },
  getContainers: function() {
    return [this.container];
  },
  isValid: function() {
    return this.container && this.steps && this.cycles && this.groups;
  }
};