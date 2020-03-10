import { SearchPage } from './../search/search';
import { GalleryPage } from './../gallery/gallery';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the TabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})

export class TabPage {

  profile: any = ProfilePage;
  gallery: any = GalleryPage;
  search: any = SearchPage;

  constructor(public navCtrl: NavController,public platform:Platform, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

  


}
