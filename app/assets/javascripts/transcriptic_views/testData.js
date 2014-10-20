TestData = {
	generateTestContainer: function(evt) {
		var containerData = {
		  containerName:  "hello" + Math.floor(Math.random() * 10),
		  containerID:    "1",
		  containerType:  "96-pcr",
		  storage:        "ambient"
		}
		Transcriptic.organization.addContainer(new Transcriptic.Container(containerData));
		$("#container_list").append("<p>" + containerData.containerName + "</p>");
	},

	generateTestInstruction: function(evt) {
		var fromContainer = TestData.getRandomContainer();
		var toContainer = TestData.getRandomContainer();
		
		var fromWell = TestData.getRandomWell(fromContainer);
		var toWell = TestData.getRandomWell(toContainer);

		var volume = Math.floor(Math.random() * 1000);

		var instructionData = {
			container: fromContainer,
			from: fromWell,
			to: toWell,
			volume: volume
		}

		var instruction = new Transcriptic.Instruction.Transfer(instructionData);
		Transcriptic.organization.currentProject.currentRun.addInstruction(instruction);
		// $("#instruction_list").append("Pipette(distribute) 100ml from blah/2 to blah/4")
		var instructions = Transcriptic.organization.currentProject.currentRun.instructions;
		$("#instruction_list").append(instruction.toString());
	},
	bindEventListeners: function(){
		var $testContainer = $("button#test_container");
		var $testInstruction = $("button#test_instruction");
		$testContainer.on("click", TestData.generateTestContainer.bind(this));
		$testInstruction.on("click", TestData.generateTestInstruction.bind(this));
	},
	getRandomContainer: function(){
		var numContainers = Transcriptic.organization.containers.length;
		return Transcriptic.organization.containers[Math.floor(Math.random() * numContainers)];
	},
	getRandomWell: function(container){
		var numWells = container.wells.length;
		return container.wells[Math.floor(Math.random() * numWells)];
	}
};