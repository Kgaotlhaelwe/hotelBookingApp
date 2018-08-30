import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import arrry from '../../pages/home/home';
import {user} from '../../app/models/user';
import {HotelsPage} from '../../pages/hotels/hotels' ;
import { ToastController } from 'ionic-angular';

declare var firebase;

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as user ;

  FirstName ;
  lastName ;
  phoneNumber ;


  

  constructor(public navCtrl: NavController, public navParams: NavParams ,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  async  signUp(user:user){
      firebase.auth().createUserWithEmailAndPassword( user.email, user.password).then(()=> {
      var users= firebase.auth().currentUser;
      firebase.database().ref("user/"+ users.uid).set({
       name: this.FirstName ,
       surname: this.lastName ,
       phone: this.phoneNumber

      })
      
      this.navCtrl.push(HotelsPage);
      } , (error)=>{
        var errormsg = error.message;
        const toast = this.toastCtrl.create({
          message: errormsg,
          duration: 3000
        });
        toast.present();

    })
}



}


var regArry =[] ;

export default regArry ;