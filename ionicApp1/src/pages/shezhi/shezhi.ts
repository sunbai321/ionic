import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'


import { MinePage } from '../mine/mine';
import {LoginPage } from '../login/login';
/**
 * Generated class for the ShezhiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shezhi',
  templateUrl: 'shezhi.html',
})
export class ShezhiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController) {
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '分享这张照片',
      buttons: [
        {
          text:'h',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: '微博',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: '举报',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShezhiPage');
  }

  exit(){
    this.navCtrl.push(MinePage);
  }
  tiaozhuan(){
    this.navCtrl.push(LoginPage);
  }
}
