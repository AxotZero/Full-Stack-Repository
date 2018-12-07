import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  toMyAccount() {
    if (this.authService.isLogin()) {
      this.router.navigate(['./profile/0']);
    } else {
      alert('Please Login');
      this.router.navigate(['./login']);
    }
  }
  toOrderHistory() {
    if (this.authService.isLogin()) {
      this.router.navigate(['./shopping-order']);
    } else {
      alert('Please Login');
      this.router.navigate(['./login']);
    }
  }
}
