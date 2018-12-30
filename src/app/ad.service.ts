import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  sliderAd = [];
  rotateAd = [];
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://localhost:8000/api/sliderAd').subscribe(
      (data:  any) => {
        this.sliderAd = data;
      }
    );
    this.httpClient.get('http://localhost:8000/api/rotationAd').subscribe(
      (data:  any) => {
        this.rotateAd = data;
      }
    );
  }

  getRotateAd() {
    return this.httpClient.get('http://localhost:8000/api/rotationAd');
  }
}
