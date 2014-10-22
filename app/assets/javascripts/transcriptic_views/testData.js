TestData = {
	generateTestContainer: function(evt) {
		var containerID = Math.floor(Math.random() * 10);
		var containerData = {
		  containerName:  "container" + containerID,
		  containerID:    containerID.toString(),
		  containerType:  "96-pcr",
		  storage:        "ambient"
		}
		Transcriptic.organization.addContainer(new Transcriptic.Container(containerData));
	},
	generateTransferInstruction: function(evt) {
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
		var instructions = Transcriptic.organization.currentProject.currentRun.instructions;
		$("#instruction_list").append(instruction.toString());
	},
	generateDistributeInstruction: function(evt) {
		var fromContainer = TestData.getRandomContainer();
		var toContainer = TestData.getRandomContainer();
		
		var fromWell = TestData.getRandomWell(fromContainer);
		var toWell = TestData.getRandomWell(toContainer);

		var volume = Math.floor(Math.random() * 1000);

		var instructionData = {
			container: fromContainer,
			from: fromWell,
			to: [toWell],
			volume: volume
		}

		var instruction = new Transcriptic.Instruction.Distribute(instructionData);
		Transcriptic.organization.currentProject.currentRun.addInstruction(instruction);
		var instructions = Transcriptic.organization.currentProject.currentRun.instructions;
		$("#instruction_list").append(instruction.toString());
	},
	generateContainerList: function() {
		var func1 = function(evt) {
			console.log("FUNC ONE");
			console.log($(evt.currentTarget));
		};
		var func2 = function(evt) {
			console.log("FUNC TWO");
			console.log($(evt.currentTarget).data());
		};

		var treeData = [{
			text: "Containers",
			nodes: [
				{text: "container_one"}, 
				{
					text: "container_two",
					data: {index: 0, type: "test"},
					nodes: [
						{text: "subcontainer1"},
						{
							text: "subcontainer2",
							callback: func1
						}
					]
				},
				{
					text: "container_three",
					data: {index: 1, type: "other test"},
					callback: func2
				},
				{text: "container_four"}
			]
		}];

		var treeWidget = new Transcriptic.Tree.TreeWidget("#container-workspace");
		treeWidget.renderTree(treeData);
	},
	bindEventListeners: function(){
		$("button#test_container").on("click", TestData.generateTestContainer.bind(this));
		$("button#test_transfer").on("click", TestData.generateTransferInstruction.bind(this));
		$("button#test_distribute").on("click", TestData.generateDistributeInstruction.bind(this));
		$("button#test_container_tree").on("click", TestData.generateContainerList.bind(this));
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