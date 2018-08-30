import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';

import {RegisterPage} from '../pages/register/register'
import {HotelsPage} from '../pages/hotels/hotels'
import {HotelViewPage} from '../pages/hotel-view/hotel-view';

import {PromoViewPage} from '../pages/promo-view/promo-view' ;
import {BookingsPage} from '../pages/bookings/bookings'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage , RegisterPage,HotelsPage,HotelViewPage, PromoViewPage ,BookingsPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
   

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,RegisterPage,HotelsPage,HotelViewPage, PromoViewPage , BookingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
