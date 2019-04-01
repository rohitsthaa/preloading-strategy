import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  listofEmail = [
    {
      'sender': 'Rohit Shrestha',
      'subject': 'Application for leave',
      'description' : 'asdasdasda.........'
    },
    {
      'sender': 'Hilson Shrestha',
      'subject': 'Application for test',
      'description' : 'asdasdasda.........'
    },
    {
      'sender': 'Aatish Shrestha',
      'subject': 'Application for account',
      'description' : 'asdasdasda.........'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
