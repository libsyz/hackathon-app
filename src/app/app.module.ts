
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// Pages

import { HomePage } from '../pages/home/home';
import { ChooseHackersPage } from './../pages/choose-hackers/choose-hackers';

// Components

import { HackerAvatarComponent } from './../components/hacker-avatar/hacker-avatar';
import { HackersListPage } from '../pages/hackers-list/hackers-list';

// Services

import { hackersList } from './../services/hackers-list.service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChooseHackersPage,
    HackerAvatarComponent,
    HackersListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChooseHackersPage,
    HackerAvatarComponent,
    HackersListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    hackersList,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
