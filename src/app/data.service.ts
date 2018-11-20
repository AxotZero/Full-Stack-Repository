import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  FullProducts = [];
  GridProducts = [];
  ListProducts = [];
  CategoryProducts = [];
  Category;
  Page;
  // import { HttpClient } from '@angular/common/http';
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://localhost:8000/api/products').subscribe
    ((data: any) => this.FullProducts = data);
    console.log('constructor');
    if ( this.CategoryProducts.length === 0) {
      setTimeout( () => {
        this.CategoryProducts = this.FullProducts.filter(data =>
          Number(data.category_id) === Number(this.Category) );
          setTimeout( () => { this.ShowProducts(); }, 200) ;
      }, 500);
    } else {
      this.CategoryProducts = this.FullProducts.filter(data =>
        Number(data.category_id) === Number(this.Category) );
        this.ShowProducts();
    }
  }

  getProducts() {
    console.log('http get products');
    return this.httpClient
      .get('http://localhost:8000/api/products');
  }

  getProduct(id) {
    return this.httpClient
      .get(`http://localhost:8000/api/products/${id}`);
  }

  createOrder(productIds) {
    return this.httpClient.post(`http://localhost:8000/api/orders`, productIds, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  ChangeCategory(num) {
    console.log('change Category');
    this.Category = num;
    this.CategoryProducts = this.FullProducts.filter(data => data.Category === num );
    this.ShowProducts();
  }

  ChangePage(num) {
    this.Page = num;
    this.ShowProducts();
  }

  ShowProducts() {
     console.log(this.Category + ' ' + this.Page);
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
}
