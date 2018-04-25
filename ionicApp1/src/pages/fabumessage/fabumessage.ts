import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MessagePage } from '../message/message';

@IonicPage()
@Component({
  selector: 'page-fabumessage',
  templateUrl: 'fabumessage.html',
})
export class FabumessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tiaozhuan(){
    this.navCtrl.push(HomePage,{name:'liu'});
   
  }

  


}
