import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cloudinaryPreset, cloudinaryUrl } from './../../models/cloudinary-preset.model';

/*
  Generated class for the CloudinaryUploaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CloudinaryUploaderProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CloudinaryUploaderProvider Provider');
  }

  uploadPicture(imageData) {
    return this.http.post("https://api.cloudinary.com/v1_1/dhodayze1/image/upload"
    , {
      file: imageData,
      upload_preset: "hackathon_upload" 
    })
  }



}
