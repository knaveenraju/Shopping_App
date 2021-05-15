import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private messageSource = new BehaviorSubject('LoggedOut');
  currentMessage = this.messageSource.asObservable();
 
  // private cartItem = new BehaviorSubject('ss');
  // currentItem = this.cartItem.asObservable(); 

  constructor() { }

  changeMessage(username: string) {
    this.messageSource.next(username)
  }

  // AddtoCart(cartitem:any){
   
  //   this.cartItem.next(cartitem);
   
  
  // }

}