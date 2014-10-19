Transcriptic.ContainerList = function(containerListSelector) {
  this.$containerList = $(containerListSelector);
};

Transcriptic.ContainerList.prototype = {
  refresh: function() {
    this.$containerList.empty();
    for(var c in Transcriptic.organization.containers) {
      var container = Transcriptic.organization.containers[c];
      this.$containerList.append("<p>" + container.containerName + "</p>");
    }
  }
};