import { HttpClient } from '@angular/common/http';
import { WindowProvider } from './../../providers/window/window';
import { WellHackedPage } from './../well-hacked/well-hacked';
import { PageNavigationProvider } from './../../providers/page-navigation/page-navigation';
import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController, Loading } from 'ionic-angular';
import { CloudinaryUploaderProvider } from '../../providers/cloudinary-uploader/cloudinary-uploader';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';


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
              public loadingCtrl: LoadingController,
              public cloudinary: CloudinaryUploaderProvider) {
              this.window = this.windowSrvc.getNativeWindow();
  }

  saveWasSuccessful: boolean;
  window: any;
  videoSource: any;
  pictureTaken: boolean = false;
  imageData: any;
  imageUrl: any;
  hackId: number;
  currentPhase: number;
  currentStream: MediaStream;

  ionViewDidLoad() {
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
          return // Alert won't leave without this return
        }
      })
    deviceAlert.present();
    })
  }

  setNewVideoStream(videoStreamId) {
    this.stopCamera();
    
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

  async savePicture() {
    let cloudinaryData;
    let loading = this.loadingCtrl.create()
    loading.setContent("Uploading...")
    loading.present();
    let cloudinaryResponse = await this.cloudinary.uploadPicture(this.imageData).toPromise()
    let postImageToServerResponse = await this.hackSrvc.savePicture(cloudinaryResponse['secure_url']).toPromise();
    this.hackSrvc.currentHackathon = postImageToServerResponse;
    this.hackSrvc.updateCurrentPhase();
    
    loading.dismiss();
    //test line below - uncomment all above for page to work as intended
    // this.hackSrvc.currentPhase++
    this.stopCamera();
    this.goToWellHackedPage();
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
    this.navCtrl.push(WellHackedPage);
  }

  stopCamera(){
    if (this.window.stream) {
      this.window.stream.getTracks().forEach((track)=> {
        track.stop();
      })
    }
  }

}