
import { HttpClient } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// Pages

import { HomePage } from '../pages/home/home';
import { ChooseHackersPage } from './../pages/choose-hackers/choose-hackers';
import { TimerPage } from './../pages/timer/timer';
import { ToolsProblemStatementPage } from './../pages/tools-problem-statement/tools-problem-statement';


// Components

import { HackerAvatarComponent } from './../components/hacker-avatar/hacker-avatar';
import { HackersListPage } from '../pages/hackers-list/hackers-list';
import { CountdownComponent } from './../components/countdown/countdown';



// Services

import { hackersList } from './../services/hackers-list.service';
import { HackathonService } from '../providers/hackathon-service/hackathon-service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChooseHackersPage,
    HackerAvatarComponent,
    HackersListPage,
    TimerPage,
    CountdownComponent,
    ToolsProblemStatementPage
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
    HackersListPage,
    TimerPage,
    CountdownComponent,
    ToolsProblemStatementPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    hackersList,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HackathonService,
    HttpClient,
  ]
})
export class AppModule {}
