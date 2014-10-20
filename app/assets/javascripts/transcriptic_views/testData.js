TestData = {
	generateTestContainer: function(evt) {
		var containerData = {
		  containerName:  "hello",
		  containerID:    "1",
		  containerType:  "96-pcr",
		  storage:        "ambient"
		}
		$("#container_list").append("<p>" + containerData.containerName + "</p>");
	},

	generateTestInstruction: function(evt) {
		$("#instruction_list").append("Pipette(distribute) 100ml from blah/2 to blah/4")
	},
	bindEventListeners: function(){
		var $testContainer = $("button#test_container");
		var $testInstruction = $("button#test_instruction");
		$testContainer.on("click", TestData.generateTestContainer.bind(this));
		$testInstruction.on("click", TestData.generateTestInstruction.bind(this));
	}
};