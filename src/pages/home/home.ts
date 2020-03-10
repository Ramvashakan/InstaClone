import { TabPage } from './../tab/tab';
import { CreateaccountPage } from './../createaccount/createaccount';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login(){

    this.navCtrl.push(TabPage);

  }
  createacc(){

    this.navCtrl.push(CreateaccountPage);

  }


  



}
