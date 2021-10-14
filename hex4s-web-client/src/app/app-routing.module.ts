import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KingdomComponent } from './kingdom/kingdom.component';
import { WorldMapComponent } from './world-map/world-map.component';

const routes: Routes = [
  { path: 'world-map', component: WorldMapComponent },
  { path: 'kingdom/:id', component: KingdomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
