import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  get Person() {
    const person = {
      Username : '',
      Password : '',
      Email : '',
      Level: '',
      exp: 0,
    };
    const u = this.dataService.User;
    if (u === undefined) { return; }
    person.Username = u.name;
    person.Email = u.email;
    let n = '';
    if (u.exp < 100) {n = '學生'; } else
    if (u.exp < 500) {n = '下忍'; } else
    if (u.exp < 3000) {n = '中忍'; } else
    if (u.exp < 20000) {n = '上忍'; } else {n = '火影'; }
    person.Level = n;
    person.exp = u.exp;
    return person;
  }
  get Order() {
    let item;
    this.dataService.getOrder().subscribe(
      data => {item = data; }
    );
    return item;
  }

  buttonClick() {

  }


  constructor(public dataService: DataService,
              private httpClient: HttpClient) {  }

  ngOnInit() {
  }

  deleteOrder(id) {
    return this.httpClient.delete('http://localhost:8000/api/orders', id);
  }


}
