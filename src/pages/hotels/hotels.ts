import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HotelViewPage } from '../../pages/hotel-view/hotel-view';

import { PromoViewPage } from '../promo-view/promo-view';
import { AlertController } from 'ionic-angular';
declare var firebase;

/**
 * Generated class for the HotelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html',
})
export class HotelsPage {

   

  timeStarts;
  hote1A;
  arr = [new Hotel("../../assets/imgs/Chicago-Trump.jpg", "leisure hotel", "R1230", "leisure hotel is a small but a very good hotel, we were really pleased. Orion hotel is very close to the beach, and the sea is cleanand clear. The rooms are comfortable, also... Orion hotel is very close to the beach, and the sea is cleanand clea", ["Great hosptality,", "NICE FOOD AND HOTEL", "Great hosptality"], "Luxuary ROOM"),
  new Hotel("../../assets/imgs/1600x900_WonderfulDoubleQueen.jpg", "Orion hotel", "R1830", "leisure", ["Great hosptality,", "NICE FOOD AND HOTEL", "Great hosptality"], "Luxuary ROOM"),
  new Hotel("../../assets/imgs/bentley-hotel-nyc-deluxe-king-room.jpg", "Protea hotel", "R1930", " Protea Hotels by Marriott® is one of the most widely recognized hospitality brand in Africa with the most extensive footprint. ... The Protea Hotels by Marriott portfolio comprises of two brands, the mid-up market Protea Hotels by Marriott including the lifestyle brand Protea Hotel Fire & Ice!", ["Great hosptality,", "NICE FOOD AND HOTEL", "Great hosptality"], "Luxuary ROOM"),



  ]


  arry = [new HotelPromo("../../assets/imgs/room1.jpg", "leisure hotel", "R600", "At Leisure we embrace our food and beverage operations, unlike most other management companies who outsource them. We are a resource for our ownership groups for creating, building, and managing signature restaurant and event spaces within our hotels and resorts.", "Standard"),
  new HotelPromo("../../assets/imgs/room3.jpg", "Protea Hotel", "R500", " Protea Hotels by Marriott® is one of the most widely recognized hospitality brand in Africa with the most extensive footprint. With nearly 100 hotels across 9 countries including South Africa, Zambia, Nigeria, Namibia, Ghana, Tanzania, Uganda, Malawi & Algeria. Protea Hotels has the largest strategic footprint throughout the Continent and is highly committed to delivering every guest with a personalized service experience ", "standard"),
  new HotelPromo("../../assets/imgs/room9.jpg", "Protea Hotel", "R550", "Protea Hotels by Marriott® is one of the most widely recognized hospitality brand in Africa with the most extensive footprint. With nearly 100 hotels across 9 countries including South Africa, Zambia, Nigeria, Namibia, Ghana, Tanzania, Uganda, Malawi & Algeria. Protea Hotels has the largest strategic footprint throughout the Continent and is highly committed to delivering every guest with a personalized service experience", "standard"),



  ]


  objs = this.navParams.get('obj');



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.hote1A = "hotelB";



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelsPage');

    console.log(this.objs);

  }


  view(a) {

    alert(this.hote1A)




    this.navCtrl.push(HotelViewPage, { obj: a, jj: this.arr, objs: this.objs })

  }


  promoview(a) {
    alert(a)
    this.navCtrl.push(PromoViewPage, { obj: a, jj: this.arry, obs: this.objs })
    //console.log( {jj: this.arry})
  }

}




export class Hotel {

  image;
  hotelName;
  price;
  description;
  review;
  roomType;


  constructor(image, hotelName, price, description, review, roomType) {
    this.image = image;
    this.hotelName = hotelName;
    this.price = price;
    this.description = description;
    this.review = review;
    this.roomType = roomType;

  }
}



export class HotelPromo {

  image;
  hotelName;
  price;
  description;
  roomType


  constructor(image, hotelName, price, description, roomType) {
    this.image = image;
    this.hotelName = hotelName;
    this.price = price;
    this.description = description;
    this.roomType = roomType;

  }



}

