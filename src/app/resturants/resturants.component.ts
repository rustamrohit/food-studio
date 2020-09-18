import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';

import { ResturantsService } from './resturants.service';
import { Resturant } from './resturant.utils';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-resturants',
  templateUrl: './resturants.component.html',
  styleUrls: ['./resturants.component.scss']
})
export class ResturantsComponent implements OnInit {

  public resturants$: Observable<Resturant[]>;

  constructor(
    private readonly resturantsService: ResturantsService
  ) { }

  public ngOnInit(): void {
    this.resturants$ = this.resturantsService.getResturants().pipe(
      publishReplay(1),
      refCount()
    );
  }

  public formatAddress(address: string, postalCode: string, city: string): string {
    return [
      `${address},`,
      postalCode,
      city
    ].filter((part) => !!part).join(' ');
  }

  public formatCategories(category: string[]): string {
    return category.filter((part) => !!part).join(' | ');
  }

  public getGoogleMapUrl(latitude: string, longitude: string): string {
    return `${environment.urls.googleMapUrl}${latitude},${longitude}`;
  }
}
