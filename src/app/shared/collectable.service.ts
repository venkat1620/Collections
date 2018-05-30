import { Injectable } from '@angular/core';
import { Collectable } from './collectable.models';
import { CollectableData } from './collectable-data';

@Injectable({
  providedIn: 'root'
})
export class CollectableService {
  constructor() { }

  private collectables: Collectable[] = CollectableData.slice(0);

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
