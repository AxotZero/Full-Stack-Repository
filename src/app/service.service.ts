import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  Products = [];

  constructor() {
    console.log('hi');
    for (let i = 0 ; i < 10; i++) {
      this.Products[i] = { imgsrc: 'images/product_' + (i + 1) + '.png' };
    }
  }
}
