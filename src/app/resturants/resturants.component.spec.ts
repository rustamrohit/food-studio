import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { MOCKED_RESTURANTS_RESPONSE, mockResturantsServiceFactory } from '../testing/resturants-services.mock';
import { ResturantsComponent } from './resturants.component';
import { ResturantsModule } from './resturants.module';
import { ResturantsService } from './resturants.service';

describe('ResturantsComponent', () => {
  let root: Element;
  let resturantsService: ResturantsService;
  let fixture: ComponentFixture<ResturantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ResturantsModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        { provide: resturantsService, useFactory: mockResturantsServiceFactory }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantsComponent);
    root = fixture.nativeElement;
    resturantsService = fixture.debugElement.injector.get(ResturantsService);
  });

  it('should fetch the returant data and show the cards', () => {
    spyOn(resturantsService, 'getResturants').and.returnValue(of(MOCKED_RESTURANTS_RESPONSE));
    fixture.detectChanges();
    const cardElement = root.querySelector('mat-card');
    expect(cardElement).toBeTruthy();
    expect(resturantsService.getResturants).toHaveBeenCalled();
  });

  it('should display data in  cards', () => {
    spyOn(resturantsService, 'getResturants').and.returnValue(of(MOCKED_RESTURANTS_RESPONSE));
    fixture.detectChanges();
    const cardElement = root.querySelector('mat-card');
    expect(cardElement.textContent).toContain(MOCKED_RESTURANTS_RESPONSE[0].name);
  });
});
