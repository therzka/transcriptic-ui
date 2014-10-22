$(document).ready(function(){
	

 	generatePlate =  function(element, rowNumber, colNumber, wellSize){
		var numwells = colNumber * rowNumber
		var platewidth = (1.6*(wellSize*colNumber))
		var plateheight = (wellSize * rowNumber)
		$(element).css({"width": platewidth + "px", "height": plateheight + "px"})
		for (var j = 0; j < numwells; j++){
			element.append('<li class="ui-state-default" id="' + j + '"></li>');
			$("#" + j).css({"width": wellSize, "height": wellSize});
		}

	}

	$( ".selectable" ).selectable({
			stop: function(event, ui){
				console.log(getSelectedWells());
			}
	})

  	generatePlate($('#gridarea'), 8, 12, 10)
  
});
  	getSelectedWells = function(){
		var selectedWells = [];

  		$(".ui-selected").each(function(){
  			selectedWells.push(parseInt($(this).attr("id")));
  		})
  		return selectedWells
  	}
