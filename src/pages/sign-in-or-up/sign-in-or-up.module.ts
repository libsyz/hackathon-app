import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignInOrUpPage } from './sign-in-or-up';

@NgModule({
  declarations: [
    SignInOrUpPage,
  ],
  imports: [
    IonicPageModule.forChild(SignInOrUpPage),
  ],
})
export class SignInOrUpPageModule {}
