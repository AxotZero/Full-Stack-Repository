import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-webmail',
  templateUrl: './webmail.component.html',
  styleUrls: ['./webmail.component.css']
})
export class WebmailComponent implements OnInit {
  content = {
    nickname : '',
    title : '',
    email : '',
    text : '',
  };
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  mail() {
    this.http.post('http://localhost:8000/api/mailTo', this.content).subscribe(data => {
      console.log(data);
      alert('感謝您的聯繫，五影們會盡快回覆！');
      this.router.navigate(['/']);
    });
  }
}
