import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchElement = '';
  get cartPrice() {
    return this.dataService.totalPrice;
  }
  get isLogin() {
    return this.authService.isLogin();
  }

  constructor(private authService: AuthService, private router: Router, private dataService: DataService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ChangeCategory(n) {
    window.document.body.scrollTop = 0;
    window.document.documentElement.scrollTop = 0;
    this.dataService.ChangeCategory(n);
    this.router.navigate(['/catalog/catalogGrid/', n, 0]);
  }

  checkout() {
    this.dataService.createOrder([2, 4]).subscribe(data => {
      console.log(data);
      alert('checkout success');
    }, (response) => {
      if (response.status === 401) {
        alert('please login');
        this.router.navigate(['/login']);
      }
    });
  }
  search(searchElement) {
    if (searchElement.trim() === '') {return; }
    this.router.navigate(['/catalog/catalogGrid/', searchElement, 0, 'search']);
    this.dataService.search(searchElement);
  }
}
