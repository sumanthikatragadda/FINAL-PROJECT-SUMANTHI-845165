import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  constructor(private route:Router) { 
    if(localStorage.getItem("bid"))
    {

    }
    else{
      this.route.navigateByUrl("home/login")
    }
  }

  ngOnInit() {
  }
  Search()
  {
    
  }
  Logout()
  {
    localStorage.clear();
    this.route.navigateByUrl("home");
  }
}
