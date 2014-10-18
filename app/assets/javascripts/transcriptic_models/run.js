Transcriptic.Run = function(projectID, projectName) {
  this.projectName = projectName;
  this.projectID = projectID || "PROJECT ID";
  this.instructions = [];
};

Transcriptic.Run.prototype = {
  addInstruction: function(instruction) {
    this.instructions.push(instruction);
  }
};