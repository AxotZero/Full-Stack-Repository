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
          this.router.navigate(['/login']);
        } else {
          alert('fail');
        }
      },
      response => {
        console.log(response);
        alert(response.error.message);
      }
    );
  }
}
