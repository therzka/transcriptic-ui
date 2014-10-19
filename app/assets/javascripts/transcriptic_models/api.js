Transcriptic.API = {
	submitRun: function(organization, project, run) {
		var url = Transcriptic.API.getURL(organization, project);
		var headers = Transcriptic.API.buildHeaders(organization);
		var protocol = Transcriptic.API.buildProtocol(run);

		// Transcriptic.API.postToTranscriptic(url, headers, protocol);

		// LOG TO CONSOLE DURING TESTING
		console.log(url, headers);
		console.log(JSON.stringify(protocol, null, '\t'));
	},
	buildHeaders: function(organization) {
		return {
		  "X-User-Email": organization.email,
		  "X-User-Token": organization.apiKey,
		  "Content-Type": "application/json",
		  "Accept": "application/json"
		}
	},
	getURL: function(organization, project) {
		return "https://secure.transcriptic.com/" + organization.organizationName + "/" + project.projectID + "/runs";
	},
	buildProtocol: function(run) {
		return {
			"refs": run.encodeRefs(),
			"instructions": run.encodeInstructions()
		};
	},
	postToTranscriptic: function(url, headers, protocol) {
		$.ajax({
			context: this,
			type: "post",
			url: url,
			headers: headers,
			data: JSON.stringify(protocol),
			contentType: "application/json; charset=utf-8",
    	dataType: "json",
		})
		.done(this.handleSubmitSuccess)
		.fail(this.handleSubmitError);
	},
	handleSubmitSuccess: function(serverData) {
		console.log(serverData);
	},
	handleSubmitError: function(serverData) {
		alert("An error occurred, please try again");
	}
};