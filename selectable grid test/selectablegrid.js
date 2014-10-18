$(document).ready(function(){
  var rows = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var selected = [];
  $('div').selectable("disable")
  $( ".selectable" ).selectable(
    {selected: function(event, ui){
        console.log((ui.selected.id));
    }
        
  });

  var generateGrid = function(element, size){
    var rowlabels = rows.slice(0,size[0])
    var lastcol = size[1];
    var j = 0;
    for (var i = 0; i < size[0]; i++){
      element.append('<div id="' + rowlabels.charAt(i) + '"></div>')
      while (j < lastcol){
        $('#'+rowlabels.charAt(i)).append('<li class="ui-state-default" id="' + j + '"></li>');
        j++
      }
      lastcol += size[1];
    }
      $('#'+rowlabels.charAt(i)).before('<p>'+ rowlabels.charAt(i) + '</p>')
  }

  

  generateGrid($('#gridarea'), [16,24]);

  
});