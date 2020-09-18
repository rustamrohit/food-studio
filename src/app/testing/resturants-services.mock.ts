import { Observable, of } from 'rxjs';

import { Resturant } from '../resturants/resturant.utils';
import { ResturantsService } from '../resturants/resturants.service';

export const MOCKED_RESTURANTS_RAW_RESPONSE: Resturant[] = [
  {
    address: 'Binnenrotte 105',
    averageRating: 3.9166666666666665,
    categories: [
      'Restaurant'
    ],
    city: 'Rotterdam',
    cuisines: [
      'Fish'
    ],
    latitude: '51.92254',
    longitude: '4.48470',
    name: 'The Fish Market',
    phones: [
      '0103130947'
    ],
    postalCode: '3011HB',
    websites: [
      'http://www.thefishmarket-rotterdam.nl'
    ]
  }
];

export const MOCKED_RESTURANTS_RESPONSE: Resturant[] = [
  {
    address: 'Binnenrotte 105',
    averageRating: 3.9166666666666665,
    categories: [
      'Restaurant'
    ],
    city: 'Rotterdam',
    cuisines: [
      'Fish'
    ],
    latitude: '51.92254',
    longitude: '4.48470',
    name: 'The Fish Market',
    phones: [
      '0103130947'
    ],
    postalCode: '3011HB',
    websites: [
      'http://www.thefishmarket-rotterdam.nl'
    ]
  },
  {
    address: 'Mariniersweg 18',
    averageRating: 3.0555555555555554,
    categories: [
      'Restaurant',
      'Curry order takeaway food'
    ],
    city: 'Rotterdam',
    cuisines: [
      'Indian'
    ],
    latitude: '51.92386',
    longitude: '4.48922',
    name: 'Taj Mahal',
    phones: [
      '0104120812'
    ],
    postalCode: '3011NN',
    websites: [
      'http://www.tajmahal-rotterdam.nl'
    ]
  }
];

export const mockResturantsServiceFactory: () => Partial<ResturantsService> = () => ({
  getResturants(): Observable<Resturant[]> {
    return of(MOCKED_RESTURANTS_RESPONSE);
  }
});
