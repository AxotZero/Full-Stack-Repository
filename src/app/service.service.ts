import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  Products = [];
  Articles = [];
  Index = 0;
  constructor() {
    for (let i = 0 ; i < 10; i++) {
      this.Products[i] = { imgsrc: 'images/product_' + (i + 1) + '.png' };
<<<<<<< HEAD
      // console.log(this.Products[i]); (debug purpose)
=======
      this.Articles[i] = {
        title : 'Citrus Magic Solid Air Freshener',
        // tslint:disable-next-line:max-line-length
        article : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.' ,
        author : 'Mike Example',
        postTime: '03.11.2012',
        category: ['Sports', 'Movies']
      } ;
>>>>>>> d17e8ef59404163c3b1b0d05d70ee9e9b43b9e65
    }
  }
  changeIndex(i) {
    this.Index = i;
  }
}
