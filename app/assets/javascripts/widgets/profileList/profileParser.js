Transcriptic.ProfileList.ProfileParser = {
  parse: function(organizations, controller) {
    var profileData = [];

    profileData.push({
      text: "My Profile",
      cssClass: "container_elem",
      nodes: Transcriptic.ProfileList.ProfileParser.parseOrganizations(organizations)
    });

    return profileData;
  },
  parseOrganizations: function(organizations) {
    var organizationData = [];

    for(var i in organizations) {
      var organization = organizations[i];
      organizationData.push({
        text: organization.toString(),
        nodes: Transcriptic.ProfileList.ProfileParser.parseProjects(organization.projects)
      });
    }

    return organizationData;
  },
  parseProjects: function(projects) {
    var projectData = [];

    for(var i in projects) {
      var project = projects[i];
      projectData.push({
        text: project.toString(),
        nodes: Transcriptic.ProfileList.ProfileParser.parseRuns(project.transcripticRuns)
      });
    }

    return projectData;
  },
  parseRuns: function(runs) {
    var runData = [];

    for(var i in runs) {
      runData.push({
        text: runs[i].toString()
      });
    }

    return runData;
  }
};