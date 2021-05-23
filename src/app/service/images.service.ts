import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  allImages = [];    
    
    getImages() {    
        return this.allImages = Imagesdetails.slice(0);    
    }     
    
    getImage(id: number) {    
        return Imagesdetails.slice(0).find(Images => Images.id == id)    
    }    

 
}    
const Imagesdetails = [    
    { "id": 1, "type": "mens", "Price":"1000", "url": "assets/images/brands/wrogn.jpg" },    
    { "id": 2, "type": "mens", "Price":"2000","url": "assets/images/brands/brand4.jpg" },    
    { "id": 3, "type": "womens","Price":"1500", "url": "assets/images/brands/brand2.jpg" },    
    { "id": 4, "type": "womens","Price":"800", "url": "assets/images/brands/brand7.jpeg" },    
    { "id": 5, "type": "kids", "Price":"600","url": "assets/images/categories/cat10.jpg" },    
    { "id": 6, "type": "accessories", "Price":"4000","url": "assets/images/accessories/acc1.jpg" },    
 
    
]   

