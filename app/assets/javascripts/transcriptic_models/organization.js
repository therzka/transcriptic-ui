Transcriptic.Organization = function(organizationData) {
  this.organizationID = organizationData.organizationID;
  this.organizationName = organizationData.organizationName || "My Organization";
  this.apiKey = organizationData.apiKey;
  this.email = organizationData.email;
  this.containers = [];
  this.projects = [];
  this.currentProject;
};

Transcriptic.Organization.prototype = {
  addContainer: function(container) {
    this.containers.push(container);
  },
  addProject: function(project) {
    this.currentProject = this.currentProject || project;
    this.projects.push(project);
  },
  addInstructionToCurrentRun: function(instruction) {
    this.currentProject.currentRun.addInstruction(instruction);
  },
  getContainer: function(containerName) {
    for (var c in this.containers){
      if(containerName === this.containers[c].containerName) {
        return this.containers[c];
      }
    }
    return null;
  },
  toString: function() {
    return this.organizationName;
  }
};