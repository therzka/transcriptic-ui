Transcriptic.ProfileList.RunForm = function() {
  this.$modal = $('#runModal');
  this.$form = this.$modal.find("#run_form");
  this.$submitButton = this.$modal.find(".submit");
};

Transcriptic.ProfileList.RunForm.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;
    this.$submitButton.on("click", this.handleFormSubmit.bind(this));
  },
  show: function(project) {
    this.project = project;
    this.$form.find("#project").val(project.toString());
    this.$modal.modal('show');
  },
  handleFormSubmit: function() {
    var runData = {
      title: this.$form.find("#title").val(),
      project: this.project
    }
    this.controller.createRun(runData);
    this.clearForm();
    this.$modal.modal('hide');
  },
  clearForm: function() {
    title: this.$form.find("#title").val()
  }
};