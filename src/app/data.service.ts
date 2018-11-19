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

    if ( this.CategoryProducts.length === 0) {
      setTimeout( () => {
        this.CategoryProducts = this.FullProducts.filter(data =>
          String(data.category_id) === String(this.Category) );
          setTimeout( () => {this.ShowProducts(); }, 300) ;
      }, 500);
    } else {
      this.CategoryProducts = this.FullProducts.filter(data =>
        String(data.category_id) === String(this.Category) );
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
    // console.log( this.CategoryProducts);
    // console.log(this. FullProducts);
    for (let i = 0; i < 5; i++) {
      this.GridProducts[i] = this.CategoryProducts[Number(this.Page) * 5 + i];
    }
    for (let i = 0; i < 9; i++) {
      this.ListProducts[i] = this.CategoryProducts[Number(this.Page) * 9 + i];
    }
  }

  // search(keyword) {
  //   console.log('hey');
  //   this.article = this.FullArticle.filter(article => article.title.indexOf(keyword) !== -1);
  // }
}
