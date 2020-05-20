import { MyprofilePage } from './../pages/myprofile/myprofile';
import { firebaseConfig } from './config';
import { TabPage } from './../pages/tab/tab';
import { SearchPage } from './../pages/search/search';
import { ProfilePage } from './../pages/profile/profile';
import { GalleryPage } from './../pages/gallery/gallery';
import { CreateaccountPage } from './../pages/createaccount/createaccount';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule,AngularFireAuth } from 'angularfire2/auth';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateaccountPage,
    TabPage,
    GalleryPage,
    ProfilePage,
    SearchPage,
    MyprofilePage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateaccountPage,
    GalleryPage,
    ProfilePage,
    SearchPage,
    TabPage,
    MyprofilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,AngularFireAuth
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
