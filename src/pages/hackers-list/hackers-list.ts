import { hackersList } from './../../services/hackers-list.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the HackersListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hackers-list',
  templateUrl: 'hackers-list.html',
})
export class HackersListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private hackersListSrvc: hackersList,
              public viewCtrl: ViewController) {
  }

 hackers: any;

  ionViewDidLoad() {
    console.log(this.navParams.data);
    console.table(this.hackersListSrvc.getUsers())
    this.hackers = this.hackersListSrvc.getUsers();
  }

  dropPage() {
    this.viewCtrl.dismiss({data: "clear"});
  }

selectHacker(hacker) {
    this.viewCtrl.dismiss({data: hacker});
  }

}
