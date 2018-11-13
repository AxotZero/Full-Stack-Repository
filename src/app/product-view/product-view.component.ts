import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
declare let $: any;

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



}
