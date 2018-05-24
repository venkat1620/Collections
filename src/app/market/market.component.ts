import { Component, OnInit } from '@angular/core';

import { CollectableService } from '../shared/collectable.service';
import { Collectable } from '../shared/collectable.models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  collectables: Collectable[];
  isInMarketPage: boolean;
  location: Location;

  constructor(private collectableService: CollectableService, private locationService: Location) {
    this.location = this.locationService;
  }

  addToCollection(item: Collectable, index: number) {
    this.collectableService.addToCollection(item, index);
    this.isInMarketPage = this.location.path() === '/market';
  }

  ngOnInit() {
    this.collectables = this.collectableService.getCollectibles();
  }
}
