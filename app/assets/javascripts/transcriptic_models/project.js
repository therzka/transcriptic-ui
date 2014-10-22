Transcriptic.Project = function(projectData) {
  this.projectName = projectData.projectName || "My Project";
  this.projectID = projectData.projectID;
  this.transcripticRuns = [];
  this.currentRun;
};

Transcriptic.Project.prototype = {
  addRun: function(transcripticRun) {
    this.transcripticRuns.push(transcripticRun);
  },
  toString: function() {
    return this.projectName;
  }
};