Transcriptic.PlateController = function(element, rowNumber, columnNumber, wellSize = 20){
	this.element = element;
	this.rowNumber = rowNumber;
	this.columnNumber = columnNumber;
	this.wellSize = wellSize;
	this.generatePlate(this.element, this.rowNumber, this.columnNumber, this.wellSize);
};

Transcriptic.PlateController.prototype = {
	 var generatePlate: function(element, rowNumber, colNumber, wellSize){
		var numwells = colNumber * rowNumber
		var platewidth = (1.6*(wellSize*colNumber))
		var plateheight = (wellSize * rowNumber)
		$(element).css({"width": platewidth + "px", "height": plateheight + "px"})
		for (var j = 0; j < numwells; j++){
			element.append('<li class="ui-state-default" id="' + j + '"></li>');
			$("#" + j).css({"width": wellSize, "height": wellSize});
		}
		$( ".selectable" ).selectable({
			stop: function(event, ui){
				getSelectedWells();
			}
		})
	}

	getSelectedWells: function(){
		var selectedWells = [];

  		$(".ui-selected").each(function(){
  			selectedWells.push(parseInt($(this).attr("id")));
  		})

  		return selectedWells
  	}

}