import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.css']
})
export class CatalogProductComponent implements OnInit {

  Active = 0;
  pageActive = 1;
  sortM = '↑';

  get ResultsNumber() {
    return this.dataService.CategoryProducts.length;
  }
  get HowManyPages() {
    const n = this.ResultsNumber;
    if (this.getUrl() === 0) {
      return parseInt ( String(n / 9), 10 ) + 1;
    }
    return parseInt ( String(n / 5), 10 ) + 1;
  }
  get Page() {
    return Number(this.dataService.Page);
  }
  get Category() {
    return this.dataService.Category;
  }
  get Search() {
    return this.dataService.SearchFlag;
  }


  constructor(public dataService: DataService, private route: ActivatedRoute ) { this.Active = 0; }

  getUrl() {
    if (window.location.href.indexOf('catalogGrid') !== -1) {  return 0; }
    if (window.location.href.indexOf('catalogList') !== -1) {  return 1; }
    return 2;
  }

  changeRender(n) {
    if (window.location.href.indexOf('search') !== -1) {
      if (n === 0) {
        return ['./catalogGrid', this.Category, 0, 'search'];
      } else {
        return ['./catalogList', this.Category, 0, 'search'];
      }
    } else {
      if ( n === 0) {
        return ['./catalogGrid', this.Category, 0];
      } else {
        return ['./catalogList', this.Category, 0];
      }
    }
  }


  ngOnInit() {
    this.Active = 0;
    this.pageActive = 1;
  }

  changeActive(n) {
    this.Active = n;
    return this.changeLink(0);
  }

  changeLink(i) {
    if (i >= 0 && i < this.HowManyPages) {
      if ( this.getUrl() === 0) {
        if (!this.Search) {
          return ['./catalogGrid', this.dataService.Category , i];
        } else {
          return ['./catalogGrid', this.dataService.Category , i, 'search'];
        }
      } else if ( this.getUrl() === 1) {
        if (!this.Search) {
          return ['./catalogList', this.dataService.Category , i];
        } else {
          return ['./catalogList', this.dataService.Category , i, 'search'];
        }
      }
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
