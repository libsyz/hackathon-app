import { Component } from '@angular/core';

/**
 * Generated class for the CountdownComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'countdown',
  templateUrl: 'countdown.html'
})
export class CountdownComponent {
  countDownActive: boolean = false;
  text: string;
  time: number;
  minutes: any = 15;
  seconds: any = "00";
  info: string = "START";
  fifteenMinutes: number = 900;

  constructor() {
    console.log('Hello CountdownComponent Component');
    this.text = 'Hello World';
  }

  startCountDown(){
    if (this.countDownActive == false) {
      let timeNow = Date.now();
      let then = timeNow + this.fifteenMinutes * 1000;
      this.time = then - timeNow;
      this.info = "GO!"; 
      this.updateTimer()
      this.countDownActive = true;    
    }
  }

  updateTimer() {
    setInterval(()=> {
      this.time = this.time - 1000;
      this.minutes = this.getMinutes(this.time)
      this.seconds = this.getSeconds(this.time) 
    }, 1000)
    
  }

  getMinutes(time) {
    let minutes: any = Math.floor(time/1000/60);
    if (minutes < 10 ) {
      minutes = `0${minutes}`
      }
    return minutes;
    }

  getSeconds(time) {
    let seconds: any = this.time/1000%60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return seconds;
  }
}
