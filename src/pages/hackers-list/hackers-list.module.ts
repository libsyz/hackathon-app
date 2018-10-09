import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HackersListPage } from './hackers-list';

@NgModule({
  declarations: [
    HackersListPage,
  ],
  imports: [
    IonicPageModule.forChild(HackersListPage),
  ],
})
export class HackersListPageModule {}
