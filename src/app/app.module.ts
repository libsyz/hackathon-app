

import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Config } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';

// Pages

import { HomePage } from '../pages/home/home';
import { ChooseHackersPage } from './../pages/choose-hackers/choose-hackers';
import { TimerPage } from './../pages/timer/timer';
import { DefineProblemPage } from './../pages/define-problem/define-problem';
import { DefineTestProtocolPage } from './../pages/define-test-protocol/define-test-protocol';
import { CameraPage } from './../pages/camera/camera';
import { WellHackedPage } from './../pages/well-hacked/well-hacked';
import { GalleryPage } from './../pages/gallery/gallery';
import { ToolsProblemStatementPage } from './../pages/tools-problem-statement/tools-problem-statement';
import { UploadPicturePage } from './../pages/upload-picture/upload-picture';
import { ToolsEmpathisePage } from './../pages/tools-empathise/tools-empathise';
import { ToolsIdeatePage } from '../pages/tools-ideate/tools-ideate';
import { ToolsPrototypePage } from './../pages/tools-prototype/tools-prototype';
import { ReviewHackPage } from './../pages/review-hack/review-hack';
import { ToolsTestPage } from './../pages/tools-test/tools-test';
import { ConfigPage } from './../pages/config/config';
import { HackathonShowPage } from './../pages/hackathon-show/hackathon-show';


// Components

import { HackerAvatarComponent } from './../components/hacker-avatar/hacker-avatar';
import { HackersListPage } from '../pages/hackers-list/hackers-list';
import { CountdownComponent } from './../components/countdown/countdown';



// Services

import { hackersList } from './../services/hackers-list.service';
import { HackathonService } from '../providers/hackathon-service/hackathon-service';
import { HelperMethodsProvider } from '../providers/helper-methods/helper-methods';
import { ToolsProvider } from '../providers/tools/tools';
import { PageNavigationProvider } from '../providers/page-navigation/page-navigation';
import { TimerConfigProvider } from '../providers/timer-config/timer-config';
import { WindowProvider } from '../providers/window/window';
import { HackathonMocksProvider } from '../providers/hackathon-mocks/hackathon-mocks';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChooseHackersPage,
    HackerAvatarComponent,
    HackersListPage,
    TimerPage,
    CountdownComponent,
    ToolsProblemStatementPage,
    DefineProblemPage,
    WellHackedPage,
    GalleryPage,
    CameraPage,
    ToolsEmpathisePage,
    UploadPicturePage,
    DefineTestProtocolPage,
    ToolsIdeatePage,
    ToolsPrototypePage,
    ToolsTestPage,
    ReviewHackPage,
    ConfigPage,
    HackathonShowPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
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
    ToolsProblemStatementPage,
    DefineProblemPage,
    WellHackedPage,
    GalleryPage,
    CameraPage,
    ToolsEmpathisePage,
    UploadPicturePage,
    DefineTestProtocolPage,
    ToolsIdeatePage,
    ToolsPrototypePage,
    ToolsTestPage,
    ReviewHackPage,
    ConfigPage,
    HackathonShowPage
],
  providers: [
    StatusBar,
    SplashScreen,
    hackersList,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HackathonService,
    HttpClient,
    HelperMethodsProvider,
    ToolsProvider,
    PageNavigationProvider,
    TimerConfigProvider,
    WindowProvider,
    HackathonMocksProvider,
  ]
})
export class AppModule {}
