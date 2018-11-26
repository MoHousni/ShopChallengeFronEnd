import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public http: HttpClient) { }


getNearShopService() {
  return this.http.get('http://localhost:8080/home');
}

likeShopService(shop) {
  return this.http.post('http://localhost:8080/like', shop);
}
}
