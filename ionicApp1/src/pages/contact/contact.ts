import { Component, ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { DetailmessagePage } from '../detailmessage/detailmessage';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  items = [];

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 5; i++) {
      this.items.push( this.items.length );
  }
  }
  @ViewChild(Slides) slides:Slides;
 
  goToSlide(){
   this.slides.slideTo(2,500);
 }

// 上拉加载
 doInfinite(infiniteScroll) {
  console.log('Begin async operation');

  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      this.items.push( this.items.length );
    }

    console.log('Async operation has ended');
    infiniteScroll.complete();
    if(this.items.length>=9){
      infiniteScroll.enable(false);
      this.items.push('');
    }
  }, 500);
}




}
