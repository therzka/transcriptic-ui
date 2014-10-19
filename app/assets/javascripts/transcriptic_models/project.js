Transcriptic.Project = function(projectName, projectID) {
  this.projectName = projectName || "My Project";
  this.projectID = projectID || "PROJ_ID";
  this.transcripticRuns = [];
  this.currentRun;
};

Transcriptic.Project.prototype = {
  addRun: function(transcripticRun) {
    this.currentRun = transcripticRun;
    this.transcripticRuns.push(transcripticRun);
  }
};