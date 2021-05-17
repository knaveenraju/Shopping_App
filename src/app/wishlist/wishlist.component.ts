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
   isWishlistEmpty=true;
  constructor(private data : DataserviceService) { }

  ngDoCheck(){
 
    if(this.wishListItem.size==0){
      this.isWishlistEmpty=true;
    }
    else{
      this.isWishlistEmpty=false;
    }
   
  }

  ngOnInit(): void {

    this.data.currentMessage.subscribe(username => this.username=username)
    this.data.currentwishList.subscribe(wishListItem => this.wishListItem = wishListItem);
  
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
 