import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterimages'
})
export class FilterimagesPipe implements PipeTransform {
  
  transform(items: any[], category: string): any {    
    if(category === 'all'){ return items } else    
    return items.filter(item =>{    
      return item.type === category;    
    });    
  }    
    
}