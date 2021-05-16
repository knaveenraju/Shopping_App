import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
   cartList =new Set();
   wishList =new Set();
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
   
    this.cartList.add(cartitem);

    this.cartItem.next(this.cartList);
    //console.log(this.cartList)
     
  }

  AddtoWishlist(wishListItem:any){
   
    this.wishList.add(wishListItem);
    
    this.wishListItem.next(this.wishList);
     
  }

}