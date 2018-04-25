import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  MessagehomePage } from '../messagehome/messagehome';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
}) 
 	
export class MessagePage {
			item;


  constructor(public params:NavParams,public navCtrl: NavController, public navParams: NavParams) {
    this.item = params.data.item;
  }

tiaozhuan(){
  this.navCtrl.push(MessagehomePage);
}
}
