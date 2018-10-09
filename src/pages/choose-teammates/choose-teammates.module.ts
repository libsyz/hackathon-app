import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseTeammatesPage } from './choose-teammates';

@NgModule({
  declarations: [
    ChooseTeammatesPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseTeammatesPage),
  ],
})
export class ChooseTeammatesPageModule {}
