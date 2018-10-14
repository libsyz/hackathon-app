import { ToolsProblemStatementPage } from './../../pages/tools-problem-statement/tools-problem-statement';
import { Hackathon } from './../../models/hackathon.model';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';


@Injectable()
export class HackathonService {
  allHackathons: Hackathon[];
  securityBool = "granted";

  constructor() {
    console.log('Hello HackathonServiceProvider');
    this.allHackathons = [];
  }

  getHackathons(){
    return this.allHackathons;
  }

  saveHackathon(hackathon){
    this.allHackathons.push(hackathon);
  }

  createHackathon(){
    const newHackathon = new Hackathon;
    // give the hackathon the last ID. 
    // If there are no previous hackathons, give it an ID of 1.
    this.provideLastID(newHackathon);
    this.saveHackathon(newHackathon);
    console.log(newHackathon);
    return newHackathon;
    // Add the hackathon to the repo
    // Now I have 
  }


  provideLastID(myHackathon: Hackathon){
      if(this.allHackathons == undefined) {
        myHackathon.id = 1;
      }
      else {
        let idCounter = 0;
        this.allHackathons.forEach((hackathon) => {
           hackathon.id > idCounter ? idCounter = hackathon.id : "";
        });
        myHackathon.id = idCounter + 1;
      }
    }

  findHackathon(id) {
     let foundHack: Hackathon;
     this.allHackathons.forEach((hack)=> {
      if(hack.id == id) {
        foundHack = hack;
      }
    })
    return foundHack;
  }

  addHacker(id: number, hacker: any, slot: number) {
    const foundHack = this.allHackathons[id - 1];
    
    this.checkContraints(foundHack, hacker, slot);

    console.log(this.allHackathons);
    console.log(this.securityBool);
    this.securityBool == "granted" ? foundHack.users[slot] = hacker : "";
    return this.securityBool;
  }

  checkContraints(foundHack, hacker, slot) {
    this.securityBool = "granted";
    foundHack.users.forEach((user)=> {
      if (user.name == hacker.name) {
        this.securityBool = "denied";
      }
    })
  }

  clearHacker(hackId, slot) {
    console.log(hackId, slot);
    let foundHack = this.allHackathons[hackId - 1];
    foundHack.users[slot] = "";
  }

  getNumberOfHackers(hackId) {
    const foundHack = this.allHackathons[hackId.hackathonId - 1];
    let numberOfHackers = 0;
    console.log(hackId);
    console.log(this.allHackathons);
    foundHack.users.forEach((user)=> {
      user == "" ? numberOfHackers : numberOfHackers++;
    })
    return numberOfHackers;
  }

  getTools(hackId){
    const foundHack = this.allHackathons[hackId - 1];
    let phase1Completed = foundHack.phases['phase1']['completed']
    let pageToGo: any;
    phase1Completed ?  console.log("This was completed!") : pageToGo = ToolsProblemStatementPage
    return pageToGo;
  }

}
