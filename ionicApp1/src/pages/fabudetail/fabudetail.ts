import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { JubaoPage } from '../jubao/jubao';
import { HomePage } from '../home/home';


/**
 * Generated class for the FabudetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fabudetail',
  templateUrl: 'fabudetail.html',
})
export class FabudetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,public actionSheetCtrl: ActionSheetController) {
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'hahabudui',
      duration: 3000
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }


  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '分享这张照片',
      buttons: [
        {
          text:'分享',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: '举报',
          handler: () => {
              this.navCtrl.push(JubaoPage);
                }
            },
          
        
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }
  tiaozhuan(){

    this.navCtrl.push(HomePage);
  }

}
