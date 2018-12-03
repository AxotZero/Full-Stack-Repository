import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  user = {
    email : '',
    password : '',
    password_confirm : ''
  };
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  reset() {
    this.user.email = localStorage.getItem('email');
    this.http.post('http://localhost:8000/api/mailTo', this.user).subscribe(data => {
  });
    alert('修改完成，請登入');
    this.router.navigate(['/login']);
    console.log(this.user.password);
    console.log(this.user.password_confirm);
    console.log(this.user.email);
  }
}
