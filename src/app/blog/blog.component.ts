import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout( () => {
      $('#list_banners').carouFredSel({
        prev: '#ban_prev',
        next: '#ban_next',
        scroll: 1,
        auto: false,
        swipe: {
            onMouse: true,
            onTouch: true }
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
