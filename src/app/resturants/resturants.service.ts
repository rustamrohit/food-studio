import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Resturant } from './resturant.utils';

@Injectable()
export class ResturantsService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getResturants(): Observable<Resturant[]> {
    return this.httpClient.get(environment.urls.getResturantsUrl)
      .pipe(map((result) => this.parseResturantsData(result)));
  }

  private parseResturantsData(data: any): Resturant[] {
    return data.map((employee: any) => this.parseResturant(employee));
   }

   private parseResturant(data: any): Resturant {
    return {
      name: data.name,
      address: data.address,
      city: data.city,
      postalCode: data.postalCode,
      averageRating: data.averageRating,
      phones: data.phones,
      websites: data.websites,
      categories: data.categories,
      cuisines: data.cuisines,
      latitude: data.latitude,
      longitude: data.longitude,
    };
   }
}
