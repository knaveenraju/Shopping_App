import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit  {
   username;
   cartItem = new Map();
  wishListItem = new Map();
  cartDetails=[];
   isWishlistEmpty=true;
   wishDetails=[];
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
    this.data.currentItem.subscribe(cartDetails => this.cartDetails = cartDetails);
  this.cartItem=this.cartDetails[0];
    this.data.currentwishList.subscribe(wishDetails => this.wishDetails = wishDetails);
    this.wishListItem=this.wishDetails[0];
  
  }

  remove(item:any){
    if(this.wishListItem.has(item)){
      this.wishListItem.delete(item);
    }
    this.data.AddtoWishlist(this.wishListItem);
  }
  
  moveTocart(item:any){
   
   if (!this.cartItem.has(item)){
    this.cartItem.set(item,1);  
    this.data.AddtoCart(this.cartItem);
   }
   
     
      this.wishListItem.delete(item); 
      this.data.AddtoWishlist(this.wishListItem)
  }
  

}
 