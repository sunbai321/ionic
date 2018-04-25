import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FabumessagePage } from '../fabumessage/fabumessage';


@IonicPage()
@Component({
  selector: 'page-fabutype',
  templateUrl: 'fabutype.html',
})
export class FabutypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
tiaozhuan(){
  this.navCtrl.push(HomePage);
}

xiangqing(){
  this.navCtrl.push(FabumessagePage);
}

}
