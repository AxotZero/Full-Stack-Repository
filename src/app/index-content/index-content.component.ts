import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AdService } from '../ad.service';
declare let $: any;
@Component({
  selector: 'app-index-content',
  templateUrl: './index-content.component.html',
  styleUrls: ['./index-content.component.css']
})
export class IndexContentComponent implements OnInit {

  easyProduct = [];
  strongProduct = [];
  get sliderAd() {
    return this.adService.sliderAd;
  }
  constructor(private http: HttpClient,
            public dataService: DataService,
            private authService: AuthService,
            private router: Router,
            private adService: AdService) {
    this.getProduct();
  }
  ngOnInit() {
    this.getProduct();
    // tslint:disable-next-line:max-line-length
  }

  getProduct() {
    this.http.get('http://localhost:8000/api/easyProduct').subscribe(
      (data: any) => {
        this.easyProduct = data;
        this.js();
    });
    this.http.get('http://localhost:8000/api/strongProduct').subscribe(
      (data: any) => {
        this.strongProduct = data;
        this.js();
    });
  }

  js() {
    setTimeout(() => {
      $('#slider').carouFredSel({
        prev: '.slidprev',
        next: '.slidnext',
        responsive	: true,
        pagination  : '#myController',
        scroll: 1,
        items		: {
          visible		: 1,
          width		: 870,
          height		: '46%'
        },
        swipe: {
            onMouse: true,
            onTouch: true
        }
    });
    $('#list_product').carouFredSel({
        prev: '#prev_c1',
        next: '#next_c1',
        scroll: 1,
        auto: false,
        swipe: {
            onMouse: true,
            onTouch: true}
    });
    $('#list_product2').carouFredSel({
        prev: '#prev_c2',
        next: '#next_c2',
        scroll: 1,
        auto: false,
        swipe: {
            onMouse: true,
            onTouch: true}
    });
    }, 1);
  }
  changeIndex() {
    window.document.body.scrollTop = 0;
    window.document.documentElement.scrollTop = 0;
  }
  addToCart(e) {
    if (this.authService.isLogin()) {
      const user_exp = this.dataService.User.exp;
      const info = { user_id: this.dataService.User.id, product_id: e.id, quantity: 1};
      if (e.level_id === 1) {
        if (user_exp < 20000) { alert('你買不起啦，你層次太低，你距離火影還差地遠勒~!');  return; }
      } else if (e.level_id === 2) {
        if (user_exp < 3000) { alert('你買不起啦，你層次太低，你以為中忍很強是不是~!'); return; }
      } else if (e.level_id === 3) {
        if (user_exp < 500) { alert('你買不起啦，你層次太低，你不就只是個下忍 ~!');  return; }
      } else if (e.level_id === 4) {
        if (user_exp < 100) { alert('你買不起啦，你層次太低，你連下忍都不是 ~!'); return; }
      }
      // console.log(info);
      this.http.post('http://localhost:8000/api/shopping_carts', info, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).subscribe((data: any) => {
        if ( data.success) {
        alert('Adding Successfully');
        this.dataService.getTotalPrice();
      }});
    } else {
      alert('Please Login');
      this.router.navigate(['/login']);
    }
  }
  openAdd(link) {
    window.open(link);
  }
}
