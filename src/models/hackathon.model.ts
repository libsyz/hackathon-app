
export class Hackathon {
    title: string = "nothing";
    id: number = 0;
    users: any[] = ["","","","",""];
    phases: {} = {
        phase1: {
            phaseNumber: 1,
            phaseHeader: "Problem Statement",
            wellHackedText: "Problem Statement", 
            problemStatement: '',
            completed: false
        },
        phase2: {
            phaseNumber: 2,
            phaseHeader: "Empathise",
            wellHackedText: "Ideas", 
            pictures: [],
            completed: false
        },
        phase3: {
            phaseNumber: 3,
            phaseHeader: "Ideate",
            wellHackedText: "Prototype", 
            pictures: [],
            completed: false
        },
        phase4: {
            phaseNumber: 4,
            phaseHeader: "Test",
            wellHackedText: "Test Protocol", 
            actions: [],
            timePeriod: "",
            completed: false
        }
    };
}