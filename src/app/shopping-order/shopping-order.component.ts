import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-shopping-order',
  templateUrl: './shopping-order.component.html',
  styleUrls: ['./shopping-order.component.css']
})

export class ShoppingOrderComponent implements OnInit {
  get shoppingOrder() {
    return this.dataService.shoppingOrder;
  }

  get totalPrice() {
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
      this.dataService.getOrder().subscribe( (item: any) => {
        this.dataService.shoppingOrder = item.orders;
        this.dataService.ordertotal = 0;
        this.dataService.shoppingOrder.forEach(element => {
          this.dataService.ordertotal += element.total_price;
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

  deleteShoppingOrder(id) {
  console.log('delete');
  this.httpClient.delete(`http://localhost:8000/api/orders/${id}`, {
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
    }
    test() {
      this.dataService.createOrder([555, 666]).subscribe(
        data => {console.log(data); }
      );
    }
    is_check(n) {
      if (n === 0) {
        return '處理中';
      }
      return '已結單';
    }
}
