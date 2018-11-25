import { AuthProvider } from './../auth/auth';
import { hackersList } from './../../services/hackers-list.service';
import { HackathonMocksProvider } from './../hackathon-mocks/hackathon-mocks';
import { ToolsProblemStatementPage } from './../../pages/tools-problem-statement/tools-problem-statement';
import { Hackathon } from './../../models/hackathon.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';



@Injectable()
export class HackathonService {
  allHackathons: Hackathon[] = [];
  mockUpsImported: boolean = false;


  constructor(private httpSrvc: HttpClient,
              private mockSrvc: HackathonMocksProvider,
              private authSrvc: AuthProvider) {
  }

  hackathonsEndpoint: string = "http://localhost:3000/api/hackathons"

  getHackathons(){
    return this.allHackathons;
  }

  saveHackathon(hackathon: Hackathon){
    this.allHackathons.push(hackathon);
  }

  createHackathon(){
  const authHeaders = this.authSrvc.getAuthenticatedHeaders();
  return this.httpSrvc.post(this.hackathonsEndpoint, {user: "watch the token" },  { headers: authHeaders })
  }


  findHackathon(id) {
     let foundHack: Hackathon;
     this.allHackathons.forEach((hack)=> {
      if(hack.id == id) foundHack = hack;
      })
     return foundHack;
  }

  addHacker(id: number, hacker: any) {
    const foundHack = this.findHackathon(id);
    let alreadySelected = this.checkIfHackerWasAlreadySelected(foundHack, hacker);
    if (alreadySelected === false) foundHack.users.push(hacker);
    return alreadySelected;
  }

  checkIfHackerWasAlreadySelected(foundHack, hacker) {
    let hackerWasAlreadySelected = false;
    foundHack.users.forEach((user)=> {
      if (user.name == hacker.name) hackerWasAlreadySelected = true;
    })
    return hackerWasAlreadySelected
  }

  clearHacker(hackId, hackerName) {
    let foundHack = this.findHackathon(hackId);
    foundHack.users.forEach((user, index)=> {
      if (user.name == hackerName.name) {
        foundHack.users.splice(index, 1);
      }
    })
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
    const foundHack = this.allHackathons[hackId - 1];
    const foundPhase = foundHack.phases.find((phase)=> {
      return phase['phaseNumber'] == currentPhase;
    })
    foundPhase['pictures'].push(image);
  }

  saveTestActions(hackId, actionsArray: any[]) {
    const foundHack = this.allHackathons[hackId - 1];
    actionsArray.forEach((action) => {
      if (action != "") {
      foundHack.phases[4]['actions'].push(action);
      }
    })
  }

  saveTestTimeframe(hackId, timeframe) {
    const foundHack = this.allHackathons[hackId - 1];
    foundHack.phases[4]['timePeriod'] = timeframe;
  }

  importMockUps() {
    if (this.mockUpsImported == false) {
      let mockUp1 = this.mockSrvc.generateHack1();
      let mockUp2 = this.mockSrvc.generateHack2();
      this.saveHackathon(mockUp1);
      this.saveHackathon(mockUp2);
      this.mockUpsImported = true;
    }
  }

  


}
