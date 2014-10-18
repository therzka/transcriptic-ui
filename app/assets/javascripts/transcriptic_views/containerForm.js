Transcriptic.ContainerForm = function(showFormSelector, formSelector) {
  this.$showForm = $(showFormSelector);
  this.$containerForm = $(formSelector);
};

Transcriptic.ContainerForm.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;

    this.$showForm.on("click", this.showNewContainerForm.bind(this));
  },
  showNewContainerForm: function(evt) {
   
  }
};