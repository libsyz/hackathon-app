import { ToolsProblemStatementPage } from './../../pages/tools-problem-statement/tools-problem-statement';
import { Hackathon } from './../../models/hackathon.model';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';


@Injectable()
export class HackathonService {
  allHackathons: Hackathon[] = [];
  canAddHackerCheck = "granted";

  constructor() {
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
      if(hack.id == id) foundHack = hack;
      })
     return foundHack;

  }

  addHacker(id: number, hacker: any, slot: number) {
    const foundHack = this.allHackathons[id - 1];
    this.checkIfHackerWasSelected(foundHack, hacker);
    if (this.canAddHackerCheck == "granted") foundHack.users[slot] = hacker;
    return this.canAddHackerCheck;
  }

  checkIfHackerWasSelected(foundHack, hacker) {
    foundHack.users.forEach((user)=> {
      if (user.name == hacker.name) this.canAddHackerCheck = "denied";
    })
  }

  clearHacker(hackId, slot) {
    let foundHack = this.allHackathons[hackId - 1];
    foundHack.users[slot] = "";
    this.canAddHackerCheck = "granted";
  }

  getNumberOfHackers(hackId) {
    const foundHack = this.allHackathons[hackId.hackathonId - 1];
    let numberOfHackers = 0;
    foundHack.users.forEach((user)=> { 
      if (user != "") numberOfHackers++;
    })
    return numberOfHackers;
  }

  saveProblemStatement(inputText: string, hackId) {
    const foundHack = this.allHackathons[hackId -1];
    foundHack.phases[0]['problemStatement'] = inputText;
    this.markPhaseAsCompleted(hackId, 1);
  }

  getCurrentPhase(hackId) {
    const foundHack = this.allHackathons[hackId -1];
    const currentPhase = foundHack.phases.find((phase) => {
      return phase['completed'] == false;
    })
    return currentPhase['phaseNumber'];
    
  }

  markPhaseAsCompleted(hackId, phaseNumber) {
    const foundHack = this.allHackathons[hackId -1];
    const phaseToMark = foundHack.phases.find((phase) => {
      return phase['phaseNumber'] == phaseNumber;
    })
    phaseToMark['completed'] = true;
  }

  savePictureInPhase(hackId, currentPhase, image) {
    debugger
    const foundHack = this.allHackathons[hackId - 1];
    const foundPhase = foundHack.phases.find((phase)=> {
      return phase['phaseNumber'] == currentPhase;
    })
    foundPhase['pictures'].push(image);
  }

}
