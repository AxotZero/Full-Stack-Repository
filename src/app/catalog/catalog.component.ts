import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute,
              public dataService: DataService) {

  }
  ngOnInit() {

  }
}
