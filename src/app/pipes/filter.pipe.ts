import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], args: any[]): any[] {
    const searchText = args[0];
    if (!items) { return []; }
    if (!searchText) { return items; }
    const filteredItems = items.filter( it => {
      return it.description.toLowerCase().includes(searchText.toLowerCase());
    });
     setTimeout(() => {
      args[1].count = filteredItems.length;
    });
    console.log(filteredItems.length);
    return filteredItems;
   }
}
