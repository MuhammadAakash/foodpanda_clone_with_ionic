import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.page.html',
  styleUrls: ['./cart-details.page.scss'],
})
export class CartDetailsPage implements OnInit {
  quantity = 1
  constructor( private router:Router, private navCtrl:NavController) { }

  ngOnInit() {
  }

  goback(){
    this.navCtrl.pop()
  }
  goToPlaceOrder(){
    this.router.navigate(['/place-order'])
  }
}
