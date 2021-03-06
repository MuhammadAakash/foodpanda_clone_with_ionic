import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage implements OnInit {

  constructor(private router:Router, private navCtrl:NavController) { }

  ngOnInit() {
  }

  goback(){
    this.navCtrl.pop()
  }
}
