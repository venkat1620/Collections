import { Injectable } from '@angular/core';
import { Collectable } from './collectable.models';

@Injectable({
  providedIn: 'root'
})
export class CollectableService {
  private collectables: Collectable[] = [
    {
      'description': '16th Century Coins',
      'type': 'Antiques'
    },
    {
      'description': '2017 Top Music Albums',
      'type': 'Music CDs'
    },
    {
      'description': 'SkullCandy Headphones',
      'type': 'Accessories'
    },
    {
      'description': 'Master Web Application Development',
      'type': 'Book'
    },
    {
      'description': 'Transcend 1TB Portable drive',
      'type': 'Storage Devices'
    },
  ];

  private collectedItems: Collectable[] = [];

  addToCollection(item: Collectable, index: number) {
    this.collectedItems.push(item);
    this.collectables.splice(index, 1);
  }

  getCollectibles() {
    return this.collectables;
  }

  getCollections() {
    return this.collectedItems;
  }

  removeFromCollection(item: Collectable, index: number) {
    this.collectables.push(item);
    this.collectedItems.splice(index, 1);
  }
}
