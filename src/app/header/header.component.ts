import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  CurrentPage: String = 'home';
  home = 'home';
  chat = 'chat';
  meet = 'meet'
  constructor() { }

  ngOnInit() {
  }
  ChangeScreen(screenName){
    this.CurrentPage = screenName;
  }
}
