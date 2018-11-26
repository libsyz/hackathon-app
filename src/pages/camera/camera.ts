import { WindowProvider } from './../../providers/window/window';
import { WellHackedPage } from './../well-hacked/well-hacked';
import { PageNavigationProvider } from './../../providers/page-navigation/page-navigation';
import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { Cloudinary } from 'cloudinary-core';


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
              public pageNavSrvc: PageNavigationProvider,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public windowSrvc: WindowProvider,
              public cloudinary: Cloudinary) {
              this.window = this.windowSrvc.getNativeWindow();
  }

  window: any;
  videoSource: any;
  pictureTaken: boolean = false;
  imageData: any;
  hackId: number;
  currentPhase: number;
  currentStream: MediaStream;

  ionViewDidLoad() {
    console.log(this.navParams);
    this.enableCamera();
    this.hackId = this.navParams.get("hackathonId");
    this.currentPhase = this.hackSrvc.currentPhase;
    }

  enableCamera(){
    navigator.mediaDevices.getUserMedia({video: true}).
    then((stream) => {
      this.window.stream = stream;
      this.videoSource = stream});

  }

  showMediaDevices(){ 
    navigator.mediaDevices.enumerateDevices().then((devices)=> {
      console.log(devices);
      let deviceAlert = this.alertCtrl.create();
      deviceAlert.setTitle("Choose a camera");
      devices.forEach((device)=> {
       if (device.kind == "videoinput" as MediaDeviceKind) {
        deviceAlert.addInput({
          type: "radio",
          label: device.label,
          value: device.deviceId
      })
     }
    })
    deviceAlert.addButton({
      text: "Ok",
      handler: (deviceId) => {
        new Promise((resolve) => {
          this.setNewVideoStream(deviceId);
          })
          return
        }
      })
    deviceAlert.present();
    })
  }

  setNewVideoStream(videoStreamId) {
     if (this.window.stream) {
      this.window.stream.getTracks().forEach((track)=> {
        track.stop();
      })
    }
    let constraints = {
      video: {
        deviceId: {exact: videoStreamId }
      }
    }

    navigator.mediaDevices.getUserMedia(constraints).
    then((stream)=> this.plugStream(stream));
  }

  plugStream(stream) {
    this.window.stream = stream;
    this.videoSource = stream;
  }

  takePicture() {
    let targetCanvas = this.canvas.nativeElement as HTMLCanvasElement;
    let myVideo = this.video.nativeElement as HTMLVideoElement;

    [targetCanvas.height, targetCanvas.width] = [myVideo.videoHeight, myVideo.videoWidth];
  
    let context = targetCanvas.getContext("2d");
    context.drawImage(myVideo, 0, 0);

    this.imageData = targetCanvas.toDataURL('image/png');
    this.image.nativeElement.src = this.imageData;

    this.toggleCamera()
  }

  savePicture() {
    console.log(this.imageData);
    try {
      this.hackSrvc.savePictureInPhase(this.hackId, this.currentPhase, this.imageData);
      // this.hackSrvc.markPhaseAsCompleted(this.hackId, this.currentPhase);
      this.goToWellHackedPage();
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
    this.toggleCamera();
    this.imageData = '';
    this.image.nativeElement.src = '';
  }

  toggleCamera() {
    this.image.nativeElement.hidden = !this.image.nativeElement.hidden;
    this.video.nativeElement.hidden = !this.video.nativeElement.hidden;
    this.pictureTaken = !this.pictureTaken;
  }

  goToWellHackedPage(){
    this.navCtrl.push(WellHackedPage)
  }


}
