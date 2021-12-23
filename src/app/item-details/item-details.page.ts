import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  quantity = 1
  constructor(private router:Router) { }
  
  ngOnInit() {
  }

  cartDetails(){
    this.router.navigate(['/cart-details'])
  }
  goTobusinessDetails(){
    this.router.navigate(['/business-details'])
  }
}
