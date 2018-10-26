import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.css']
})
export class CatalogProductComponent implements OnInit {

  Active = 0;
  pageActive = 1;

  constructor() { }

  ngOnInit() {
  }
  changeLink(i) {
    if ( this.Active === 0) { return ['./catalogGrid', i]; }
    return ['./catalogList', i];
  }

}
