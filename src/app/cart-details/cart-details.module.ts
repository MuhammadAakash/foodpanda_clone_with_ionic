import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartDetailsPageRoutingModule } from './cart-details-routing.module';

import { CartDetailsPage } from './cart-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartDetailsPageRoutingModule
  ],
  declarations: [CartDetailsPage]
})
export class CartDetailsPageModule {}
