import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { user } from '../../app/models/user';
import { HotelsPage } from '../../pages/hotels/hotels';

import { RegisterPage } from '../../pages/register/register';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

declare var firebase;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as user;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public loadingCtrl: LoadingController ,public alertCtrl: AlertController) {




  }


  signIn(user: user) {


    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });

    if (user.email != undefined && user.password != undefined) {

      firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(() => {
        var users = firebase.auth().currentUser.uid;
        arrry[0] = users;
        firebase.database().ref("user/" + arrry[0]).set({
        })


        this.navCtrl.setRoot(HotelsPage);
        const loader = this.loadingCtrl.create({
          content: "Please wait...",
          duration: 3000
        });
        loader.present();




      }, (error) => {
        var errormsg = error.message;



      })


    }






    else {

      const toast = this.toastCtrl.create({
        message: "PLEASE THE YOUR DETAILS",
        duration: 3000
      });
      toast.present();


    }



  }


  signUp() {

    this.navCtrl.push(RegisterPage);
  }


  forgetPassword(email){



    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "FORGET PASSWORD",
      inputs: [
        {
          name: 'email',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            firebase. auth().sendPasswordResetEmail(data.email).then(()=>{
              
              const toast = this.toastCtrl.create({
                message: "Check Your Email",
                duration: 3000
              });
              toast.present();
            
            } , 
              
              
              
            (error)=>{
              const toast = this.toastCtrl.create({
                message: error ,
                duration: 3000
              });
              toast.present();
             
            })

            
          }
        }
      ]
    });
    prompt.present();
  }
    
  }




var arrry = [];

export default arrry;