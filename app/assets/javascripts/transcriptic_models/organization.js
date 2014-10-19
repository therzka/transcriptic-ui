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
  },
  encode: function(){
    finalObj = {refs:{}};
    for (var c in this.containers){
      containername = this.containers[c].containerName;
      containertype = this.containers[c].containerType;
      storage = this.containers[c].storage;
      finalObj["refs"] = {
        containername: {
          new: containertype,
          store: {
            where: storage
          }
        }
      }
    }
    console.log(JSON.stringify(finalObj))
  }

};