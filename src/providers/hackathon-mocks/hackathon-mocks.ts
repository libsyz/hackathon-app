import { Hackathon } from './../../models/hackathon.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the HackathonMocksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HackathonMocksProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HackathonMocksProvider Provider');
  }

  hack1: Hackathon;
  hack2: Hackathon;
  
  generateHack1() {
    const myHack = new Hackathon;
    myHack.id = 1;
    myHack.title = "Bender's big idea";
    myHack.users = ["", "", "", "", ""]
    myHack.phases = [
      {
          phaseNumber: 1,
          phaseHeader: "Problem Statement",
          helperText: "Define your problem with 'How might we..' questions",
          wellHackedText: "Problem Statement", 
          problemStatement: 'How could we kill all humans?',
          completed: true
      },
      {
          phaseNumber: 2,
          phaseHeader: "Empathise",
          helperText: "Get into the shoes of your users and walk a mile!",
          wellHackedText: "Ideas", 
          pictures: ["./../../assets/imgs/hack-images/empathise-1.jpg"],
          completed: true
      },
      {
          phaseNumber: 3,
          phaseHeader: "Ideate",
          helperText: "Generate as many ideas as possible. Go for volume",
          wellHackedText: "Prototype", 
          pictures: ["./../../assets/imgs/hack-images/ideate-1.png"],
          completed: true
          
      },
      {
          phaseNumber: 4,
          phaseHeader: "Prototype",
          helperText: "What would an MVP look like?",
          wellHackedText: "Prototype", 
          pictures: ["./../../assets/imgs/hack-images/prototype-1.png"],
          timePeriod: "",
          completed: false
      },
      {
          phaseNumber: 5,
          phaseHeader: "Test",
          helperText: "How would you validate your idea? What assumptions need to be tested?",
          wellHackedText: "Test Protocol", 
          actions: ["action 1", "action 2", "action 3", "action 4", "action 5"],
          timePeriod: "",
          completed: false
      }
  ]

    this.hack1 = myHack;
    return this.hack1;
  }

  generateHack2() {
    const myHack = new Hackathon;
    myHack.id = 2;
    myHack.owner = {
      name: "Bruce Wayne",
      imageUrl: "./../../assets/imgs/bruce_wayne.jpg",
    }
    myHack.title = "Bruce's masterplan";
    myHack.users = ["", "", "", "", ""]
    myHack.phases = [
      {
          phaseNumber: 1,
          phaseHeader: "Problem Statement",
          helperText: "Define your problem with 'How might we..' questions",
          wellHackedText: "Problem Statement", 
          problemStatement: 'How could we stop Superman?',
          completed: true
      },
      {
          phaseNumber: 2,
          phaseHeader: "Empathise",
          helperText: "Get into the shoes of your users and walk a mile!",
          wellHackedText: "Ideas", 
          pictures: ["./../../assets/imgs/hack-images/empathise-2.jpeg"],
          completed: true
      },
      {
          phaseNumber: 3,
          phaseHeader: "Ideate",
          helperText: "Generate as many ideas as possible. Go for volume",
          wellHackedText: "Prototype", 
          pictures: ["./../../assets/imgs/hack-images/ideate-2.jpeg"],
          completed: true
          
      },
      {
          phaseNumber: 4,
          phaseHeader: "Prototype",
          helperText: "What would an MVP look like?",
          wellHackedText: "Prototype", 
          pictures: ["./../../assets/imgs/hack-images/prototype-2.jpg"],
          timePeriod: "",
          completed: false
      },
      {
          phaseNumber: 5,
          phaseHeader: "Test",
          helperText: "How would you validate your idea? What assumptions need to be tested?",
          wellHackedText: "Test Protocol", 
          actions: [ "Consult with Justice Leage", "Consult with Lucius Fox", "Test armor with Wonderwoman"],
          timePeriod: "5 weeks",
          completed: false
      }
  ]
    this.hack2 = myHack;
    return this.hack2;
  }

  


}
