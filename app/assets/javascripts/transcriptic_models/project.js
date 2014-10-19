Transcriptic.Project = function(projectData) {
  this.projectName = projectData.projectName || "My Project";
  this.projectID = projectData.projectID || "PROJ_ID";
  this.transcripticRuns = [];
  this.currentRun;
};

Transcriptic.Project.prototype = {
  addRun: function(transcripticRun) {
    this.currentRun = transcripticRun;
    this.transcripticRuns.push(transcripticRun);
  }
};