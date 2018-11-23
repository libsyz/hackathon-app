export interface Phase {
    phaseNumber: number,
    phaseHeader: string,
    helperText: string,
    wellHackedText: string, 
    completed: boolean,
}

export interface DefinePhase extends Phase {
    problemStatement: string
}

export interface EmpathisePhase extends Phase {
    pictures: any[]
}

export interface IdeatePhase extends Phase {
    pictures: any[]
}

export interface PrototypePhase extends Phase {
    pictures: any[]
}

export interface TestPhase extends Phase {
    actions: any[],
    timePeriod: string
}