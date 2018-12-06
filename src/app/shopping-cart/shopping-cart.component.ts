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

  get shoppingCart() {
    return this.dataService.shoppingCart;
  }

  get totalPrice () {
    return this.dataService.totalPrice;
  }

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
      this.dataService.getShoppingCart().subscribe( (item: any) => {
        this.dataService.shoppingCart = item;
        this.dataService.totalPrice = 0;
        item.forEach(element => {
          this.dataService.totalPrice += element.total_price;
        });
      });
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
  update(index, quantity) {
    if (quantity < 1 || quantity % 1 !== 0) {
      quantity = 1;
    }
    this.getItem();
    const ob = {
      shoppingcart_id: index,
      quantity: quantity } ;
    this.httpClient.post('http://localhost:8000/api/shopping_carts/update', ob, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(data => {console.log(data); this.getItem(); });
  }

  createOrder() {
    console.log('createOrder\n' + 'this.');
    let error = '';
    if ( this.totalPrice === 0) {
      alert('There is nothing in your shopping cart!!');
      return;
    }
    if ( this.address === '') {
      error += 'Address can not be empty!!\n';
    }
    if ( this.phoneNumber === '') {
      error += 'Phone Number can not be empty!!\n';
    }
    if ( error !== '') {
      alert(error);
      return;
    }
    const ob = {
      user_id: this.dataService.User.id,
      address: this.address,
      phone_number: this.phoneNumber,
      total_price: this.totalPrice
    };
    this.httpClient.post('http://localhost:8000/api/orders', ob, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data: any) => { alert(data.message); });
    this.dataService.shoppingCart = [];
    this.dataService.totalPrice = 0;
     this.router.navigate(['/']);
  }
  test() {
    this.dataService.createOrder([555, 666]).subscribe(
      data => {console.log(data); }
    );
  }
}


