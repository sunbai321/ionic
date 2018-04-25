import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZhucePage } from '../zhuce/zhuce';
/**
 * Generated class for the XieyiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-xieyi',
  templateUrl: 'xieyi.html',
})
export class XieyiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XieyiPage');
  }
  tiaozhuan(){
   
    this.navCtrl.push(ZhucePage);
    
   
 }
}
