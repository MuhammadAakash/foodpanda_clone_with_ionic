import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.page.html',
  styleUrls: ['./cart-details.page.scss'],
})
export class CartDetailsPage implements OnInit {
  quantity = 1
  constructor( private router:Router) { }

  ngOnInit() {
  }

  goToitemDetails(){
    this.router.navigate(['/item-details'])
  }
  goToPlaceOrder(){
    this.router.navigate(['/place-order'])
  }
}
