import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
declare let $: any;
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
    $('#slider').carouFredSel({
      prev: '.slidprev',
      next: '.slidnext',
      responsive	: true,
      pagination  : '#myController',
      scroll: 1,
items		: {
  visible		: 1,
  width		: 870,
  height		: '46%'
},
      swipe: {
          onMouse: true,
          onTouch: true
}
  });
  }
  changeIndex() {
    window.document.body.scrollTop = 0;
    window.document.documentElement.scrollTop = 0;
  }
}
