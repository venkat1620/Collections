import { Injectable } from '@angular/core';
import { Collectable } from './collectable.models';

@Injectable({
  providedIn: 'root'
})
export class CollectableService {
  private collectables: Collectable[] = [
    {
      'description': 'Wedding Album',
      'type': 'photos'
    },
    {
      'description': 'My fav Songs',
      'type': 'Mp3 files'
    },
    {
      'description': 'Uma fav Songs',
      'type': 'Mp3 files'
    },
    {
      'description': 'How to Cook',
      'type': 'Book'
    },
    {
      'description': 'How to Code',
      'type': 'Book'
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
