import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-food-delivery',
  templateUrl: './food-delivery.page.html',
  styleUrls: ['./food-delivery.page.scss'],
})
export class FoodDeliveryPage implements OnInit {
  slideOpts = {
    slidesPerView: 2.5
  }
  slideOpts1 = {
    slidesPerView: 1.3
  }
  constructor(private router: Router, private navCtrl:NavController) { }

  
  ngOnInit() {
  }
  businessDetails(){
    this.router.navigate(['/business-details'])
  }
  goback(){
    this.navCtrl.pop()
  }
}
