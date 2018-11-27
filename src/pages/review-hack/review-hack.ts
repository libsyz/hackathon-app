import { FinalWellHackedPage } from './../final-well-hacked/final-well-hacked';
import { AuthProvider } from './../../providers/auth/auth';
import { HttpClient } from '@angular/common/http';
import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { Hackathon } from './../../models/hackathon.model';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';

/**
 * Generated class for the ReviewHackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-hack',
  templateUrl: 'review-hack.html',
})
export class ReviewHackPage {
  @ViewChild('hackathonInfo') hackathonInfo: ElementRef;
  // hackathonInfoVariables

  problemStatement: string;
  empathiseImageURL: string;
  ideateImageURL: string;
  prototypeImageURL: string;
  testProtocol: any;
  testTimeframe: any;
  aheaders: any;
  // hackathonIdentifier

  hackathonToShow: any;
  hackId: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public hackSrvc: HackathonService,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public authSrvc: AuthProvider,
              public http: HttpClient) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create()
    loading.setContent("Fetching data...")
    loading.present();

    // all this shit between //// is setup - God knows I gotta become better at testing

    ////
    this.authSrvc.userData = {    token: "VmFrxdFEu2XnWNZ6p2Us",
                                  firstName: "sample",
                                  lastName: "sample",
                                  position: "sample",
                                  company: "sample" }
    this.aheaders = this.authSrvc.getAuthenticatedHeaders();

    ////
    this.loadHackathonInfo();
    this.showTargetData("empathise");
    loading.dismiss();

  }

  async loadHackathonInfo(){

    // response should change back to this.hackSrvc.getSingleHackathon().toPromise() aftertesting  
    let response = await this.http.get("http://localhost:3000/api/hackathons/217", { headers: this.aheaders} ).toPromise();
    console.log(response);
    this.hackathonToShow = response['hackathon'];
    this.problemStatement =  this.hackathonToShow['problem_statement']
    this.empathiseImageURL =  this.hackathonToShow['empathise_url']
    this.ideateImageURL=  this.hackathonToShow['ideate_url']
    this.prototypeImageURL =  this.hackathonToShow['prototype_url']
    this.testProtocol = this.hackathonToShow['test_protocol']
    this.testTimeframe =  this.hackathonToShow['test_timeframe']
  }

  showSection(){
    this.highlightTargetTab(event);
    let dataset = event.srcElement.parentElement.dataset;
    this.showTargetData(dataset.phase);
  }

  highlightTargetTab(event: Event) {
    let clickedTab = event.srcElement.parentElement;
    let allTabs = Array.from(event.srcElement.parentElement.parentElement.children);
    allTabs.forEach((tab)=> {
      tab.classList.remove('active');
    })
    clickedTab.classList.add('active');
  }

  showTargetData(phase) {
    let hackInfo = this.hackathonInfo.nativeElement as HTMLElement;
    // hide all the information
    let hackInfoArray = Array.from(hackInfo.children);
    // show only the phase that matters
    hackInfoArray.forEach((div: HTMLElement)=> {
      console.dir(div);
      if (div.dataset.phase == phase) {
        div.classList.remove('hidden');
      }
      else {
        div.classList.add('hidden');
      }
    })
  }

  goToSaveHackathon() {
    this.showSavePrompt();
  }

showSavePrompt() {
    const savePrompt = this.alertCtrl.create({
      title: 'Save your hackathon',
      message: "Enter a catchy name that gets eyes on your team's idea!",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            // data format => {title: "string"}
            this.hackSrvc.addTitleToHackathon(data).toPromise().then(data => { console.log(data) });
            this.navCtrl.push(FinalWellHackedPage)
          }
        }
      ]
    });
    savePrompt.present();
  }
}
