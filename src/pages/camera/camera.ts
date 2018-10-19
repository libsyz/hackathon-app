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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videoSource: any;
  pictureTaken: boolean = false;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
    this.enableCamera();
    }


  enableCamera(){
  navigator.mediaDevices.getUserMedia({video: true}).
  then((stream) => {this.videoSource = stream});
  }

  takePicture() {
    let targetCanvas = this.canvas.nativeElement as HTMLCanvasElement;
    let myVideo = this.video.nativeElement as HTMLVideoElement;
    let context = targetCanvas.getContext("2d");
    targetCanvas.style.height = '100%';
    targetCanvas.style.width = '100%';
    context.drawImage(myVideo, 0, 0, 640, 480);
    this.hideVideo()
    this.pictureTaken = true;
  }

  hideVideo(){
    const videoHidden = this.video.nativeElement as HTMLVideoElement;
    videoHidden.height = 0;
    videoHidden.width = 0;
  }
}
