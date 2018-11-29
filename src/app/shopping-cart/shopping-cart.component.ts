import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

declare let $: any;

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  get shoppingCart() {
    let shopping;
    this.dataService.getShoppingCart().subscribe(
      data => {shopping = data; }
    );
    return shopping;
  }

  address = '';
  phoneNumber = '';
  price = 0;

  constructor(private authService: AuthService,
    public dataService: DataService,
    private httpClient: HttpClient) { }

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
      }, 1);
    }

  deleteShoppingCart(id) {
    return this.httpClient.delete('http://localhost:8000/api/shopping_carts', id);
  }
  update(product_id, quantity) {
    const ob = {user_id: this.dataService.User.id, product_id: product_id, quantity: quantity } ;
    return this.httpClient.post('http://localhost:8000/api/shopping_carts/update', ob);
  }

  createOrder() {
    const ob = {
      user_id: this.dataService.User.id,
      address: this.address,
      phone_number: this.phoneNumber,
      total_price: this.price
    };
    return this.httpClient.post('http://localhost:8000/api/orders', ob);
  }
  test() {
    this.dataService.createOrder(555).subscribe(
      data => {console.log(data); }
    );
  }
}


