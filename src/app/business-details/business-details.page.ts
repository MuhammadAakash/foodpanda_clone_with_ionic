import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.page.html',
  styleUrls: ['./business-details.page.scss'],
})
export class BusinessDetailsPage implements OnInit {

  constructor(private  router: Router, private navCtrl:NavController) { }

  segmentvalue = "Popular"
  ngOnInit() {
  }

  segmentValueChange(event){
  
    this.segmentvalue = event.detail.value
  }

  itemDetails(){
    this.router.navigate(['/item-details'])
  }
  goback(){
    this.navCtrl.pop()
  }
}
