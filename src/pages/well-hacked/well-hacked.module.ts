import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WellHackedPage } from './well-hacked';

@NgModule({
  declarations: [
    WellHackedPage,
  ],
  imports: [
    IonicPageModule.forChild(WellHackedPage),
  ],
})
export class WellHackedPageModule {}
