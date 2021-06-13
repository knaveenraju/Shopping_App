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
   
  
    if(this.filterBy.match('women') || this.filterBy.match('girl') || this.filterBy.match('ladies') ){
      this.filterBy="womens"
    }
   else if(this.filterBy.match('men') || this.filterBy.match('boy')  ){
      this.filterBy="mens"
    }
    else if(this.filterBy.match('kid') || this.filterBy.match('babies')  ){
      this.filterBy="kids"
    }
    else if(this.filterBy.match('all')   ){
      this.filterBy="all"
    }
    else{
     this.router.navigate(['/home']);
    }
  }
   
  ngOnInit(): void {
 
  }
}  