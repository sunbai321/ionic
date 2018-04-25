import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MinePage } from '../mine/mine';
import { MessagePage } from '../message/message';
import { LoginPage } from '../login/login';
import { ZhucePage } from '../zhuce/zhuce';
import { FindPage } from '../find/find';
import { XieyiPage } from '../xieyi/xieyi';
import { DetailmessagePage } from '../detailmessage/detailmessage';
import { DetailservePage } from '../detailserve/detailserve';
import { FabumessagePage } from '../fabumessage/fabumessage';
import { FabutypePage } from '../fabutype/fabutype';
import { MinefabuPage } from '../minefabu/minefabu';
import { JubaoPage } from '../jubao/jubao';
import { MinehezuoPage } from '../minehezuo/minehezuo';
import { MessagehomePage } from '../messagehome/messagehome';
import {ShezhiPage } from '../shezhi/shezhi';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root =HomePage;
  tab2Root = FabutypePage;
  tab3Root = ContactPage;
  tab4Root = MessagehomePage;
  tab5Root = MinePage

  constructor() {

  }
}
