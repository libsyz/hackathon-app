
export class Hackathon {
    title: string = "nothing";
    id: number = 0;
    users: any[] = ["","","","",""];
    phases: {}[] = [
        {
            phaseNumber: 1,
            phaseHeader: "Problem Statement",
            helperText: "Define your problem with 'How might we..' questions",
            wellHackedText: "Problem Statement", 
            problemStatement: '',
            completed: false
        },
        {
            phaseNumber: 2,
            phaseHeader: "Empathise",
            helperText: "Get into the shoes of your users and walk a mile!",
            wellHackedText: "Ideas", 
            pictures: [],
            completed: false
        },
        {
            phaseNumber: 3,
            phaseHeader: "Ideate",
            helperText: "Generate as many ideas as possible. Go for volume",
            wellHackedText: "Prototype", 
            pictures: [],
            completed: false
            
        },
        {
            phaseNumber: 4,
            phaseHeader: "Prototype",
            helperText: "What would an MVP look like?",
            wellHackedText: "Prototype", 
            pictures: [],
            timePeriod: "",
            completed: false
        },
        {
            phaseNumber: 5,
            phaseHeader: "Test",
            helperText: "How would you validate your idea? What assumptions need to be tested?",
            wellHackedText: "Test Protocol", 
            actions: [],
            timePeriod: "",
            completed: false
        }
    ]
    
}