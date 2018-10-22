import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})

export class CameraPage {
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('video') video: ElementRef;
  @ViewChild('image') image: ElementRef;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public hackSrvc: HackathonService,
              public alertCtrl: AlertController) {
  }

  videoSource: any;
  pictureTaken: boolean = false;
  imageData: any;
  hackId: number;
  currentPhase: number;

  ionViewDidLoad() {
    console.log(this.navParams);
    this.enableCamera();
    this.hackId = this.navParams.get("hackathonId");
    this.currentPhase = this.hackSrvc.getCurrentPhase(this.hackId);
    }

  enableCamera(){
    navigator.mediaDevices.getUserMedia({video: true}).
    then((stream) => {this.videoSource = stream});
  }

  takePicture() {
    let targetCanvas = this.canvas.nativeElement as HTMLCanvasElement;
    let myVideo = this.video.nativeElement as HTMLVideoElement;

    [targetCanvas.height, targetCanvas.width] = [myVideo.videoHeight, myVideo.videoWidth];
  
    let context = targetCanvas.getContext("2d");
    context.drawImage(myVideo, 0, 0);

    this.imageData = targetCanvas.toDataURL('image/png');
    this.image.nativeElement.src = this.imageData;

    this.changeVisibilityConditions()
  }

  savePicture() {
    console.log(this.imageData);
    try {
      this.hackSrvc.savePicture(this.hackId, this.currentPhase, this.imageData);
    }
    catch (e) {
      console.log(e);
      let alert = this.alertCtrl.create({
        title: "Sorry!",
        subTitle: "Something went wrong",
        buttons: ["sucks!"]
      })
      alert.present();
    }
  }

  discardPicture() {
    this.changeVisibilityConditions();
    this.imageData = '';
    this.image.nativeElement.src = '';
  }

  changeVisibilityConditions() {
    this.image.nativeElement.hidden = !this.image.nativeElement.hidden;
    this.video.nativeElement.hidden = !this.video.nativeElement.hidden;
    this.pictureTaken = !this.pictureTaken;
  }


}
