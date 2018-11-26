import { AuthProvider } from './../auth/auth';
import { Hackathon } from './../../models/hackathon.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationsProvider {

  constructor(public http: HttpClient,
              public authSrvc: AuthProvider) {
    console.log('Hello NotificationsProvider Provider');
  }

  notifications: any[] = [];
  // This needs to push notifications to the panel via http!
  buildNotification(hackathon) {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const hackerName = `${this.authSrvc.userData.firstName} ${this.authSrvc.userData.lastName}`
    const notification = `Hacker ${hackerName} got stuck at ${hour}:${minutes} !`
    return notification;
  }

  addNotification(notification) {
    this.notifications.push(notification);
    console.log(this.notifications);
  }

}
