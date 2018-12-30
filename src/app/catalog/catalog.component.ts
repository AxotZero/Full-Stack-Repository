import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {


  get CatalogNumber() {
    return this.dataService.CatalogNumber;
  }

  get rotateAd() {
    return this.adService.rotateAd;
  }

  constructor(private router: Router,
              public dataService: DataService,
              private adService: AdService) {

  }
  ngOnInit() {

  }
  ChangeCategory(n) {
    window.document.body.scrollTop = 0;
    window.document.documentElement.scrollTop = 0;
    this.router.navigate(['/catalog/catalogGrid/', n, 0]);
    this.dataService.ChangeCategory(n);
  }
  openAdd(link) {
    window.open(link);
  }
}
