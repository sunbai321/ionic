import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MinePage } from '../mine/mine';
import { ShezhiPage } from '../shezhi/shezhi';
import { MinefabuPage } from '../minefabu/minefabu';
import { MinehezuoPage } from '../minehezuo/minehezuo';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  tiaozhuan(){
    this.navCtrl.push(HomePage);
  }
  exit(){
    this.navCtrl.push(MinePage);
  }
  shezhi(){
    this.navCtrl.push(ShezhiPage);
  }
  fabu(){
    this.navCtrl.push(MinefabuPage);
  }
  hezuo(){
    this.navCtrl.push(MinehezuoPage);
  }

//   ionViewDidEnter(){
//     let elements = document.querySelectorAll(".tabbar");
//     if (elements != null) {
//        Object.keys(elements).map((key) => {
//           elements[key].style.display = 'none';
//          });
//        }   
//   }
//   //ionic当退出页面的时候触发的方法
// ionViewWillLeave() {
//     let elements = document.querySelectorAll(".tabbar");
//     if (elements != null) {
// 	   Object.keys(elements).map((key) => {
//     		elements[key].style.display = 'flex';
// 	});
//     }
// }

}
