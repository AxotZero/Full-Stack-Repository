import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNumber } from 'util';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  FullProducts = [];
  GridProducts = [];
  ListProducts = [];
  CategoryProducts = [];
  CatalogNumber = [0, 0, 0, 0, 0, 0, 0];
  User;
  Category;
  Page;
  OrderbyKey = 'Name';
  OrderbyMethod = 'up';
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://localhost:8000/api/products').subscribe
    ((data: any) => this.FullProducts = data);
    setTimeout( () => {
      if ( isNumber(Number(this.Category))) {
        this.ChangeCategory(Number(this.Category));
      } else {
        this.search(this.Category);
      }
    }, 1000);
    setTimeout(() => {this.initCategoryNumber(); }, 1000) ;
    // test
    this.httpClient.get('http://localhost:8000/api/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
    }).subscribe(data => {this.User = data; console.log(this.User); });
  }

  getProducts() {
    return this.httpClient
      .get('http://localhost:8000/api/products');
  }

  getProduct(id) {
    return this.httpClient
      .get(`http://localhost:8000/api/products/${id}`);
  }

  getShoppingCart() {
    return this.httpClient
    .get(`http://localhost:8000/api/shopping_carts/${this.User.id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  getOrder() {
    return this.httpClient
      .get(`http://localhost:8000/api/orders/${this.User.id}`);
  }

  createOrder(productIds) {
    return this.httpClient.post(`http://localhost:8000/api/orders`, productIds, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  ChangeCategory(num) {
    this.Category = num;
    this.Page = 0;
    if ( Number(this.Category) === -7) {
      this.CategoryProducts = this.FullProducts.filter(data =>
        Number(data.category_id) < Number(this.Category) * -1 );
    } else if (Number(this.Category) === -11) {
      this.CategoryProducts = this.FullProducts.filter(data =>
        Number(data.category_id) > Number(this.Category) * -1 );
    } else {
      this.httpClient.get(`http://localhost:8000/api/products/categories/${this.Category}`)
      .subscribe( (data: any) => { this.CategoryProducts = data; });
    }
    setTimeout( () => { this.ShowProducts(); }, 300) ;
  }

  ChangePage(num) {
    this.Page = num;
    this.ShowProducts();
  }

  SortCategoryProducts() {
    if (this.OrderbyKey === 'Name') {
      if (this.OrderbyMethod === 'up') {
        this.CategoryProducts.sort( function(a, b) {return a.name - b.name; });
      } else {
        this.CategoryProducts.sort( function(a, b) {return b.name - a.name; });
      }
    } else
    if (this.OrderbyKey === 'Price') {
      if (this.OrderbyMethod === 'up') {
        this.CategoryProducts.sort( function(a, b) {return a.price - b.price; });
      } else {
        this.CategoryProducts.sort( function(a, b) {return b.price - a.price; });
      }
    } else {
      if (this.OrderbyMethod === 'up') {
        this.CategoryProducts.sort( function(a, b) {return b.level_id - a.level_id; });
      } else {
        this.CategoryProducts.sort( function(a, b) {return a.level_id - b.level_id; });
      }
    }
    setTimeout( () => { this.ShowProducts(); }, 300) ;
  }

  ShowProducts() {
    this.GridProducts = [];
    this.ListProducts = [];
    for (let i = 0; i < 9; i++) {
      if (Number(this.Page) * 9 + i < this.CategoryProducts.length) {
        this.GridProducts[i] = this.CategoryProducts[Number(this.Page) * 5 + i];
      }
    }
    for (let i = 0; i < 5; i++) {
      if (Number(this.Page) * 5 + i < this.CategoryProducts.length) {
        this.ListProducts[i] = this.CategoryProducts[Number(this.Page) * 9 + i];
      }
    }
  }
  search(n) {
      this.CategoryProducts = this.FullProducts.filter(data =>
        data.name.indexOf(n) !== -1 || data.description.indexOf(n) !== -1);
        setTimeout(() => { this.ShowProducts(); } , 200);
  }
  initCategoryNumber() {
    this.CatalogNumber = [0, 0, 0, 0, 0, 0, 0];
    this.FullProducts.forEach(element => {
      const n = element.category_id;
      if (n < 7) {this.CatalogNumber[0]++; } else
      if ( n === 7) { this.CatalogNumber[1]++; } else
      if ( n === 8) { this.CatalogNumber[2]++; } else
      if ( n === 9) { this.CatalogNumber[3]++; } else
      if ( n === 10) { this.CatalogNumber[4]++; } else
      if ( n === 11) { this.CatalogNumber[5]++; } else { this.CatalogNumber[6]++; }
    });
  }



}
