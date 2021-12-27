import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  quantity = 1
  constructor(private router:Router, private navCtrl:NavController) { }
  
  ngOnInit() {
  }

  cartDetails(){
    this.router.navigate(['/cart-details'])
  }
  goback(){
    this.navCtrl.pop()
  }
}
