import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  get Index() {
    return this.route.snapshot.params['page'];
  }
  get Products() {
    return this.serviceService.Products;
  }
  constructor(private serviceService: ServiceService,
              private route: ActivatedRoute) {}

  ngOnInit() {
  }

}
