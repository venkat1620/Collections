import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import { CollectableService } from '../shared/collectable.service';
import { Collectable, Counter } from '../shared/collectable.models';
import { Location } from '@angular/common';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  collectables: Collectable[];
  isInMarketPage: boolean;
  location: Location;
  filterValue: string;
  filteredCounter: Counter;
  collectableTypeList: string[];
  collectableTypeDd: FormControl;

  constructor(private collectableService: CollectableService, private locationService: Location ) {
    this.location = this.locationService;
    this.collectableTypeDd = new FormControl();
  }

  addToCollection(item: Collectable, index: number) {
    this.collectableService.addToCollection(item, index);
  }

  ngOnInit() {
    this.collectables = this.collectableService.getCollectibles();
    this.isInMarketPage = this.location.path() === '/market';
    this.filteredCounter = { count: 0 };
    this.collectableTypeList = [];
    this.populateCollectableTypeDd(this.collectables);
  }
  populateCollectableTypeDd(collectables: Collectable[]) {
    collectables.forEach((collectable) => {
      this.collectableTypeList.push(collectable.type);
    });
  }
}
