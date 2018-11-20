import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  ALLProducts = [];
  NUM = 0;
  get Index() {
    return this.route.snapshot.params['page'];
  }
  get attribute() {
    return this.route.snapshot.params['catelog'];
  }

  get Products() {
    return this.dataService.ListProducts;
  }

  constructor(private serviceService: ServiceService,
              private route: ActivatedRoute,
              public dataService: DataService) {

    console.log(this.attribute);
    this.dataService.Category = this.attribute;
    this.dataService.Page = this.Index;
  }

  ngOnInit() {
    console.log(this.attribute + 'yayaya');
    this.Page(0);
  }

  Page(index) {
  }

}
