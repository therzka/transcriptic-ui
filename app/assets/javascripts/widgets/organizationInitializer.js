Transcriptic.OrganizationInitializer = function() {
  Transcriptic.organization = new Transcriptic.Organization();
  
  var project = new Transcriptic.Project();
  project.addRun(new Transcriptic.Run());

  Transcriptic.organization.addProject(project);
}