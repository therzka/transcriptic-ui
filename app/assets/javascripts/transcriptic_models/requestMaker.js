Transcriptic.RequestMaker=function(organization, userInfo){
	// get userInfo from form that pops up on submit of run
	this.headers = {
	  "X-User-Email": userInfo.email,
	  "X-User-Token": userInfo.APIKey,
	  "Content-Type": "application/json",
	  "Accept": "application/json"
	}

	this.organizationName = organization.organizationName;
	this.projectID = organization.currentProject.projectID;

	this.url = "https://secure.transcriptic.com/" + organizationName + "/" + projectID + "/runs"
	
	var refs = organization.currentProject.currentRun.encodeRefs();
	var instructions = organization.currentProject.currentRun.encodeInstructions();
	var protocol = {
		refs,
		instructions
	};
}

// https://secure.transcriptic.com/organization_name/projectID/runs

// need to create the URL to make the post request