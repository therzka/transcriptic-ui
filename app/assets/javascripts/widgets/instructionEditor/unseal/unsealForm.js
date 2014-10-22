Transcriptic.InstructionEditor.UnsealForm = function($form) {
  this.$form = $form;
};

Transcriptic.InstructionEditor.UnsealForm.prototype = {
  render: function(instructionData) {
    var formTemplate = Handlebars.compile($("#unseal-form-template").html());
    this.$form.append(formTemplate());
    this.$container = this.$form.find(".container_holder");

    if(instructionData.container) {
      this.setContainer(this.$container, instructionData.container);
    }
  },
  bindEventListeners: function(controller) {
    this.controller = controller;
    this.$form.find(".container_holder").droppable({
      drop: this.handleContainerDrop.bind(this)
    })
  },
  handleContainerDrop: function(evt, ui) {
    var container = $(ui.draggable[0]).find("> span").data().container;
    var $elem = $(evt.target);
    this.setContainer($elem, container);
    this.updateInstruction();
  },
  updateInstruction: function(evt) {
    var instructionData = {
      container: this.getContainer()
    };
    this.controller.updateInstruction(instructionData);
  },
  setContainer: function($elem, container) {
    $elem.text(container.toString());
    $elem.addClass(container.storage);
    $elem.data("container", container);
  },
  getContainer: function() {
    return this.$container.data().container;
  }
};