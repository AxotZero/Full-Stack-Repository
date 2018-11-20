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

  ngOnInit() {
    // console.log('qq');
  }
  changeLink(i) {
    if ( this.Active === 0) { return ['./catalogGrid', this.dataService.Category , i ]; }
    return ['./catalogList', this.dataService.Category , i];
  }
  changePage(i) {
    window.document.body.scrollTop = 0;
    window.document.documentElement.scrollTop = 0;
    this.pageActive = i + 1;
    this.dataService.ChangePage(i);
  }
}
