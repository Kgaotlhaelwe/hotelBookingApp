import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HotelsPage } from '../pages/hotels/hotels';
import { BookingsPage } from "../pages/bookings/bookings"

declare var firebase;


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;



  public rootPage: any = HomePage

  signout;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    firebase.auth().onAuthStateChanged(user => {

      if (user) {
        this.rootPage = HotelsPage
        console.log(user)
      } else {
        // No user is signed in.
        this.rootPage = HomePage
      }
    })
    //this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'Bookings', component: ListPage },

    ];






  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
  }


  signOut() {

    firebase.auth().signOut();
    this.nav.setRoot(HomePage);



    // firebase.auth().signOut().then(function() {
    //   this.nav.push(HomePage)

    // }, function(error) {
    //   console.error('Sign Out Error', error);
    // });



  }

  userState() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        this.rootPage = HotelsPage

      } else {
        // No user is signed in.
      }
    });

  }




}