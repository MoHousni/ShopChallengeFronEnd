import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ShopChallenge';
  constructor(private router: Router, private login: LoginService) {}
  ngOnInit() {
    console.log(this.login.authenticated);
    if (this.login.isAuthenticated()) {
        this.router.navigateByUrl('/login');
    } else { console.log(this.login.authenticated); }
  }
}
