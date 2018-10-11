import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseHackersPage } from './choose-hackers';

@NgModule({
  declarations: [
    ChooseHackersPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseHackersPage),
  ],
})
export class ChooseHackersPageModule {}
