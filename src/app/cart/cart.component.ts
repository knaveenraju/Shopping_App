import { NotificationService } from './../service/notification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataserviceService } from '../service/dataservice.service';
import { AuthService } from '../login/auth.service';
import { Subscription } from 'rxjs';

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
  cartDetails=[];
  wishDetails=[];
  count:any;
 
  totalAmount=0;
  items=0;
  user:any;
  private usersub: Subscription;
  isUserAuthenticated=false;
  constructor( private data : DataserviceService, private notification:NotificationService,
    private router : Router,private LoginService : AuthService){}

remove(item:any){
  if(this.cartItem.has(item)){
    this.cartItem.delete(item);
  }
  this.data.AddtoCart(this.cartItem);
}

add(item:any){
   if(this.cartItem.has(item)){
    this.count=this.cartItem.get(item);
    // this.cartItem.delete(item);
     this.cartItem.set(item,this.count+1)
    
}
  this.data.AddtoCart(this.cartItem);
}

sub(item:any){
  this.count=this.cartItem.get(item);
  if(this.count-1==0){
    this.cartItem.delete(item)
  }
  else{
  this.cartItem.set(item,this.count-1)
}
this.data.AddtoCart(this.cartItem);

}

moveToWishlist(item:any){
  console.log(this.isUserAuthenticated);
  // if (this.username=="LoggedOut"){
    if (this.isUserAuthenticated==false){
    this.notification.showInfo("","Login to add parts to your Wishlist");
    this.router.navigate(['/login']);
  }
  else{
    this.wishListItem.set(item,1);  
  
    this.data.AddtoWishlist(this.wishListItem);
    this.cartItem.delete(item); 
    this.data.AddtoCart(this.cartItem);
  }
}




ngDoCheck(){
  this.data.currentItem.subscribe(cartDetails => this.cartDetails = cartDetails);
  this.cartItem=this.cartDetails[0];
  this.items=this.cartDetails[1];
  this.data.currentwishList.subscribe(wishDetails => this.wishDetails = wishDetails);
  this.wishListItem=this.wishDetails[0];
  
  if(this.cartItem.size==0){
    this.isCartEmpty=true;
  }
  else{
    this.isCartEmpty=false;
  }

  this.totalAmount=this.data.getTotalAmount(this.cartItem);
  console.log(this.totalAmount)
 
}

  ngOnInit(): void {

    this.usersub=this.LoginService.user.subscribe(user => {
      this.isUserAuthenticated = !user ? false : true; 
     this.user=user;});
     console.log(this.isUserAuthenticated);
    
    // this.data.currentMessage.subscribe(username => this.username=username)
  
  //  console.log(this.cartItem)
    
}
}
