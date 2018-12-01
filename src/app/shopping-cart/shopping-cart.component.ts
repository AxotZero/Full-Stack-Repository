import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart = [];

  address = '';
  phoneNumber = '';
  price = 0;

  constructor(private authService: AuthService,
    public dataService: DataService,
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute) {

    }


    getItem() {
      if (this.dataService.User === undefined) {setTimeout(() => {this.dataService.getShoppingCart().subscribe( (item: any) => {
        this.shoppingCart = item; }); }, 700); } else {
          this.dataService.getShoppingCart().subscribe( (item: any) => {
            this.shoppingCart = item; });
      }
    }
    ngOnInit() {
      this.getItem();
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
      }, 1);
    }

  deleteShoppingCart(id) {
    console.log('delete');
    this.httpClient.delete(`http://localhost:8000/api/shopping_carts/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(data => {console.log(data); this.getItem(); });
  }
  update(product_id, quantity) {
    console.log('update');
    this.getItem();
    const ob = {user_id: this.dataService.User.id, product_id: product_id, quantity: quantity } ;
    this.httpClient.post('http://localhost:8000/api/shopping_carts/update', ob, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(data => {console.log(data); this.getItem(); });
  }

  createOrder() {
    console.log('createOrder');
    this.address = ' 阿布達比 ';
    this.price = 500;
    this.phoneNumber = '123456789';
    const ob = {
      user_id: this.dataService.User.id,
      address: this.address,
      phone_number: this.phoneNumber,
      total_price: this.price
    };
    this.httpClient.post('http://localhost:8000/api/orders', ob, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(data => {console.log(data); });
  }
  test() {
    this.dataService.createOrder([555, 666]).subscribe(
      data => {console.log(data); }
    );
  }
}


