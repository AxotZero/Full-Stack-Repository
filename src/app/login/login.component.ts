import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  login() {
    // 帳號密碼的檢查
    this.authService.login(this.user).subscribe((data: any) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/']);
      }
    }, response => {

      console.log(response);
      alert(response.error.message);
    });
  }
}
