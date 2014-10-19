Transcriptic.PipetteAction = function(actionType, from, to, volume) {
  this.actionType = actionType;
  this.from = from;
  this.to = to;
  this.volume = volume;
};

Transcriptic.PipetteAction.prototype = {
	encodeAction: function(){
		if (this.actionType == "transfer"){
			return {transfer: [{from: this.from, to: this.to, volume: this.volume}]}
		}
		if (this.actionType == "distribute"){
			var toWells = []
			for (var w in this.to){
				toWells.push({well: w.to, volume: w.volume})
			}
			return {distribute: {from: this.from, to: toWells}}
		}
	}
};