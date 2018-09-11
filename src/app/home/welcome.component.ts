import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  pageTitle: string = 'Welcome to Angular Getting Started...'
  constructor() { }

  ngOnInit() {
  }

}
