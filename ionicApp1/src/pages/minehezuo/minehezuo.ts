import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HezuodetailPage } from '../hezuodetail/hezuodetail';

/**
 * Generated class for the MinehezuoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minehezuo',
  templateUrl: 'minehezuo.html',
})
export class MinehezuoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  hezuo(){

    this.navCtrl.push(HezuodetailPage);
  }

}
