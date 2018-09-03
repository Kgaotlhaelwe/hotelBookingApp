import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import arrry from '../../pages/home/home';
import regArry from '../register/register';
import { ToastController } from 'ionic-angular';

declare var firebase;

/**
 * Generated class for the HotelViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotel-view',
  templateUrl: 'hotel-view.html',
})
export class HotelViewPage {

  timeStarts;
  temp = arrry[0];

  obj = this.navParams.get('obj');

  arr: any[] = this.navParams.get('jj');

  objs = this.navParams.get('objs');

  image = this.arr[this.obj].image;
  description = this.arr[this.obj].description;
  price = this.arr[this.obj].price;
  hotelName = this.arr[this.obj].hotelName;
  review = this.arr[this.obj].review;
  roomType = this.arr[this.obj].roomType;

  checkIn;
  checkOut;
  name = this.navParams.get("name");

  firstName;
  lastName;




  hote1A;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.hote1A = "overview";


  }

  ionViewDidLoad() {
    console.log("hotelview");





  }






  books() {
    let d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var today = year + "-" + '0' + month + "-" + "0" + day;
    var users = firebase.auth().currentUser.email;



    if (this.checkIn >= today && this.checkOut >= this.checkIn) {

      firebase.database().ref('bookings/' + this.temp).push({
        image: this.image,
        email: users,
        checkIn: this.checkIn,
        checkOut: this.checkOut,
        roomType: this.roomType,


      });

      const toast = this.toastCtrl.create({
        message: 'YOUR BOOKING WAS SUCCESSFUL',
        duration: 3000
      });
      toast.present();




    } else {
      const toast = this.toastCtrl.create({
        message: 'PLEASE CHOOSE THE CURRENT DAY',
        duration: 3000
      });
      toast.present();
    }


  }


}


