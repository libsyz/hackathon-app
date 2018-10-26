
import { Injectable } from '@angular/core';

function getWindow (): any {
  return window;
}

/*
  Generated class for the WindowProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



@Injectable()
export class WindowProvider {
  getNativeWindow():any {
    return getWindow();
  } 

}
