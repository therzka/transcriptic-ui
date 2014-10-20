Transcriptic.ProfileForm = function() {
	this.$form = $("#profile_form");
	this.$profileLink = $("#profileModal");
};

Transcriptic.ProfileForm.prototype = {
	  bindEventListeners: function(controller) {
    this.controller = controller;

    // $('#basicModal').on('shown.bs.modal', function (e) {
    //     alert('Modal is successfully shown!');
    // });
  }
};