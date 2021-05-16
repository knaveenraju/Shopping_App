import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
   username;
   wishListItem = new Map();
  constructor(private data : DataserviceService) { }

  ngOnInit(): void {

    this.data.currentMessage.subscribe(username => this.username=username)
    this.data.currentwishList.subscribe(wishListItem => this.wishListItem = wishListItem);
   console.log(this.wishListItem)
  }

  remove(item:any){
    if(this.wishListItem.has(item)){
      this.wishListItem.delete(item);
    }
  
  }
  
  moveTocart(item:any){
    console.log(item);
      this.data.AddtoCart(item);
      this.wishListItem.delete(item); 
  
  }
  

}
 