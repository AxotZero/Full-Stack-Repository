import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {


  editMode = false;

  get Person() {
    const person = {
      Username : '',
      Password : '',
      Email : '',
      Phone : '',
      Level: '',
      Profession : '',
      imgsrc: ''
    };
    const u = this.dataService.User;
    person.Username = u.name;
    person.Email = u.email;
    let n = '';
    if (u.exp < 100) {n = '學生'; } else
    if (u.exp < 500) {n = '下忍'; } else
    if (u.exp < 3000) {n = '中忍'; } else
    if (u.exp < 20000) {n = '上忍'; } else {n = '影'; }
    person.Level = n;
    return person;
  }


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


  constructor(public dataService: DataService) {  }

  ngOnInit() {
  }
}
