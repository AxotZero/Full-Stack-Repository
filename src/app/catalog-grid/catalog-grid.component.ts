import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../products';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-catalog-grid',
  templateUrl: './catalog-grid.component.html',
  styleUrls: ['./catalog-grid.component.css']
})
export class CatalogGridComponent implements OnInit {

  // Products = [];
  ALLProducts = [];
  NUM = 0;
  get Index() {
    return this.route.snapshot.params['page'];
  }
  get attribute() {
    return this.route.snapshot.params['catelog'];
  }

  get Products() {
    return this.dataService.GridProducts;
  }

  constructor(private serviceService: ServiceService,
              private route: ActivatedRoute,
              private router: Router,
              public dataService: DataService,
              private authService: AuthService) {
    this.dataService.Category = this.attribute;
    this.dataService.Page = this.Index;
    console.log('grid');
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
