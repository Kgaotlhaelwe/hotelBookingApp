import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelViewPage } from './hotel-view';

@NgModule({
  declarations: [
    HotelViewPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelViewPage),
  ],
})
export class HotelViewPageModule {}
