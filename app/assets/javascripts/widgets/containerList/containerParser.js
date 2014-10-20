Transcriptic.ContainerList.ContainerParser = {
  parse: function(containers, controller) {
    var containerData = [];

    containerData.push({
      text: "New Container",
      cssClass: "btn",
      callback: controller.handleNewContainerClick.bind(controller)
    })

    for(var i in containers) {
      containerData.push({ text: containers[i].toString() });
    }

    return containerData;
  }
};