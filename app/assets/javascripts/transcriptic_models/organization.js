Transcriptic.Organization = function(organizationData) {
  this.organizationID = organizationData.organizationID || "ORG_ID";
  this.organizationName = organizationData.organizationName || "My Organization";
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
  encodeRefs: function(){
    finalObj = {refs:{}};

    for (var c in this.containers){
      containername = this.containers[c].containerName;
      containertype = this.containers[c].containerType;
      storage = this.containers[c].storage;
      containerid = this.containers[c].containerID;

      if (containerid == "new"){
        finalObj["refs"][containername] = {
            new: containertype,
            store: {
              where: storage
            }
        }
      }
      else{
        finalObj["refs"][containername] = {
          id: containerid,
          store: {
              where: storage
          }
        }
      }
    }
    return JSON.stringify(finalObj, null, '\t')
  }

};