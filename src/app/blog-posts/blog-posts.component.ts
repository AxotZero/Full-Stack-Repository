import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  get Articles() {
    return this.serviceService.Articles;
  }
  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
  }

}
