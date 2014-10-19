Transcriptic.Organization = function(organizationID, organizationName) {
  this.organizationID = organizationID || "ORG_ID";
  this.organizationName = organizationName || "My Organization";
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