import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-createaccount',
  templateUrl: 'createaccount.html',
})
export class CreateaccountPage {


  email:any;
  password:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public AFA:AngularFireAuth,
    public load:LoadingController,
    public alrt: AlertController

    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateaccountPage');

  }

  create(){

    let loading = this.load.create({

      spinner:'bubbles',
      content:'Creating Account'
    });
    loading.present();
    this.AFA.auth.createUserWithEmailAndPassword(this.email,this.password).then(()=>{

      loading.dismiss();
      let alert = this.alrt.create({

        title:'Success',
        subTitle:'Account created',

        buttons:[{
          text:'OK',
          handler:()=>{
            this.password = null;
            this.email = null;
          }
        }]
      });
      alert.present();
    });
  }
}
