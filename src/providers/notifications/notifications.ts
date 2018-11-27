import { HackathonService } from './../hackathon-service/hackathon-service';
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
              public authSrvc: AuthProvider,
              public hackSrvc: HackathonService) {
    console.log('Hello NotificationsProvider Provider');
  }

  notifications: any[] = [];
  // This needs to push notifications to the panel via http!
  notificationsApiEndpoint = "http://localhost/api/notifications"

  addNotification() {
    return this.http.post(this.notificationsApiEndpoint, 
                  { hack_id: this.hackSrvc.currentHackId })
  }


}
