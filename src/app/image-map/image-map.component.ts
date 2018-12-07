import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-image-map',
  templateUrl: './image-map.component.html',
  styleUrls: ['./image-map.component.css']
})
export class ImageMapComponent implements OnInit {

  constructor(private router: Router, public dataService: DataService) { }

  ngOnInit() {
  }
  ck(n) {
    window.document.body.scrollTop = 0;
    window.document.documentElement.scrollTop = 0;
    this.router.navigate(['/catalog/catalogGrid/', n, 0]);
    this.dataService.ChangeCategory(n);
  }
  search(searchElement) {
    this.router.navigate(['/catalog/catalogGrid/', searchElement, 0, 'search']);
    this.dataService.search(searchElement);
  }
}
