import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
   cartList =new Map();
   wishList =new Map();
   cartCount =0;
   wishCount=0;
   totalAmount=0;
   cartDetails=[this.cartList,this.cartCount] ;
   wishDetails=[this.wishList,this.wishCount] ;
  private messageSource = new BehaviorSubject('LoggedOut');
  currentMessage = this.messageSource.asObservable();
 
  private cartItem = new BehaviorSubject(this.cartDetails);
  currentItem = this.cartItem.asObservable(); 

  private wishListItem = new BehaviorSubject(this.wishDetails);
  currentwishList = this.wishListItem.asObservable(); 

  constructor() { }
  getTotalAmount(cartitem:any){
    this.totalAmount=0;
    for (let entry of cartitem.entries()) {
      this.totalAmount=this.totalAmount+entry[0].Price*entry[1];
        // console.log(this.totalAmount);
  }
  return this.totalAmount;
  
  }

  changeMessage(username: string) {
    this.messageSource.next(username) 
  }

  AddtoCart(cartitem:any){
    for (let value of this.cartList.values()) {
      this.cartCount=this.cartCount+value;
  }
        this.cartDetails=[this.cartList,this.cartCount];
   
         this.cartCount=0;
    this.cartItem.next(this.cartDetails);
  }
  AddtoWishlist(wishListItem:any){
    for (let value of this.wishList.values()) {
      this.wishCount=this.wishCount+value;
  }
        this.wishDetails=[this.wishList,this.wishCount];
      
         this.wishCount=0;
    this.wishListItem.next(this.wishDetails);
  }

}