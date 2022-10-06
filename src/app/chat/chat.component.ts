import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  selectedUser: any;
  users = [
  {
    "username": "somnath"
  },
  {
    "username": "Ajay"
  },
  {
    "username": "Bhushan"
  },
  {
    "username": "Kunal"
  }
];
  constructor() { }

  ngOnInit() {
  }

}
