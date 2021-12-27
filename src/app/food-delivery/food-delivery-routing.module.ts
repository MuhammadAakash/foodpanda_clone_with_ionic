import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodDeliveryPage } from './food-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: FoodDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodDeliveryPageRoutingModule {}
