import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  ALLProducts = [];
  NUM = 0;
  get Index() {
    return this.route.snapshot.params['page'];
  }
  get attribute() {
    return this.route.snapshot.params['catelog'];
  }

  get Products() {
    return this.dataService.ListProducts;
  }

  constructor(private route: ActivatedRoute,
              public dataService: DataService,
              private router: Router,
              private authService: AuthService) {

    console.log(this.attribute);
    this.dataService.Category = this.attribute;
    this.dataService.Page = this.Index;
  }

  ngOnInit() {
  }

  addToCart(e) {
    if (this.authService.isLogin()) {
      console.log(e);
    } else {
      alert('Please Login');
      this.router.navigate(['/login']);
    }
  }

}
