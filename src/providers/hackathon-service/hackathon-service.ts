import { AuthProvider } from './../auth/auth';
  import { hackersList } from './../../services/hackers-list.service';
import { Hackathon } from './../../models/hackathon.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class HackathonService {
  currentHackathon: any;
  currentHackId: number;
  currentPhase: number;

  constructor(private http: HttpClient,
              private authSrvc: AuthProvider) {
  }

  hackathonsEndpoint: string = "https://hackathon-app.herokuapp.com/api/hackathons"
  addHackerToHackathonEndpoint: string = "https://hackathon-app.herokuapp.com/api/add_hacker"
  removeHackerFromHackathonEndpoint: string = "https://hackathon-app.herokuapp.com/api/remove_hacker"
  editHackathonPhaseEndpoint: string = "https://hackathon-app.herokuapp.com/api/hackathon_phases/edit_phase"


  createHackathon(){
  const authHeaders = this.authSrvc.getAuthenticatedHeaders();
  return this.http.post(this.hackathonsEndpoint, { user: "watch the token" },  { headers: authHeaders })
  }


  addHackerToHackathon(hackerId: number, hackerInSlot:number,  hackathonId: any) {
    const authHeaders = this.authSrvc.getAuthenticatedHeaders();
    return this.http.put(this.addHackerToHackathonEndpoint, 
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
    return this.http.get(`https://hackathon-app.herokuapp.com/api/hackathons/${hack_id}`, {headers: authHeaders})
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

  saveTest(actionArray, TestTimeframe) {
    
    const authHeaders = this.authSrvc.getAuthenticatedHeaders();
    return this.http.patch(this.editHackathonPhaseEndpoint, 
                  {
                    hackathon_id: this.currentHackId,
                    phase_number: this.currentPhase,
                    edit_test_protocol: actionArray,
                    edit_test_timeframe: TestTimeframe
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

  getHackathons(){
    const authHeaders = this.authSrvc.getAuthenticatedHeaders();
    return this.http.get(this.hackathonsEndpoint, {headers: authHeaders});
  }

  getSingleHackathon() {
    const authHeaders = this.authSrvc.getAuthenticatedHeaders();
    return this.http.get(this.hackathonsEndpoint + "/" + this.currentHackId, 
                        {headers: authHeaders});
  }

  setEndOfHackathon() {
    this.currentPhase = 6;
  }

  addTitleToHackathon(data){
    // The API signs the hackathon as as complete if the request is successful
    const authHeaders = this.authSrvc.getAuthenticatedHeaders();
    return this.http.put(this.hackathonsEndpoint + "/" + this.currentHackId, 
                         data, 
                         { headers: authHeaders })
  }

  clearApplicationState(){
    this.currentHackathon = null;
    this.currentHackId = null;
    this.currentPhase = null;
  }

}
