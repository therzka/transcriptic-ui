Transcriptic.SubmitForm = function() {
  this.$form = $("#submit_form");
  this.$submitButton = $("#submitModal .submit");
};

Transcriptic.SubmitForm.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;

    this.$submitButton.on("click", this.handleFormSubmit.bind(this));
  },
  handleFormSubmit: function(evt) {
    Transcriptic.organization.email = this.$form.find(".email").val();
    Transcriptic.organization.organizationName = this.$form.find(".organization_name").val();
    Transcriptic.organization.currentProject.projectID = this.$form.find(".project_id").val();
    Transcriptic.organization.apiKey = this.$form.find(".api_key").val();

    this.controller.submitRun();
    $("#submitModal").modal('hide');
  }
};