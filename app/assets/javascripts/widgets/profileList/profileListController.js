Transcriptic.ProfileList.ProfileListController = function(profileList) {
  this.profileList = profileList;
  
  this.runForm = new Transcriptic.ProfileList.RunForm();
  this.runForm.bindEventListeners(this);

  this.projectForm = new Transcriptic.ProfileList.ProjectForm();
  this.projectForm.bindEventListeners(this);

  this.refreshList();
};

Transcriptic.ProfileList.ProfileListController.prototype = {
  refreshList: function() {
    var listData = Transcriptic.ProfileList.ProfileParser.parse([Transcriptic.organization], this);
    this.profileList.renderTree(listData);
  },
  handleNewRunClick: function(evt) {
    var project = $(evt.currentTarget).data().project;
    this.runForm.show(project);
  },
  handleNewProjectClick: function(evt) {
    var organization = $(evt.currentTarget).data().organization;
    this.projectForm.show(organization);
  },
  createRun: function(runData) {
    var project = runData.project;
    project.addRun(new Transcriptic.Run(runData));
    this.refreshList();
  },
  createProject: function(projectData) {
    var organization = projectData.organization;
    organization.addProject(new Transcriptic.Project(projectData));
    this.refreshList();
  }
};