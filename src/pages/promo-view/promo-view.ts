import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import arrry from '../../pages/home/home';
import { ToastController } from 'ionic-angular';


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
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
    this.hote1A="overview";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromoViewPage');

    //console.log(this.arr);

    console.log(this.objs);
    
    
  }

  books(){

    let d = new Date() ;
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var today =  year + "-"+ '0' + month + "-" +  day;

    alert(today)

    if(this.checkIn >= today && this.checkOut >=this.checkIn){
      firebase.database().ref( 'bookings/' + this.temp ).push({

    
        checkIn: this.checkIn ,
        checkOut: this.checkOut,
        roomType : this.roomType ,
      });

    


    }else{
      const toast = this.toastCtrl.create({
        message: 'PLEASE CHOOSE THE CURRENT DAY',
        duration: 3000
      });
      toast.present();
    }
    
   
}


}
