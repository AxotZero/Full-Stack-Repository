import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.css']
})
export class CatalogProductComponent implements OnInit {

  Active = 0;
  pageActive = 1;
  sortM = '↑';
  constructor(public dataService: DataService) { }
  get ResultsNumber() {
    return this.dataService.CategoryProducts.length;
  }
  get HowManyPages() {
    const n = this.ResultsNumber;
    if (this.Active === 0) {
      return parseInt ( String(n / 9), 10 ) + 1;
    }
    return parseInt ( String(n / 5), 10 ) + 1;
  }
  get Page() {
    return this.dataService.Page;
  }
  get Category() {
    return this.dataService.Category;
  }
  get Search() {
    return this.dataService.SearchFlag;
  }

  ngOnInit() {
    // console.log('qq');
  }
  changeLink(i) {
    if (i >= 0 && i < this.HowManyPages) {
      if ( this.Active === 0) {
        if (!this.Search) {
          return ['./catalogGrid', this.dataService.Category , i];
        } else {
          return ['./catalogGrid', this.dataService.Category , i, 'search'];
        }
      } else {
        if (!this.Search) {
          return ['./catalogList', this.dataService.Category , i];
        } else {
          return ['./catalogList', this.dataService.Category , i, 'search'];
        }
      }
      // console.log(this.Search);
    }
  }
  changePage(i) {
    window.document.body.scrollTop = 0;
    window.document.documentElement.scrollTop = 0;
    if (i >= 0 && i < this.HowManyPages) {
      this.pageActive = i + 1;
      this.dataService.ChangePage(i);
    }
  }
  ChangeSortKey(s) {
    this.dataService.OrderbyKey = s;
    this.dataService.SortCategoryProducts();
  }
  ChangeSortMethod() {
    if (this.sortM === '↑') {
      this.dataService.OrderbyMethod = 'down';
      this.sortM = '↓';
      this.dataService.SortCategoryProducts();
    } else {
      this.dataService.OrderbyMethod = 'up';
      this.sortM = '↑';
      this.dataService.SortCategoryProducts();
    }
  }
}
