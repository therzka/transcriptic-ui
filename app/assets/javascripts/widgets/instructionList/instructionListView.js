Transcriptic.InstructionList.InstructionListView = function(instructionListSelector) {
  this.$list = $(instructionListSelector);
  this.instructionTemplate = Handlebars.compile($("#instruction-template").html());
  this.setSortable();
};

Transcriptic.InstructionList.InstructionListView.prototype = {
  render: function(instructions) {
    this.$list.empty();
    for(var i in instructions) {
      this.$list.append(this.instructionTemplate(instructions[i]));
    }
    this.$list.find(".collapse").last().collapse('toggle');
  },
  setSortable: function() {
    this.$list.sortable({
      update: this.handleSortEvent.bind(this)
    });
  },
  handleSortEvent: function(evt) {
    
  },
  getInstructionAccordion: function(index) {
    return this.$list.find(".instruction").eq(index);
  }
};