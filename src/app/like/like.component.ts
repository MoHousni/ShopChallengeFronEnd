import { Component, OnInit } from '@angular/core';
import { LikeService } from '../services/like/like.service';
import { Shop } from '../classes/shop';

declare let $: any;

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  liked: any = [{ content: [] }];
  shop: Shop;
  constructor(public likedService: LikeService) { }

  ngOnInit() {
    this.getShopsLiked();
  }

  getShopsLiked() {
    this.likedService.getLikedShopService().subscribe(data => {
      this.liked = data;
    },
      err => console.log(err)
 );
  }

  remove(id, i) {
    this.likedService.removeLikedShopService(id).subscribe( data => {
      console.log(data);
      $('#exampleModal').modal('show');
      this.liked.splice(i, 1);
    },
      err => console.log(err)
  );
  }
}
