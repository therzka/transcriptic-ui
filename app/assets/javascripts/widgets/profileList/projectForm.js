Transcriptic.ProfileList.ProjectForm = function() {
  this.$modal = $('#projectModal');
  this.$form = this.$modal.find("#project_form");
  this.$submitButton = this.$modal.find(".submit");
};

Transcriptic.ProfileList.ProjectForm.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;
    this.$submitButton.on("click", this.handleFormSubmit.bind(this));
  },
  show: function(organization) {
    this.organization = organization;
    this.$form.find("#organization").val(organization.toString());
    this.$modal.modal('show');
  },
  handleFormSubmit: function() {
    var projectData = {
      projectName: this.$form.find("#project_name").val(),
      projectID: this.$form.find("#project_id").val(),
      organization: this.organization
    }
    this.controller.createProject(projectData);
    this.clearForm();
    this.$modal.modal('hide');
  },
  clearForm: function() {
    this.$form.find("#project_name").val("")
    this.$form.find("#project_id").val("")
  }
};