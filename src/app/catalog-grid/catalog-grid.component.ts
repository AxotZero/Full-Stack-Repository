import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-catalog-grid',
  templateUrl: './catalog-grid.component.html',
  styleUrls: ['./catalog-grid.component.css']
})
export class CatalogGridComponent implements OnInit {

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
