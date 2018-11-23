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

  constructor(public http: HttpClient) {
    console.log('Hello NotificationsProvider Provider');
  }

  notifications: any[] = [];

  buildNotification(hackathon: Hackathon) {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const notification = `Hacker ${hackathon.owner.name} got stuck at ${hour}:${minutes} !`
    return notification;
  }

  addNotification(notification) {
    this.notifications.push(notification);
    console.log(this.notifications);
  }

  getNotifications() {
    return this.notifications;
  }

  clearNotifications() {
    this.notifications = [];
  }
}
