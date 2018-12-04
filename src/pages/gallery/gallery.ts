import { HackathonShowPage } from './../hackathon-show/hackathon-show';
import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { Hackathon } from './../../models/hackathon.model';
import { HelperMethodsProvider } from './../../providers/helper-methods/helper-methods';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

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
              public hackSrvc: HackathonService,
              public loadingCtrl: LoadingController) {
  }

  hacksToDisplay: any[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
    let loading = this.loadingCtrl.create();
    loading.setContent("loading hackathons...")
    loading.present();
    this.importHackathons();
    loading.dismiss();
  }

  async importHackathons() {
    let hackathons: any;
    hackathons = await this.hackSrvc.getHackathons().toPromise();
    this.hacksToDisplay = hackathons['hackathons'];
  }
  buildingAmazing(){
    this.helperCtrl.buildingAmazing();
  }

  showHackathon(hackathon){
  this.navCtrl.push(HackathonShowPage, {hack: hackathon})
  }



}
