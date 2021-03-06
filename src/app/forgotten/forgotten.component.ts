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
      localStorage.removeItem('verifyCode');
      alert('已驗證，請重設密碼！');
      this.router.navigate(['/reset']);
    } else {
      alert('Wrong VerifyCode !!');
    }
  }
  find() {
    // console.log(this.user);
    if (this.user.name === '' || this.user.email.indexOf('@') === -1) { return; }
    this.http.post('http://localhost:8000/api/findpassword', this.user).subscribe(data => {
    this.verifyCode = data;
      // console.log(this.verifyCode);
    localStorage.setItem('verifyCode', this.verifyCode);
    this.str = localStorage.getItem('verifyCode');
    this.verifyCode = this.str;
    this.router.navigate(['/forgotten']);
    if (this.str === null || this.str === 'null') {
      alert('Account not Exist !!');
    } else {
      localStorage.setItem('email', this.user.email);
      alert('請至您的email取得驗證碼');
    }
    });
  }
}
