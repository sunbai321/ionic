import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailmessagePage } from '../detailmessage/detailmessage';

/**
 * Generated class for the JubaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jubao',
  templateUrl: 'jubao.html',
})
export class JubaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tiaozhuan(){
    this.navCtrl.push(DetailmessagePage);
 }

}
