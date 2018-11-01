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
    const myModal = this.modalCtrl.create(HackersListPage, {hackathonId: this.currentHackId, slot: this.slot});
    myModal.onDidDismiss((data)=> {
      this.updateHackerStatus(data);
    })
    myModal.present();
  }

  updateHackerStatus(data) {
    if (data.data != "clear") {
      this.hackerSelected = true;
      this.hackerName = data.hacker.name;
      this.hackerImageReference = data.hacker.imageUrl;
      this.emitData();
    }
    else {
      this.hackerSelected = true;
      this.hackerName = '';
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
