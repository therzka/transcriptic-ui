Transcriptic.InstructionEditor.DistributeForm = function($form, $saveBtn) {
  this.$form = $form;
  this.$saveBtn = $saveBtn;
  this.$fromContainer = $form.find(".from .container_holder");
  this.$toContainer = $form.find(".to .container_holder");
};

Transcriptic.InstructionEditor.DistributeForm.prototype = {
  render: function(instructionData) {
    var formTemplate = Handlebars.compile($("#distribute-form-template").html());
    this.$form.append(formTemplate());
  },
  bindEventListeners: function(controller) {
    this.controller = controller;
    this.$saveBtn.on("click", this.handleSaveClick.bind(this));
    this.$form.find(".container_holder").droppable({
      drop: this.handleContainerDrop.bind(this)
    })
  },
  handleContainerDrop: function(evt, ui) {
    var container = $(ui.draggable[0]).find("> span").data().container;
    var $elem = $(evt.target);
    this.setContainer($elem, container);
  },
  handleSaveClick: function(evt) {
    var instructionData = {
      // GRAB FROM FORM
    };
    this.controller.updateInstruction(instructionData);
  },
  setContainer: function($elem, container) {
    $elem.text(container.toString());
    $elem.addClass(container.storage);
    $elem.data("container", container);
  },
  getFromContainer: function() {
    this.$fromContainer.data("container");
  },
  getToContainer: function() {
    this.$toContainer.data("container");
  }
};