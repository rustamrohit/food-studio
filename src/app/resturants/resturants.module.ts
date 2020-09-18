import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { ResturantsRoutingModule } from './resturants-routing.module';
import { ResturantsComponent } from './resturants.component';
import { ResturantsService } from './resturants.service';
import { StartRatingComponent } from '../start-rating/start-rating.component';

@NgModule({
  declarations: [
    ResturantsComponent,
    StartRatingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    GoogleMapsModule,

    MatChipsModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,

    ResturantsRoutingModule
  ],
  providers: [
    ResturantsService
  ]
})
export class ResturantsModule { }
