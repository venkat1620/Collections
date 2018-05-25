import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import { SelectCollectionComponent } from './select-collection/select-collection.component';

const routes: Routes = [
  {path: 'market', component: MarketComponent},
  {path: 'collection', component: CollectionComponent},
  {path: 'dashboard', component: SelectCollectionComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];
@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
