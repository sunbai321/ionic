import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage } from '../login/login';
import {FabudetailPage } from '../fabudetail/fabudetail';
/**
 * Generated class for the MinefabuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minefabu',
  templateUrl: 'minefabu.html',
})
export class MinefabuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // tiaozhuan(){
  //   this.navCtrl.push(FabudetailPage);
  // }

  huhu(){
    this.navCtrl.push(FabudetailPage);
  }
}
