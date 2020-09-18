import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResturantsComponent } from './resturants.component';

const routes: Routes = [
  {
    path: '',
    component: ResturantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResturantsRoutingModule { }
