import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodDeliveryPageRoutingModule } from './food-delivery-routing.module';

import { FoodDeliveryPage } from './food-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodDeliveryPageRoutingModule,
  ],
  declarations: [FoodDeliveryPage]
})
export class FoodDeliveryPageModule {}
