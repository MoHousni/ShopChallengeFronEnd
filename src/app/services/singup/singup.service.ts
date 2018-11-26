import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  constructor(public http: Http) { }

  getAllCitiesService() {
    return this.http.get('http://localhost:8080/cities').pipe(map((response: any) => response.json()));
  }

  singUpService(user) {
    return this.http.post('http://localhost:8080/singup', user).pipe(
      map((response: any) => response.json())
    );
  }
}
