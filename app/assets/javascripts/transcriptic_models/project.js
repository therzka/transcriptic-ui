Transcriptic.Project = function(projectName, projectID) {
  this.projectName = projectName;
  this.projectID = projectID;
  this.transcripticRuns = [];
};

Transcriptic.Project.prototype = {
  addRun: function(transcripticRun) {
    this.transcripticRuns.push(transcripticRun);
  }
};