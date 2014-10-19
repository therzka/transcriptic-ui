Transcriptic.ContainerList = function(containerListSelector) {
  this.$containerList = $(containerListSelector);
  this.$containerDropdown = $("#containers_selector");
};

Transcriptic.ContainerList.prototype = {
  refresh: function() {
    this.$containerList.empty();
    this.$containerDropdown.empty();
    for(var c in Transcriptic.organization.containers) {
      var container = Transcriptic.organization.containers[c];
      this.$containerList.append("<p>" + container.containerName + "</p>");
      this.$containerDropdown.append("<option value='" + container.containerName + "'>" + container.containerName + "</option>");
    }
  }
};