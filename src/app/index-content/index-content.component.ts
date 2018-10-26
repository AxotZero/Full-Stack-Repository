import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
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
    this.changeIndex();
  }
  changeIndex() {
    window.document.body.scrollTop = 0;
    window.document.documentElement.scrollTop = 0;
  }
}
