import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chatUserId;
  constructor(private router: Router){
    console.log('Called URL', router.url);
    }

  ngOnInit() {
  }

  clicked(){
    console.log(this.chatUserId);
  }

}
