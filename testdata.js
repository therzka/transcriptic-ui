o = new Transcriptic.Organization({organizationID: "234sdklfj", organizationName: "Apple"});
p = new Transcriptic.Project({projectName: "PCR", projectID: 324234});
c = new Transcriptic.Container({containerName: "resource", containerType: "96-pcr", storage: "ambient", containerID: 134234});
r = new Transcriptic.Run({title: "loxcre pcr"});
i1 = new Transcriptic.Instruction.Distribute({container: c, from: c.wells[1], to: [c.wells[2],c.wells[3]], volume: 4}) 
i2 = new Transcriptic.Instruction.Distribute({container: c, from: c.wells[4], to: [c.wells[22],c.wells[23]], volume: 4}) 
i3 = new Transcriptic.Instruction.Transfer({container: c, from: c.wells[5], to: c.wells[42], volume: 5}) 
i4 = new Transcriptic.Instruction.Transfer({container: c, from: c.wells[6], to: c.wells[52],volume: 5}) 
i5 = new Transcriptic.Instruction.Seal({container: c})

o.addProject(p);
o.addContainer(c)
p.addRun(r)
r.addInstruction(i1)
r.addInstruction(i2)
r.addInstruction(i3)
r.addInstruction(i4)
r.addInstruction(i5)