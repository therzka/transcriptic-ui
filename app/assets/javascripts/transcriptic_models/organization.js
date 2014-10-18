Transcriptic.Organization = function(organizationID, organizationName) {
  this.organizationID = organizationID;
  this.organizationName = organizationName;
  this.containers = [];
  this.projects = [];
};

Transcriptic.Organization.prototype = {
  addContainer: function(container) {
    this.containers.push(container);
  },
  addProject: function(project) {
    this.projects.push(project);
  }
};