import { Component, OnChanges, OnInit,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
     cartList ;
  
  constructor(private imageService: ImagesService,    
    private route: ActivatedRoute,private data: DataserviceService) { }    
 
  ngOnInit(){    
    this.details = this.imageService.getImage(    
      this.route.snapshot.params['id']    
 
    )   
    this.SelectedID= this.route.snapshot.params['id'];

  
  
  }
  
  addtoCart(){
    this.cartList = new Set();
    console.log(this.details);
    
    this.cartList.add(this.details);
   
    // this.data.AddtoCart(this.details);
    console.log(this.cartList);
   
  }
<<<<<<< HEAD
  addtoWishList(){
    if (this.username=="LoggedOut"){
      alert("Login to add parts to your Wishlist")
      this.router.navigate(['/login']);
    }
    else{
    this.data.AddtoWishlist(this.details);
    }
  }
=======
  wishlist(){}
>>>>>>> parent of 1add896 (online shopping update 2)


}