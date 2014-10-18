Transcriptic.TranscripticRun = function(projectID, projectName) {
  this.projectName = projectName;
  this.projectID = projectID || "SOME PROJECT ID";
  this.instructions = [];
};

Transcriptic.TranscripticRun.prototype = {
  addInstruction: function(instruction) {
    this.instructions.push(instruction);
  }
};