import { AngularFireAuth } from 'angularfire2/auth';
import { TabPage } from './../tab/tab';
import { CreateaccountPage } from './../createaccount/createaccount';
import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email:any;
  password:any;

  constructor(public navCtrl: NavController,
    
    public AFA: AngularFireAuth,
    public alrt:AlertController
    ) {

  }

  login(){

    this.AFA.auth.signInWithEmailAndPassword(this.email,this.password).then(()=>{

      this.navCtrl.setRoot(TabPage);
      this.email =null;
      this.password = null;
      
    }).catch(err=>{

      let alert = this.alrt.create({

        title:'Error',
        message:err,
        buttons:[{
          text:'OK',
          handler:()=>{

            this.password = null;

          }
        }]

      });

      alert.present();
    });
  }
  createacc(){

    this.navCtrl.push(CreateaccountPage);

  }


  



}
