import { DefineTestProtocolPage } from './../../pages/define-test-protocol/define-test-protocol';
import { UploadPicturePage } from './../../pages/upload-picture/upload-picture';
import { DefineProblemPage } from './../../pages/define-problem/define-problem';
import { Injectable } from '@angular/core';


/*
  Generated class for the PageNavigationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PageNavigationProvider {

  constructor() {
    console.log('Hello PageNavigationProvider Provider');
  }

  getPage(currentPhase){
    switch (currentPhase) {
      case 1:
        return DefineProblemPage;
      case 2: 
        return UploadPicturePage;
      case 3: 
        return UploadPicturePage;
      case 4: 
        return UploadPicturePage;
      case 5: 
      return DefineTestProtocolPage;
      default:
      console.log("Not quite there yet - ");
      break
    }
  }

}
