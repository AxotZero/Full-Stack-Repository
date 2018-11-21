import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {


  get CatalogNumber() {
    return this.dataService.CatalogNumber;
  }

  constructor(private router: Router,
              public dataService: DataService) {

  }
  ngOnInit() {

  }
  ChangeCategory(n) {
    window.document.body.scrollTop = 0;
    window.document.documentElement.scrollTop = 0;
    this.router.navigate(['/catalog/catalogGrid/', n, 0]);
    this.dataService.ChangeCategory(n);
  }
}
