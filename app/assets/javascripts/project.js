var Project = function(projectName, projectID) {
  this.projectName = projectName;
  this.projectID = projectID;
  this.transcripticRuns = [];
};

Project.prototype = {
  addRun: function(transcripticRun) {
    this.transcripticRuns.push(transcripticRun);
  }
};