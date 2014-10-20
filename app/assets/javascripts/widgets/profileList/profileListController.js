Transcriptic.ProfileList.ProfileListController = function(profileList) {
  this.profileList = profileList;
  this.runForm = new Transcriptic.ProfileList.RunForm();
  this.runForm.bindEventListeners(this);

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
    // this.projectForm.show();
  },
  createRun: function(runData) {
    var project = runData.project;
    project.addRun(new Transcriptic.Run(runData));
    this.refreshList();
  }
};