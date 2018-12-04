
import { Injectable } from '@angular/core';

function getWindow (): any {
  return window;
}

@Injectable()
export class WindowProvider {
  getNativeWindow():any {
    return getWindow();
  } 

}
