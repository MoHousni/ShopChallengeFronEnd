import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(public http: HttpClient) { }

  getLikedShopService() {
    return this.http.get('http://localhost:8080/liked');
  }

  removeLikedShopService(id) {
    return this.http.delete('http://localhost:8080/remove/' + id);
  }
}
