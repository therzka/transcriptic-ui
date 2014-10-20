Transcriptic.ProfileForm = function() {
	this.$form = $("#profile_form");
	this.$profileLink = $("#profileModal");
};

Transcriptic.ProfileForm.prototype = {
	  bindEventListeners: function(controller) {
    this.controller = controller;
  }
};