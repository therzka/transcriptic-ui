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

    var currentRun = Transcriptic.organization.currentProject.currentRun;
    var $currentRunNode = this.profileList.getNodeWithData("run", currentRun);
    this.profileList.highlight($currentRunNode);
  },
  registerInstructionList: function(instructionList) {
    this.instructionList = instructionList;
  },
  handleRunClick: function(evt) {
    var $run = $(evt.currentTarget);
    var project = $run.data().project;
    var run = $run.data().run;

    this.selectRun($run, run, project);
  },
  selectRun: function(run, project, $runNode) {
    Transcriptic.organization.currentProject = project;
    Transcriptic.organization.currentProject.currentRun = run;

    this.profileList.highlight($runNode);

    if(this.instructionList) {
      this.instructionList.render(run);
    }
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