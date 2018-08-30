import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import arrry from '../../pages/home/home';
import regArry from '../register/register';

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

  arr:any [] = this.navParams.get('jj');

  objs = this.navParams.get('objs');

  image=this.arr[this.obj].image;
  description=this.arr[this.obj].description;
  price=this.arr[this.obj].price;
  hotelName=this.arr[this.obj].hotelName;
  review=this.arr[this.obj].review;
  roomType=this.arr[this.obj].roomType;

  checkIn;
  checkOut ;
 name= this.navParams.get("name");
 
 firstName ;
 lastName;


  

 hote1A ;
  

  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl: AlertController) {
    this.hote1A="overview";
   
    
  }

  ionViewDidLoad() {
    console.log("hotelview");


    
}





    
    books(){
        firebase.database().ref( 'bookings/' + this.temp ).push({

       


        checkIn: this.checkIn ,
        checkOut: this.checkOut,
        roomType : this.roomType ,

      }).catch(function(error){
        alert(error)
      })


     

     
  }

}


