import { SignInOrUpPage } from './../pages/sign-in-or-up/sign-in-or-up';
import { CameraPage } from './../pages/camera/camera';
import { ReviewHackPage } from './../pages/review-hack/review-hack';
import { HomePage } from './../pages/home/home';
import { DefineTestProtocolPage } from './../pages/define-test-protocol/define-test-protocol';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SignInOrUpPage;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // this.timerSrvc.loadConfig();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }
}

