import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  get Products() {
    return this.serviceService.Products;
  }

  get Index() {
    return this.serviceService.Index;
  }
  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
  }

}
