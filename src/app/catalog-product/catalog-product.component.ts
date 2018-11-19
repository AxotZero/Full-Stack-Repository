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

  ngOnInit() {
    // console.log('qq');
  }
  changeLink(i) {
    if ( this.Active === 0) { return ['./catalogGrid', this.dataService.Category , i ]; }
    return ['./catalogList', this.dataService.Category , i];
  }
  changePage(i) {
    this.pageActive = i + 1;
    this.dataService.ChangePage(i);
  }
}
