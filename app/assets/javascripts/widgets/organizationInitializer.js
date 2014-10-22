Transcriptic.OrganizationInitializer = function() {
  Transcriptic.organization = new Transcriptic.Organization({});
  
  var project = new Transcriptic.Project({});
  var run = new Transcriptic.Run({});
  project.addRun(run);
  project.currentRun = run;

  Transcriptic.organization.addProject(project);
  
  	
}