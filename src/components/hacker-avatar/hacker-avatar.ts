import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { HackersListPage } from './../../pages/hackers-list/hackers-list';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the HackerAvatarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hacker-avatar',
  templateUrl: 'hacker-avatar.html'
})


export class HackerAvatarComponent {
  @Input() hackerName: any;
  @Output() wasSelected = new EventEmitter();

  hackerSelected: boolean = false;
  hackerId: number;
  hackerImageReference: string;
  text: string;
  currentHackId: number;

  constructor(public modalCtrl: ModalController,
              public navCtrl: NavController,
              public navParams: NavParams) {
    this.currentHackId = this.navParams.get("hackathonId");
    this.text = 'Hello World';
  }


  showHackersModal() {
    const myModal = this.modalCtrl.create(HackersListPage, {hackathonId: this.currentHackId,
                                                            hackerId: this.hackerId});
    myModal.onDidDismiss((hackerData)=> {
      this.updateHackerStatus(hackerData);
    })
    myModal.present();
  }

  updateHackerStatus(hacker) {
    console.log(hacker);
    if (hacker.data != "clear") {
      this.hackerSelected = true;
      this.hackerId = hacker.hacker.id;
      this.hackerName = hacker.hacker.firstName;
      this.hackerImageReference = hacker.hacker.avatarPic;
      this.emitData();
    }
    else {
      this.hackerSelected = false;
      this.hackerId = null;
      this.hackerName = null;
      this.hackerImageReference = '';
      this.emitData();
    }

  }

  emitData() {
  this.wasSelected.emit({ 
                            hackerSelected: this.hackerSelected, 
                            hackerName: this.hackerName
                          });
  }
}
