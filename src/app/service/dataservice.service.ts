import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
<<<<<<< HEAD
   cartList =new Set();
  // wishList =new Set();
   wishListM = new Map();
   value=0;
   
  private messageSource = new BehaviorSubject('LoggedOut');
  currentMessage = this.messageSource.asObservable();
 
  private cartItem = new BehaviorSubject(this.cartList);
  currentItem = this.cartItem.asObservable(); 

  private wishListItemM = new BehaviorSubject(this.wishListM);
  currentwishList = this.wishListItemM.asObservable(); 
=======

  private messageSource = new BehaviorSubject('LoggedOut');
  currentMessage = this.messageSource.asObservable();
 
  // private cartItem = new BehaviorSubject('ss');
  // currentItem = this.cartItem.asObservable(); 
>>>>>>> parent of 1add896 (online shopping update 2)

  constructor() {  }

  changeMessage(username: string) {
    this.messageSource.next(username)
  }

  // AddtoCart(cartitem:any){
   
<<<<<<< HEAD
    this.cartList.add(cartitem);
       this.cartItem.next(this.cartList);
     
  }

  AddtoWishlist(wishListItem:any){
    if(this.wishListM.has(wishListItem)){
      this.value=this.wishListM.get(wishListItem);
      this.value++;

     this.wishListM.set(wishListItem,this.value)
     console.log(this.wishListM);
    }
    else{
   this.wishListM.set(wishListItem,1)
  }
  this.wishListItemM.next(this.wishListM)

    // this.wishList.add(wishListItem);
    // this.wishListItem.next(wishListItem);
    // this.wishListItem.next(this.wishList);
     
  }}
=======
  //   this.cartItem.next(cartitem);
   
  
  // }
>>>>>>> parent of 1add896 (online shopping update 2)

