import { HttpClient } from '@angular/common/http';
import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ResturantsService } from './resturants.service';
import { MOCKED_RESTURANTS_RAW_RESPONSE } from '../testing/resturants-services.mock';

describe('ResturantsService', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let resturantsService: ResturantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ResturantsService
      ]
    });
    resturantsService = TestBed.inject(ResturantsService);
  });

  beforeEach(inject([ResturantsService], (injectedResturantsService: ResturantsService) => {
    resturantsService = injectedResturantsService;
  }));

  beforeEach(inject([HttpTestingController], (injected: HttpTestingController) => httpMock = injected));
  beforeEach(inject([HttpClient], (injected: HttpClient) => httpClient = injected));

  afterEach(() => httpMock.verify());

  it('fetch the resturants', async(() => {
    resturantsService.getResturants()
      .subscribe((resturants) => {
        expect(resturants[0].name).toBe(MOCKED_RESTURANTS_RAW_RESPONSE[0].name);
      });
    httpMock
      .expectOne('http://localhost:5000/restaurants')
      .flush(MOCKED_RESTURANTS_RAW_RESPONSE);
  }));
});
