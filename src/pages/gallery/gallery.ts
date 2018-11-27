import { HackathonShowPage } from './../hackathon-show/hackathon-show';
import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { HackathonMocksProvider } from './../../providers/hackathon-mocks/hackathon-mocks';
import { Hackathon } from './../../models/hackathon.model';
import { HelperMethodsProvider } from './../../providers/helper-methods/helper-methods';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public helperCtrl: HelperMethodsProvider,
              public mockSrvc: HackathonMocksProvider,
              public hackSrvc: HackathonService) {
  }

  hacksToDisplay: Hackathon[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
    this.importHackathons();
  }

  importHackathons() {
    // this.hacksToDisplay = this.hackSrvc.getHackathons();
    // Api call to get all hackathons and then display
  }
  buildingAmazing(){
    this.helperCtrl.buildingAmazing();
  }

  showHackathon(hackathon){
  this.navCtrl.push(HackathonShowPage, {showHackId: hackathon.id})
  }



}
