import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MessagePage } from '../message/message';

/**
 * Generated class for the MessagehomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messagehome',
  templateUrl: 'messagehome.html',
})
export class MessagehomePage {
 list=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.list = [
      {
        'title': '小鬼',
        'p': '你在吗',
        'img': 'assets/imgs/dd.jpg',
        'time':'12:13am'
      },
      {
        'title': '王琳凯',
        'p': '全民制作人，请多关照',
        'img': 'assets/imgs/gg.jpg',
        'time':'22:31 pm'
      },
      {
        'title': 'AKA',
        'p': '快乐病毒',
        'img': 'assets/imgs/timg.png',
        'time':'21:54pm'
      },
      {
        'title': 'Imp',
        'p': '小鬼今天发微博了吗',
        'img': 'assets/imgs/timgpng.jpg',
        'time':'09:31 am'
      },
      
      {
        'title': '鬼姐姐',
        'p': '未来陪他一起走花路吧',
        'img': 'assets/imgs/touxiang.png',
        'time':'11:31 am'
      },
   
    ]
  }

  

  tiaozhuan(){
    this.navCtrl.push(HomePage,{name:'liu'});
   
  }

  xiaoxi(item){
    this.navCtrl.push(MessagePage, {item: item});
  }
  




 del(i){
   this.list.splice(i,1);
 }
 goTop(i){
   this.list.unshift(this.list[i]);
   this.list.splice(i+1,1);
 }


}
