import { Router ,ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataserviceService } from './service/dataservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'shopping';
  cat:any;
  searchForm : FormGroup;
  username:string;
    wishlist =0;
  cart=0;

  cartItem = new Set();
  wishListItem = new Set();
  wishListItemM= new Map();
  constructor(private formBuilder: FormBuilder,private route :ActivatedRoute , private router: Router,
    private data:  DataserviceService,){} 
  
    searchValue='';
  onSearch(){
    
 this.router.navigate(['/products',this.searchValue]);
 //console.log(this.searchValue);
  }

  logOut(){
    this.data.changeMessage('LoggedOut');
  }

ngDoCheck(){
  this.data.currentItem.subscribe(cartItem => this.cartItem = cartItem);
    this.cart=this.cartItem.size;


    if(this.username=='LoggedOut'){
this.wishlist=0;
    }
else{
  this.data.currentwishList.subscribe(wishListItem => this.wishListItem = wishListItem);
  this.wishlist=this.wishListItem.size;

}
}
 ngOnInit() {
    this.data.currentMessage.subscribe(username => this.username = username)
  }
 

}
 