import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated = false;
  error = false;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  authenticate(credentials, callback) {

    const token = btoa(credentials.email + ':' + credentials.password);
    this.cookieService.set('token', token);

  this.http.get('http://localhost:8080/user').subscribe(response => {
    console.log(response);
      if (response['name']) {
          this.authenticated = true;
      } else {
          this.authenticated = false;
      }
      return callback && callback();
  },
err => { this.error = true; }
);
  }


  isAuthenticated() {
    return this.authenticated;
  }
}
