Transcriptic.ProfileList.ProfileParser = {
  parse: function(organizations, controller) {
    var profileData = [];

    profileData.push({
      text: "My Profile",
      cssClass: "container_elem",
      nodes: Transcriptic.ProfileList.ProfileParser.parseOrganizations(organizations, controller)
    });

    return profileData;
  },
  parseOrganizations: function(organizations, controller) {
    var organizationData = [];

    for(var i in organizations) {
      var organization = organizations[i];
      organizationData.push({
        text: organization.toString(),
        nodes: Transcriptic.ProfileList.ProfileParser.parseProjects(organization, controller)
      });
    }

    return organizationData;
  },
  parseProjects: function(organization, controller) {
    var projects = organization.projects;
    var projectData = [];

    projectData.push({
      text: "New Project",
      cssClass: "btn btn-sm",
      callback: controller.handleNewProjectClick.bind(controller),
      data: { organization: organization }
    });

    for(var i in projects) {
      var project = projects[i];
      projectData.push({
        text: project.toString(),
        nodes: Transcriptic.ProfileList.ProfileParser.parseRuns(project, controller)
      });
    }

    return projectData;
  },
  parseRuns: function(project, controller) {
    var runs = project.transcripticRuns;
    var runData = [];

    runData.push({
      text: "New Run",
      cssClass: "btn btn-sm",
      data: { project: project },
      callback: controller.handleNewRunClick.bind(controller),
    });

    for(var i in runs) {
      runData.push({
        text: runs[i].toString(),
        data: { project: project, run: runs[i] },
        callback: controller.handleRunClick.bind(controller)
      });
    }

    return runData;
  }
};