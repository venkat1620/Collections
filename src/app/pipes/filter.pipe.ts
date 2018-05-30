import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], args: any[]): any[] {
    const searchText = args[0];
    const collectType = (args[2] || []).join();
    let filteredItems = null;
    if (!items) { return []; }
    if (!searchText && !collectType.length) { return items; }
    if (searchText) {
      filteredItems = items.filter( it => {
        return it.description.toLowerCase().includes(searchText.toLowerCase());
      });
    }
    if (collectType.length) {
      filteredItems = (filteredItems || items).filter( it => {
        return collectType.toLowerCase().includes(it.type.toLowerCase());
      });
    }
    setTimeout(() => {
      args[1].count = filteredItems.length;
    });
    return filteredItems;
   }
}
