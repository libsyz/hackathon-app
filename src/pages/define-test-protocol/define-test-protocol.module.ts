import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DefineTestProtocolPage } from './define-test-protocol';

@NgModule({
  declarations: [
    DefineTestProtocolPage,
  ],
  imports: [
    IonicPageModule.forChild(DefineTestProtocolPage),
  ],
})
export class DefineTestProtocolPageModule {}
