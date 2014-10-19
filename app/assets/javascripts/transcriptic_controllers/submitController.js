Transcriptic.SubmitController = function(submitForm) {
  this.submitForm = new Transcriptic.SubmitForm();
  this.submitForm.bindEventListeners(this);
};

Transcriptic.SubmitController.prototype = {
  submitRun: function() {
    Transcriptic.API.submitRun(
      Transcriptic.organization, 
      Transcriptic.organization.currentProject,
      Transcriptic.organization.currentProject.currentRun
    );
  }
};