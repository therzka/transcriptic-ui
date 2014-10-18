Transcriptic.Project = function(projectName, projectID) {
  this.projectName = projectName || "My Project";
  this.projectID = projectID || "PROJ_ID";
  this.transcripticRuns = [];
};

Transcriptic.Project.prototype = {
  addRun: function(transcripticRun) {
    this.transcripticRuns.push(transcripticRun);
  }
};