import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromoViewPage } from './promo-view';

@NgModule({
  declarations: [
    PromoViewPage,
  ],
  imports: [
    IonicPageModule.forChild(PromoViewPage),
  ],
})
export class PromoViewPageModule {}
