import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-catalog-grid',
  templateUrl: './catalog-grid.component.html',
  styleUrls: ['./catalog-grid.component.css']
})
export class CatalogGridComponent implements OnInit {

  get Products() {
    return this.serviceService.Products;
  }
  constructor(private serviceService: ServiceService) {}


  ngOnInit() {
  }

}
