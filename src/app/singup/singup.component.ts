import { Component, OnInit } from '@angular/core';
import { SingupService } from '../services/singup/singup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  user = {'email': '', 'fullName': '', 'password': '', 'ville': '' };
  re_password;
  cities: any = [{ content: [] }];
  constructor(public singupService: SingupService, public router: Router) { }

  ngOnInit() {
    this.getAllCities();
  }

  singUp() {
      this.singupService.singUpService(this.user).subscribe( data => {
        this.user = data;
        this.router.navigateByUrl('/');
      },
    err => console.log(err));
  }

  getAllCities() {
     this.singupService.getAllCitiesService().subscribe(data => {
      this.cities = data;
    },
    err => console.log('error')
  );
  }

}
