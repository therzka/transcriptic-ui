Transcriptic.JSONEncoder=function(organization, project, run){
	this.organization = organization;
	this.containers = this.organization["containers"];
	// this.headers = {
	//   "X-User-Email": os.environ['TRANSCRIPTIC_EMAIL'],
	//   "X-User-Token": os.environ['TRANSCRIPTIC_KEY'],
	//   "Content-Type": "application/json",
	//   "Accept": "application/json"
	// }
	this.project = project;
	this.run = run;
	this.instructions = this.run.instructions;
}

Transcriptic.JSONEncoder.prototype = {
	JSONrequest: {},

	
}