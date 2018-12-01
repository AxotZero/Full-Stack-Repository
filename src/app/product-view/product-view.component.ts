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
  constructor(private serviceService: ServiceService,
              private route: ActivatedRoute,
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
    if (this.authService.isLogin()) {
      console.log(e);
      if (this.Quantity === null) {
        alert('Quantity cannot be empty !!');
        this.Quantity = 1;
      } else {
        const info = { user_id: this.dataService.User.id, product_id: e.id, quantity: this.Quantity};
        console.log(info);
        return this.httpClient.post('http://localhost:8000/api/shopping-carts', info);
      }
    } else {
      alert('Please Login');
      this.router.navigate(['/login']);
    }
  }
}
