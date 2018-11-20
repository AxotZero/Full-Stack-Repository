import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  Person = {
    Username : 'Kshiti Ghelani',
    Password : 'None',
    Email : 'kshitighelani@gmail.com',
    Phone : '123 456 7890',
    Level: '123',
    Profession : 'Web Developer and Designer',
  };
  editMode = false;

  buttonClick() {
    // console.log('button clicked!');

    if (this.editMode) {
      // save value of username
    this.Person.Username = (<HTMLInputElement>document.querySelector('.Username .Edit')).value;
    this.Person.Password = (<HTMLInputElement>document.querySelector('.Password .Edit')).value;
    this.Person.Email = (<HTMLInputElement>document.querySelector('.Email .Edit')).value;
    this.Person.Phone = (<HTMLInputElement>document.querySelector('.Phone .Edit')).value;
    this.Person.Level = (<HTMLInputElement>document.querySelector('.Level .Edit')).value;
    this.Person.Profession = (<HTMLInputElement>document.querySelector('.Profession .Edit')).value;
    }

    // change value of edit mode
    this.editMode = !this.editMode;
  }


  constructor() { }

  ngOnInit() {
    console.log(this.Person.Username);
  }

}
