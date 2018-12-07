import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
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
  get Search() {
    return this.route.snapshot.params['search'];
  }
  get Products() {
    return this.dataService.ListProducts;
  }

  constructor(private route: ActivatedRoute,
              public dataService: DataService,
              private router: Router,
              private authService: AuthService,
              private httpClient: HttpClient) {
    this.dataService.Category = this.attribute;
    this.dataService.Page = this.Index;
    if (this.Search !== undefined) {
      this.dataService.SearchFlag = 1;
    }
  }

  ngOnInit() {
  }

  addToCart(e) {
    if (this.authService.isLogin()) {
      const user_exp = this.dataService.User.exp;
      const info = { user_id: this.dataService.User.id, product_id: e.id, quantity: 1};
      if (e.level_id === 1) {
        if (user_exp < 20000) { alert('你買不起啦，你層次太低，你距離火影還差地遠勒~!');  return; }
      } else if (e.level_id === 2) {
        if (user_exp < 3000) { alert('你買不起啦，你層次太低，你以為中忍很強是不是~!'); return; }
      } else if (e.level_id === 3) {
        if (user_exp < 500) { alert('你買不起啦，你層次太低，你不就只是個下忍 ~!');  return; }
      } else if (e.level_id === 4) {
        if (user_exp < 100) { alert('你買不起啦，你層次太低，你連下忍都不是 ~!'); return; }
      }
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

}
