import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    slidesPerView: 2.5
  }
  constructor(private router: Router) {}

  businessDetails(){
    this.router.navigate(['/business-details'])
  }
}
