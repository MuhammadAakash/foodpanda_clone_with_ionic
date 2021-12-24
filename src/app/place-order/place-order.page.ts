import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToCartDetails(){
    this.router.navigate(['/cart-details'])
  }
}
