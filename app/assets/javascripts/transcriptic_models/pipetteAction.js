Transcriptic.PipetteAction = function(actionType, from, to, volume) {
  this.actionType = actionType;
  this.from = from;
  this.to = to;
  this.volume = volume;
};

Transcriptic.PipetteAction.prototype = {
	encodeAction: function(){
		if (this.actionType == "transfer"){
			
		}
		if (this.actionType == "distribute"){
			
		}
	}
};