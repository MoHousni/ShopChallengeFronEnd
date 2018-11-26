import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home/home.service';
import { Shop } from '../classes/shop';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shops: any = [{ content: [] }];
  shop: Shop = null;

  constructor(public homeService: HomeService) { }

  ngOnInit() {
    this.getNearShops();
  }

  getNearShops() {
    this.homeService.getNearShopService().subscribe(data => {
      this.shops = data;
      console.log(data);
    },
    err => console.log(err)
  );
  }

  like(idS, index) {
    this.shop = this.shops.find( s => s.idShop === idS);
    this.shops.splice(index, 1);
    this.homeService.likeShopService(this.shop).subscribe( data => {
      console.log(data);
      $('#exampleModal').modal('show');
    },
      err => console.log(err)
  );
  }
}
