import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler,ToastController} from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MinePage } from '../pages/mine/mine';
import { ZhucePage } from '../pages/zhuce/zhuce';
import { LoginPage } from '../pages/login/login';
import { MessagePage } from '../pages/message/message';
import { FindPage } from '../pages/find/find';
import { DetailmessagePage } from '../pages/detailmessage/detailmessage';
import { DetailservePage } from '../pages/detailserve/detailserve';
import { XieyiPage } from '../pages/xieyi/xieyi';
import { HttpModule } from "@angular/http";
import { JsonpModule } from "@angular/http";


import { FabumessagePage } from '../pages/fabumessage/fabumessage';
import { FabudetailPage } from '../pages/fabudetail/fabudetail';
import { HezuodetailPage } from '../pages/hezuodetail/hezuodetail';
import { FabutypePage } from '../pages/fabutype/fabutype';
import { MinefabuPage } from '../pages/minefabu/minefabu';
import { JubaoPage } from '../pages/jubao/jubao';
import { MinehezuoPage } from '../pages/minehezuo/minehezuo';
import { MessagehomePage } from '../pages/messagehome/messagehome';
import { ShezhiPage } from '../pages/shezhi/shezhi';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MinePage,
   LoginPage,
   ZhucePage,
    MessagePage,
    FindPage,
    XieyiPage,
    DetailmessagePage,
    DetailservePage,
    FabumessagePage,
    FabutypePage,
    MinefabuPage,
    JubaoPage,
    MinehezuoPage,
    MessagehomePage,
    ShezhiPage,
    FabudetailPage,
    HezuodetailPage
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'',
      pageTransition:'ios-transition',
	 	 backButtonIcon:""
}),
// IonicModule.forRoot(MyApp),
    JsonpModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ZhucePage,
    MinePage,
    MessagePage,
    FindPage,
    XieyiPage,
    DetailmessagePage,
    DetailservePage,
    FabumessagePage,
    FabutypePage,
    MinefabuPage,
    JubaoPage,
    MinehezuoPage,
    MessagehomePage,
    ShezhiPage,
    FabudetailPage,
    HezuodetailPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
