import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotten',
  templateUrl: './forgotten.component.html',
  styleUrls: ['./forgotten.component.css']
})
export class ForgottenComponent implements OnInit {

  user = {
    name: '',
    email: ''
  };
  str;
  inputcode;
  verifyCode = undefined;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.str = localStorage.getItem('verifyCode');
  }
  verify() {
    this.verifyCode = localStorage.getItem('verifyCode');
    if (this.inputcode === this.verifyCode) {
      console.log('confirm');
      this.router.navigate(['/reset']);
    } else {
      alert('Wrong VerifyCode !!');
    }
  }
  find() {
    // console.log(this.user);
    this.http.post('http://localhost:8000/api/findpassword', this.user).subscribe(data => {
    this.verifyCode = data;
      // console.log(this.verifyCode);
    localStorage.setItem('verifyCode', this.verifyCode);
    this.str = localStorage.getItem('verifyCode');
    this.verifyCode = this.str;
    console.log(this.str);
    this.router.navigate(['/forgotten']);
    if (this.str === null || this.str === 'null') {
      alert('Account not Exist !!');
    }
    });
  }
}
