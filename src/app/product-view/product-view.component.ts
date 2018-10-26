import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  get Index() {
    return this.route.snapshot.params['i'];
  }
  get Products() {
    return this.serviceService.Products;
  }
  constructor(private serviceService: ServiceService,
              private route: ActivatedRoute) {}

  ngOnInit() {
  }



}
