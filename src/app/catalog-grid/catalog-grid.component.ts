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
    this.dataService.Category = this.attribute;
    this.dataService.Page = this.Index;
    console.log('grid');
  }

  ngOnInit() {
    this.Page(0);
  }

  Page(index) {
  }
}
