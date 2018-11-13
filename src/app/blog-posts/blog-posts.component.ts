import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../products';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  articles: Product[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.dataService.getProducts()
      .subscribe((data: Product[]) => {
        this.articles = data;
        console.log(data);
      });
  }

}
