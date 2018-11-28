import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  constructor(private router: Router, private authService: AuthService, private http: HttpClient) {}

  ngOnInit() {}

  login() {
    // 帳號密碼的檢查
    this.authService.login(this.user).subscribe((data: any) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/']);
        console.log(this.http.get('http://localhost:8000/api/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }));
      } else {
        alert('fail');
      }
    }, response => {
      console.log(response);
      alert('Email or password is invalid !!');
    });
  }
}
