import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };
  constructor(private router: Router,
    private authService: AuthService,
    private http: HttpClient,
    public dataService: DataService) {}

  ngOnInit() {}

  login() {
    // 帳號密碼的檢查

    this.authService.login(this.user).subscribe((data: any) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/']);
        this.dataService.getUserInfo();
           window.open('https://event.beanfun.com/maplestory/E20181203/index.aspx', 'newname', 'width=1000,height=1000', true);
           window.document.body.scrollTop = 0;
    window.document.documentElement.scrollTop = 0;
      } else {
        alert('fail');
      }
    }, response => {
      console.log(response);
      alert('Email or password is invalid !!');
    });
  }
}
