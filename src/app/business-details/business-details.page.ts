import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.page.html',
  styleUrls: ['./business-details.page.scss'],
})
export class BusinessDetailsPage implements OnInit {

  constructor(private  router: Router) { }

  segmentvalue = "Popular"
  ngOnInit() {
  }

  segmentValueChange(event){
  
    this.segmentvalue = event.detail.value
  }

  itemDetails(){
    this.router.navigate(['/item-details'])
  }
}
