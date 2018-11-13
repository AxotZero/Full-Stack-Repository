import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  register(user) {
    return this.httpClient.post('http://localhost:8000/api/register', user);
  }

  login(user) {
    return this.httpClient.post('http://localhost:8000/api/login', user);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLogin() {
    return localStorage.getItem('token');
  }
}
