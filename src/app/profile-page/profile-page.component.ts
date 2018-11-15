import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  Person = [
    {'Username' : 'Mrs Smart'},
    {'Password' : 'None'},
    {'Email' : 'smart@gmail.com'},
    {'Level': '123'},
  ];





  constructor() { }

  ngOnInit() {
  }

}
