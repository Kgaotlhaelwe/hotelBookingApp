import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import arrry from '../../pages/home/home';


declare var firebase;



@IonicPage()
@Component({
  selector: 'page-promo-view',
  templateUrl: 'promo-view.html',
})
export class PromoViewPage {

  obj = this.navParams.get('obj');

  arr:any [] = this.navParams.get('jj');

  image=this.arr[this.obj].image;
  description=this.arr[this.obj].description;
  price=this.arr[this.obj].price;
  hotelName=this.arr[this.obj].hotelName;
  roomType=this.arr[this.obj].roomType;


  checkIn ;
  checkOut;

  objs = this.navParams.get('objs');
  temp = arrry[0];

  hote1A ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hote1A="overview";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromoViewPage');

    //console.log(this.arr);

    console.log(this.objs);
    
    
  }

  books(){

    
    firebase.database().ref( 'bookings/' + this.temp ).push({
      checkIn: this.checkIn ,
      checkOut: this.checkOut,
      roomType : this.roomType ,
    });
}


}
