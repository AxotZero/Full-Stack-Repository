import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-index-content',
  templateUrl: './index-content.component.html',
  styleUrls: ['./index-content.component.css']
})
export class IndexContentComponent implements OnInit {

  get Products() {
    return this.serviceService.Products;
  }
  constructor(private serviceService: ServiceService) {}



  ngOnInit() {
  }

}
