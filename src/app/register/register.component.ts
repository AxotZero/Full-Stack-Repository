import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  register() {
    console.log(this.user);
    this.authService.register(this.user).subscribe(
      (data: any) => {
        console.log(data);
        if (data.success) {
          alert('Now you are a ninja~! Please Log in ~!');
          this.router.navigate(['/login']);
        } else {
          alert('fail');
        }
      },
      response => {
        const resError = response.error.errors;
        let s = '';
        console.log(response);
        if (typeof(resError.name) !== 'undefined') { s += resError.name + '\n'; }
        if (typeof(resError.email) !== 'undefined') { s += resError.email + '\n'; }
        if (typeof(resError.password) !== 'undefined') { s += resError.password + '\n'; } else
        if (typeof(resError.password_confirmation) !== 'undefined') { s += resError.password_confirmation + '\n'; }
        alert(s);
      }
    );
  }
}
