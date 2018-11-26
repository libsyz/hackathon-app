import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { Hackathon } from './../../models/hackathon.model';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the HackathonShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hackathon-show',
  templateUrl: 'hackathon-show.html',
})
export class HackathonShowPage {
  @ViewChild('hackathonInfo') hackathonInfo: ElementRef;

  // hackathonInfoVariables

  problemStatement: string;
  empathiseImageURL: string;
  ideateImageURL: string;
  prototypeImageURL: string;
  testActions: string[];
  testTimeframe: string;

  // hackathonIdentifier

  currentHackathon: Hackathon;
  hackId: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public hackSrvc: HackathonService,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewHackPage');
    this.hackId = this.navParams.get("showHackId");
    // this.loadHackathonInfo(this.hackId);
    this.showTargetData("empathise");
  }

  // loadHackathonInfo(hackId){
  //   const hackathonToLoad = this.hackSrvc.findHackathon(hackId);
  //   this.problemStatement = hackathonToLoad.phases[0]['problemStatement'];
  //   this.empathiseImageURL = hackathonToLoad.phases[1]['pictures'][0];
  //   this.ideateImageURL= hackathonToLoad.phases[2]['pictures'][0];
  //   this.prototypeImageURL= hackathonToLoad.phases[3]['pictures'][0];
  //   this.testActions = hackathonToLoad.phases[4]['actions'];
  //   this.testTimeframe = hackathonToLoad.phases[4]['timePeriod'];
  // }

  showSection(){
    this.highlightTargetTab(event);
    let dataset = event.srcElement.parentElement.dataset;
    this.showTargetData(dataset.phase);
    // activate your current section
    // second behavior - show the right content
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
    let hackInfoArray = Array.from(hackInfo.children);
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

  buildingAmazing() {
    let myAlert = this.alertCtrl.create({
      title: "Hold on",
      subTitle: "We are building something amazing!",
      buttons: ["got it"]
    });
    myAlert.present();
  }


}
