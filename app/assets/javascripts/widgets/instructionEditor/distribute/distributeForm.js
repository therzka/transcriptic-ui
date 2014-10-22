Transcriptic.InstructionEditor.DistributeForm = function($form, $saveBtn) {
  this.$form = $form;
};

Transcriptic.InstructionEditor.DistributeForm.prototype = {
  render: function(instructionData) {
    var formTemplate = Handlebars.compile($("#distribute-form-template").html());
    var distributeForm = formTemplate();
    this.$form.append(distributeForm);
    this.$fromContainer = this.$form.find(".from.container_holder");
    this.$toContainer = this.$form.find(".to.container_holder");
  },
  bindEventListeners: function(controller) {
    this.controller = controller;
    this.$form.find(".volume").on("change", this.handlePlateUpdated.bind(this));
    this.$form.find(".container_holder").droppable({
      drop: this.handleContainerDrop.bind(this)
    });
  },
  handleContainerDrop: function(evt, ui) {
    var container = $(ui.draggable[0]).find("> span").data().container;
    var $elem = $(evt.target);
    var cType = $elem.data().ctype;
    if(cType === "from") {
      this.setFromContainer($elem, container);
    }
    else if(cType === "to") {
      this.setToContainer($elem, container);
    }
  },
  updateInstruction: function(evt) {
    if(this.fromPlate && this.toPlate) {
      var instructionData = {
        fromContainer: this.getFromContainer(),
        toContainer: this.getToContainer(),
        fromWells: this.fromPlate.getSelectedWells(),
        toWells: this.toPlate.getSelectedWells(),
        volume: parseInt(this.getVolume())
      };
      this.controller.updateInstruction(instructionData);
    }
  },
  setFromContainer: function($elem, container) {
    this.setContainer($elem, container);
    var $fromPlate = this.$form.find(".from.plate");
    this.fromPlate = Transcriptic.PlateGenerator.PlateWidget($fromPlate, container);
    $fromPlate.on("update", this.handlePlateUpdated.bind(this));
  },
  setToContainer: function($elem, container) {
    this.setContainer($elem, container);
    var $toPlate = this.$form.find(".to.plate");
    this.toPlate = Transcriptic.PlateGenerator.PlateWidget($toPlate, container, true);
    $toPlate.on("update", this.handlePlateUpdated.bind(this));
  },
  setContainer: function($elem, container) {
    $elem.text(container.toString());
    $elem.addClass(container.storage);
    $elem.data("container", container);
  },
  getFromContainer: function() {
    return this.$fromContainer.data().container;
  },
  getToContainer: function() {
    return this.$toContainer.data().container;
  },
  getVolume: function() {
    return this.$form.find(".volume").val();
  },
  handlePlateUpdated: function(evt) {
    this.updateInstruction();
  }
};