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
  currentHackathon: any;
  currentHackId: number;
  currentPhase: number;

  constructor(private http: HttpClient,
              private mockSrvc: HackathonMocksProvider,
              private authSrvc: AuthProvider) {
  }

  hackathonsEndpoint: string = "http://localhost:3000/api/hackathons"
  addHackerToHackathonEndpoint: string = "http://localhost:3000/api/hackathons/add_hacker"
  removeHackerFromHackathonEndpoint: string = "http://localhost:3000/api/hackathons/remove_hacker"
  editHackathonPhaseEndpoint: string = "http://localhost:3000/api/hackathon_phases/edit_phase"


  createHackathon(){
  const authHeaders = this.authSrvc.getAuthenticatedHeaders();
  return this.http.post(this.hackathonsEndpoint, { user: "watch the token" },  { headers: authHeaders })
  }


  addHackerToHackathon(hackerId: number, hackerInSlot:number,  hackathonId: any) {
    const authHeaders = this.authSrvc.getAuthenticatedHeaders();
    return this.http.patch(this.addHackerToHackathonEndpoint, 
                         {
                          hacker_id: hackerId,
                          hackathon_id: hackathonId,
                          hacker_in_slot_id: hackerInSlot
                          }, 
                          { headers: authHeaders} )
  }


  clearHacker(hackerName) {
    const authHeaders = this.authSrvc.getAuthenticatedHeaders();
    return this.http.patch(this.removeHackerFromHackathonEndpoint, 
                  {
                    hacker_in_slot_id: hackerName,
                    hackathon_id: this.currentHackId
                  }, 
                  { 
                    headers: authHeaders
                  })
  }

  getNumberOfHackers() {
    const authHeaders = this.authSrvc.getAuthenticatedHeaders();
    const hack_id  = this.currentHackId;
    return this.http.get(`http://localhost:3000/api/hackathons/${hack_id}`, {headers: authHeaders})
  }

  checkForEnoughHackers(hackersEnlisted){
    return hackersEnlisted > 2 ? true : false;
  }
  

  saveProblemStatement(inputText: string) {
    const authHeaders = this.authSrvc.getAuthenticatedHeaders();
    return this.http.patch(this.editHackathonPhaseEndpoint, 
                  {
                    hackathon_id: this.currentHackId,
                    phase_number: this.currentPhase,
                    edit_problem_statement: inputText
                  }, 
                  { 
                    headers: authHeaders 
                  })

  }

  savePicture(imageUrl) {
    const authHeaders = this.authSrvc.getAuthenticatedHeaders();
    return this.http.patch(this.editHackathonPhaseEndpoint, 
                  {
                    hackathon_id: this.currentHackId,
                    phase_number: this.currentPhase,
                    edit_image_url: imageUrl
                  }, 
                  { 
                    headers: authHeaders 
                  })

  }

  updateCurrentPhase() {
    const phaseFound = this.currentHackathon['phases'].find(phase => {
        return phase['completed'] == null })
    this.currentPhase = phaseFound['phaseOrder'];
  }



  saveTestActions(hackId, actionsArray: any[]) {

  }

  saveTestTimeframe(hackId, timeframe) {

  }

  importMockUps() {
  }

  


}
