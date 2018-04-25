import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Slides } from 'ionic-angular';
import { DetailmessagePage } from '../detailmessage/detailmessage';
import { DetailservePage } from '../detailserve/detailserve';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];

    constructor(public navCtrl: NavController) {
      for (let i = 0; i < 3; i++) {
        this.items.push( this.items.length );
      }
 
  }

  icons:any='infor';
  // icons='infor';默认出现infor面板，在ngMoudel对应的值添加

 @ViewChild(Slides) slides:Slides;
 
  goToSlide(){
   this.slides.slideTo(2,500);
 }

// 上拉加载
 doInfinite(infiniteScroll) {
  console.log('Begin async operation');

  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
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



// 下拉刷新
doRefresh(refresher) {
  console.log('刷新开始', refresher);

  setTimeout(() => {
    console.log('刷新完毕');
    refresher.complete();
  }, 2000);
}

detailmessage(){
  this.navCtrl.push(DetailmessagePage);
}

sunbai(){
  this.navCtrl.push(DetailservePage);
}

}
