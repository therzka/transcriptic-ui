Transcriptic.PlateGenerator.PlateWidget = function($plate, container, multiSelect) {
  var plateView = new Transcriptic.PlateGenerator.PlateView($plate);
  return new Transcriptic.PlateGenerator.PlateController(plateView, container, multiSelect);
}