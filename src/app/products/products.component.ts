import { Component, OnChanges, OnInit } from '@angular/core';
import { ImagesService } from '../service/images.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnChanges,OnInit{

  images:any[];    
  filterBy?: string = 'all'     
 allImages:any[] = [];  

   constructor(private imageService: ImagesService,  private route :ActivatedRoute , private router :Router) {    
    this.allImages = this.imageService.getImages();    
  }    
  ngOnChanges() {    
    this.allImages = this.imageService.getImages();    
  }   
 
  ngDoCheck(){
    this.filterBy=this.route.snapshot.paramMap.get('category');
    //console.log(this.filterBy +"docheck");
  }
  
  ngOnInit(): void {
    //    this.filterBy=this.route.snapshot.paramMap.get('category');
    // console.log(this.filterBy);
  }
} 