import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailservePage } from './detailserve';

@NgModule({
  declarations: [
    DetailservePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailservePage),
  ],
})
export class DetailservePageModule {}
