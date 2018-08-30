import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var firebase;

/**
 * Generated class for the BookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookings',
  templateUrl: 'bookings.html',
})
export class BookingsPage {

  arr ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    firebase.database().ref('bookings/').on('value', (data: any) => {

      var a = data.val();
      var keys: any = Object.keys(a);

      for (var i = 0; i < keys.length; i++) {
           var k = keys[i];

           let obj = {
            checkIn: a[k].checkIn,
            checkOut:a[k].checkOut ,
            name:a[k].name ,
            roomType:a[k].roomType ,
            key: k
          }

          this.arr.push(obj);

          console.log(this.arr);
          
}

})

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingsPage');
  }

}
