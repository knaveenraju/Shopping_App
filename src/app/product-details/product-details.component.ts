import { Component, OnChanges, OnInit,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

import { ImagesService } from '../service/images.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  details:any    
    SelectedID:any;
    price:any;
    cartItem = new Map();
     username;
     wishList = new Map();
     cartDetails=[];
     wishDetails=[];

     @Output() messageEvent = new EventEmitter<any>();
  constructor(private imageService: ImagesService,    
    private route: ActivatedRoute,private data: DataserviceService, private router : Router) { }    
 
    ngDoCheck(){
      this.data.currentItem.subscribe(cartDetails => this.cartDetails = cartDetails);
      this.cartItem=this.cartDetails[0];
      this.data.currentwishList.subscribe(wishDetails => this.wishDetails = wishDetails);
      this.wishList=this.wishDetails[0];
    }
  
  ngOnInit(){    
    this.details = this.imageService.getImage(    
      this.route.snapshot.params['id']    
 
    )   
    this.SelectedID= this.route.snapshot.params['id'];

    this.data.currentMessage.subscribe(username => this.username = username)
  
  }
  
  addtoCart(){
    if(this.cartItem.has(this.details)){
      alert("This product already added to your cart")
}
else{
 this.cartItem.set(this.details,1);  
 this.data.AddtoCart(this.cartItem);
} 
  }

  addtoWishList(){
    if (this.username=="LoggedOut"){
      alert("Login to add parts to your Wishlist")
      this.router.navigate(['/login']);
    }
    else{

    if(this.wishList.has(this.details)){
      alert("This product already added to your wishlist")
}
else{
 this.wishList.set(this.details,1);  
 this.data.AddtoWishlist(this.wishList);
} 
    }
  }
  



}