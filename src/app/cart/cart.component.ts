import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  username;
  isCartEmpty=true;
  cartItem = new Map();
  wishListItem = new Map();
  count:any;
  constructor( private data : DataserviceService, private router : Router){}

remove(item:any){
  if(this.cartItem.has(item)){
    this.cartItem.delete(item);
  }

}

add(item:any){
  this.count=this.cartItem.get(item);
  this.cartItem.set(item,this.count+1)
}

sub(item:any){
  this.count=this.cartItem.get(item);
  if(this.count-1==0){
    this.cartItem.delete(item)
  }
  else{
  this.cartItem.set(item,this.count-1)
}
}

moveToWishlist(item:any){
  console.log(item);
  if (this.username=="LoggedOut"){
    alert("Login to add parts to your Wishlist")
    this.router.navigate(['/login']);
  }
  else{
    this.data.AddtoWishlist(item);
    this.cartItem.delete(item); 
  }
}


updateQuantity(item:any ,num:any){
console.log(num)

}

ngDoCheck(){
 
  if(this.cartItem.size==0){
    this.isCartEmpty=true;
  }
  else{
    this.isCartEmpty=false;
  }
 
}

  ngOnInit(): void {
    this.data.currentMessage.subscribe(username => this.username=username)
    this.data.currentItem.subscribe(cartItem => this.cartItem = cartItem);
    this.data.currentwishList.subscribe(wishListItem => this.wishListItem = wishListItem);
    
  //  console.log(this.cartItem)
    
}
}
