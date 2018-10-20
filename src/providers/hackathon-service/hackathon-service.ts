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
      if(hack.id == id) {
        foundHack = hack;
      }
    })
    return foundHack;
  }

  addHacker(id: number, hacker: any, slot: number) {
    const foundHack = this.allHackathons[id - 1];
    this.checkIfHackerWasSelected(foundHack, hacker, slot);
    if (this.canAddHackerCheck == "granted") foundHack.users[slot] = hacker;
    return this.canAddHackerCheck;
  }

  checkIfHackerWasSelected(foundHack, hacker, slot) {
    foundHack.users.forEach((user)=> {
      if (user.name == hacker.name) this.canAddHackerCheck = "denied";
    })
  }

  clearHacker(hackId, slot) {
    let foundHack = this.allHackathons[hackId - 1];
    foundHack.users[slot] = "";
  }

  getNumberOfHackers(hackId) {
    const foundHack = this.allHackathons[hackId.hackathonId - 1];
    let numberOfHackers = 0;
    foundHack.users.forEach((user)=> { 
      if (user != "") numberOfHackers++;
    })
    return numberOfHackers;
  }

  getTools(hackId){
    const foundHack = this.allHackathons[hackId - 1];
    // All this logic needs to be extracted into a tools Service
    
    let phase1Completed = foundHack.phases['phase1']['completed']
    let pageToGo: any;
    phase1Completed ?  console.log("This was completed!") : pageToGo = ToolsProblemStatementPage
    return pageToGo;
  }

  saveProblemStatement(inputText: string, hackId) {
    const foundHack = this.allHackathons[hackId -1];
    foundHack.phases[0]['problemStatement'] = inputText;
  }

}
