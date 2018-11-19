import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../products';
@Component({
  selector: 'app-catalog-grid',
  templateUrl: './catalog-grid.component.html',
  styleUrls: ['./catalog-grid.component.css']
})
export class CatalogGridComponent implements OnInit {

  // Products = [];
  ALLProducts = [];
  NUM = 0;
  get Index() {
    return this.route.snapshot.params['page'];
  }
  get attribute() {
    return this.route.snapshot.params['catelog'];
  }

  get Products() {
    return this.dataService.GridProducts;
  }

  constructor(private serviceService: ServiceService,
              private route: ActivatedRoute,
              public dataService: DataService) {

    console.log(this.attribute);
    this.dataService.Category = this.attribute;
    this.dataService.Page = this.Index;

    // setTimeout(() => {
    //   const attrPro = this.dataService.FullProducts.filter(
    //     data => String(data.category_id) === this.attribute);
    //   for (let i = 0; i < 5; i++) {
    //      this.Products[i] = attrPro[i];
    //    }
    // }, 500);
  }

  ngOnInit() {
    console.log(this.attribute + 'yayaya');
    this.Page(0);
  }

  Page(index) {


    // if (this.dataService.FullProducts.length === 0) {
    //   setTimeout(() => {
    //     const attrPro = this.dataService.FullProducts.filter(
    //       data => String(data.category_id) === this.attribute) ;
    //      for (let i = 0; i < 5; i++) {
    //        this.Products[i] = attrPro[i];
    //      }
    //     }, 300);
    // } else {
    //   const attrPro = this.dataService.FullProducts.filter(
    //     data => String(data.category_id) === this.attribute);
    //   for (let i = 0; i < 5; i++) {
    //      this.Products[i] = attrPro[i];
    //   }
    // }
  }
}
