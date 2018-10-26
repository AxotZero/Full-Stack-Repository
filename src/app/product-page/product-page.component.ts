import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  @Input() imgsrc;

  get Products() {
    return this.serviceService.Products;
  }

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    }

}
