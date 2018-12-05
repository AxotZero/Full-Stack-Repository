import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../products';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
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

  get Search() {
    return this.route.snapshot.params['search'];
  }

  get Products() {
    return this.dataService.GridProducts;
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
              public dataService: DataService,
              private authService: AuthService,
              private httpClient: HttpClient) {
    this.dataService.Category = this.attribute;
    this.dataService.Page = Number(this.Index);
    if (this.Search !== undefined) {
      this.dataService.SearchFlag = 1;
    }
  }

  ngOnInit() {
  }

  addToCart(e) {
    if (this.authService.isLogin()) {
      const info = { user_id: this.dataService.User.id, product_id: e.id, quantity: 1};
      // console.log(info);
      this.httpClient.post('http://localhost:8000/api/shopping_carts', info, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).subscribe((data: any) => {
        if ( data.success) {
        alert('Adding Successfully');
        this.dataService.getTotalPrice();
      }});
    } else {
      alert('Please Login');
      this.router.navigate(['/login']);
    }
  }
  convertLevel(id) {
    switch (id) {
      case 1: return 'S';
      case 2: return 'A';
      case 3: return 'B';
      case 4: return 'C';
      case 5: return 'D';
    }
  }
}
