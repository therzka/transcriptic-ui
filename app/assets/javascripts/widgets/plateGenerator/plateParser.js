Transcriptic.PlateGenerator.PlateParser = {
  parse: function(container, wellIndices) {
    var wells = [];
    for(var i in wellIndices) {
      wells.push(container.getWell(wellIndices[i]));
    }

    return wells;
  }
};