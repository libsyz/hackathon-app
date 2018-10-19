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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videoSource: any;
  pictureTaken: boolean = false;
  imageData: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
    this.enableCamera();
    this.canvas.nativeElement.hidden = true;
    }


  enableCamera(){
  navigator.mediaDevices.getUserMedia({video: true}).
  then((stream) => {this.videoSource = stream});
  }

  takePicture() {
    this.canvas.nativeElement.hidden = false;
    // take the picture 
    let targetCanvas = this.canvas.nativeElement as HTMLCanvasElement;
    let myVideo = this.video.nativeElement as HTMLVideoElement;
    let context = targetCanvas.getContext("2d");
    console.dir(myVideo);
    context.drawImage(myVideo, 0, 0, myVideo.videoWidth, myVideo.videoHeight,
                               0, 0, 200, 200);
    // store the image info in a string - no need to show it now
    this.imageData = targetCanvas.toDataURL('image/png');
    console.log(this.imageData);

    this.image.nativeElement.src = this.imageData;
    this.image.nativeElement.hidden = false;
    targetCanvas.hidden = true;
    myVideo.hidden = true;
    this.pictureTaken = true;
    // show the canvas

    // 
   
    
  }

  savePicture() {
    console.log(this.photoData);
    // stores the pic into the right hackathon, right phase
  }
}
