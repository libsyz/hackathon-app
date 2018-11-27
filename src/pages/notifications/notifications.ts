import { NotificationsProvider } from './../../providers/notifications/notifications';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public notificationSrvc: NotificationsProvider) {
  }

  notifications: any[];
  
  ionViewDidLoad() {
    // this.notifications = this.notificationSrvc.getNotifications();
    this.refreshNotifications();
  }

  refreshNotifications() {
    setInterval(() => {
      // this.notifications = this.notificationSrvc.getNotifications();
    }, 3000);
  } 
}
