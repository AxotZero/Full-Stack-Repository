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
    setTimeout(() => {
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
    $('#list_product').carouFredSel({
        prev: '#prev_c1',
        next: '#next_c1',
        scroll: 1,
        auto: false,
        swipe: {
            onMouse: true,
            onTouch: true}
    });
    $('#list_product2').carouFredSel({
        prev: '#prev_c2',
        next: '#next_c2',
        scroll: 1,
        auto: false,
        swipe: {
            onMouse: true,
            onTouch: true}
    });
    $('#list_banners').carouFredSel({
        prev: '#ban_prev',
        next: '#ban_next',
        scroll: 1,
        auto: false,
        swipe: {
            onMouse: true,
            onTouch: true}
    });
    $('#thumblist').carouFredSel({
        prev: '#img_prev',
        next: '#img_next',
        scroll: 1,
        auto: false,
        circular: false,
        swipe: {
            onMouse: true,
            onTouch: true}
    });
    }, 1);

  }
  changeIndex() {
    window.document.body.scrollTop = 0;
    window.document.documentElement.scrollTop = 0;
  }
}
