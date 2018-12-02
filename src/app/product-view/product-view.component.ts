import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
declare let $: any;

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  Product;
  Quantity = 1;
  get Index() {
    return this.route.snapshot.params['i'];
  }
  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              public dataService: DataService,
              private httpClient: HttpClient) {
    this.dataService.getProduct(this.Index).subscribe(data => {
      this.Product = data;
    });
  }

  ngOnInit() {
    setTimeout(() => {
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
    $('#list_banners').carouFredSel({
        prev: '#ban_prev',
        next: '#ban_next',
        scroll: 1,
        auto: false,
        swipe: {
            onMouse: true,
            onTouch: true}
    });
    $('#thumblist').carouFredSel({
        prev: '#img_prev',
        next: '#img_next',
        scroll: 1,
        auto: false,
        circular: false,
        swipe: {
            onMouse: true,
            onTouch: true}
    });
    }, 1);
  }
  addToCart(e) {

    if (this.Quantity < 1 || this.Quantity % 1 !== 0) {
      alert('Quantity must be integer and greater than 1');
      this.Quantity = 1;
      return;
    }
    if (this.authService.isLogin()) {
      const info = {
        user_id: this.dataService.User.id,
        product_id: e.id,
        quantity: this.Quantity
      };
      this.httpClient.post('http://localhost:8000/api/shopping_carts', info, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).subscribe((data: any) => {if ( data.success) { alert('Adding Successfully'); }});
    } else {
      alert('Please Login');
      this.router.navigate(['/login']);
    }
  }
}
