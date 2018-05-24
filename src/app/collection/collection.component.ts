import { Component, OnInit } from '@angular/core';
import { Collectable } from '../shared/collectable.models';
import { CollectableService } from '../shared/collectable.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styles: []
})
export class CollectionComponent implements OnInit {
  collectedItems: Collectable[];
  location: Location;
  isInCollectionPage: boolean;

  constructor(private collectibleService: CollectableService, private locationService: Location) {
    this.location = this.locationService;
   }

  ngOnInit() {
    this.collectedItems = this.collectibleService.getCollections();
    this.isInCollectionPage = this.location.path() === '/collection';
  }

  removeFromCollection(item: Collectable, index: number) {
    this.collectibleService.removeFromCollection(item, index);
  }
}
