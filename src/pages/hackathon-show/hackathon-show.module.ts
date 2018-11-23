import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HackathonShowPage } from './hackathon-show';

@NgModule({
  declarations: [
    HackathonShowPage,
  ],
  imports: [
    IonicPageModule.forChild(HackathonShowPage),
  ],
})
export class HackathonShowPageModule {}
