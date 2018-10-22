import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
              public hackSrvc: HackathonService) {
  }

  videoSource: any;
  pictureTaken: boolean = false;
  imageData: any;
  

  ionViewDidLoad() {
    console.log(this.navParams);
    this.enableCamera();
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
    // stores the pic into the right hackathon, right phase
    // sends the user to the right page! 
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
