import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
   cartList =new Map();
   wishList =new Map();
  private messageSource = new BehaviorSubject('LoggedOut');
  currentMessage = this.messageSource.asObservable();
 
  private cartItem = new BehaviorSubject(this.cartList);
  currentItem = this.cartItem.asObservable(); 

  private wishListItem = new BehaviorSubject(this.wishList);
  currentwishList = this.wishListItem.asObservable(); 

  constructor() { }

  changeMessage(username: string) {
    this.messageSource.next(username) 
  }

  AddtoCart(cartitem:any){
   
    this.cartList.set(cartitem,1);

    this.cartItem.next(this.cartList);
    //console.log(this.cartList)
     
  }

  AddtoWishlist(wishListItem:any){
   
    this.wishList.set(wishListItem,1);
    
    this.wishListItem.next(this.wishList);
     
  }

}