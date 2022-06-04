import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTerm: any ): any {
    if(value?.length === 0){
      return value;
    }
    return value?.filter(function(search){
      return search.Country.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
    
  }

}
