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
     cartList ;
  username;
  constructor(private imageService: ImagesService,    
    private route: ActivatedRoute,private data: DataserviceService , private router:Router) { }    
 
  ngOnInit(){    
    this.details = this.imageService.getImage(    
      this.route.snapshot.params['id']    
 
    )   

    this.data.currentMessage.subscribe(username => this.username = username)
   
    this.SelectedID= this.route.snapshot.params['id'];

  
  
  }
  
  addtoCart(){
     
    this.data.AddtoCart(this.details);

   
  }
  addtoWishList(){
    if (this.username=="LoggedOut"){
      alert("Login to add parts to your Wishlist")
      this.router.navigate(['/login']);
    }
    else{
    this.data.AddtoWishlist(this.details);
    }
  }


}