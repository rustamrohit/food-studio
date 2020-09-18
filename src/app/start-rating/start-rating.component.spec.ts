import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsModule } from '../resturants/resturants.module';
import { StartRatingComponent } from './start-rating.component';

describe('StartRatingComponent', () => {
  let root: Element;
  let component: StartRatingComponent;
  let fixture: ComponentFixture<StartRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ResturantsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartRatingComponent);
    root = fixture.nativeElement;
    component = fixture.componentInstance;
  });

  it('should display full star if currentRating is 5', () => {
    component.currentRating = 5;
    fixture.detectChanges();
    const fullStarIconElement = root.querySelectorAll('#fullStarIcon');
    const halfStarIconElement = root.querySelectorAll('#halfStarIcon');
    const emptyStarIconElement = root.querySelectorAll('#emptyStarIcon');
    expect(fullStarIconElement.length).toBe(5);
    expect(halfStarIconElement.length).toBe(0);
    expect(emptyStarIconElement.length).toBe(0);
  });

  it('should display all 5 empty star if currentRating is 0', () => {
    component.currentRating = 0;
    fixture.detectChanges();
    const fullStarIconElement = root.querySelectorAll('#fullStarIcon');
    const halfStarIconElement = root.querySelectorAll('#halfStarIcon');
    const emptyStarIconElement = root.querySelectorAll('#emptyStarIcon');
    expect(fullStarIconElement.length).toBe(0);
    expect(halfStarIconElement.length).toBe(0);
    expect(emptyStarIconElement.length).toBe(5);
  });

  it('should display all 1 half star 3 full star and 1 empty star if currentRating is 3.7', () => {
    component.currentRating = 3.7;
    fixture.detectChanges();
    const fullStarIconElement = root.querySelectorAll('#fullStarIcon');
    const halfStarIconElement = root.querySelectorAll('#halfStarIcon');
    const emptyStarIconElement = root.querySelectorAll('#emptyStarIcon');
    expect(fullStarIconElement.length).toBe(3);
    expect(halfStarIconElement.length).toBe(1);
    expect(emptyStarIconElement.length).toBe(1);
  });
});
