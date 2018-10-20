
export class Hackathon {
    title: string = "nothing";
    id: number = 0;
    users: any[] = ["","","","",""];
    phases: {}[] = [
        {
            phaseNumber: 1,
            phaseHeader: "Problem Statement",
            wellHackedText: "Problem Statement", 
            problemStatement: '',
            completed: false
        },
        {
            phaseNumber: 2,
            phaseHeader: "Empathise",
            wellHackedText: "Ideas", 
            pictures: [],
            completed: false
        },
        {
            phaseNumber: 3,
            phaseHeader: "Ideate",
            wellHackedText: "Prototype", 
            pictures: [],
            completed: false
            
        },
        {
            phaseNumber: 4,
            phaseHeader: "Test",
            wellHackedText: "Test Protocol", 
            actions: [],
            timePeriod: "",
            completed: false
        }
    ]
    
}