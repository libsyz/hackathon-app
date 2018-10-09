import { Component } from '@angular/core';

/**
 * Generated class for the HackerAvatarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hacker-avatar',
  templateUrl: 'hacker-avatar.html'
})
export class HackerAvatarComponent {

  text: string;

  constructor() {
    console.log('Hello HackerAvatarComponent Component');
    this.text = 'Hello World';
  }

}
