import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagehomePage } from './messagehome';

@NgModule({
  declarations: [
    MessagehomePage,
  ],
  imports: [
    IonicPageModule.forChild(MessagehomePage),
  ],
})
export class MessagehomePageModule {}
