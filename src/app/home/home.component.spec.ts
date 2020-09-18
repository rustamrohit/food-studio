import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppModule } from '../app.module';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let root: Element;
  let router: Router;
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule.withRoutes([])
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    router = fixture.debugElement.injector.get(Router);
    component = fixture.componentInstance;
    root = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should route to resturants component on click of view button', async () => {
    spyOn(router, 'navigate');
    const nextButton = root.querySelector('.view-button') as HTMLButtonElement;
    nextButton.click();
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith([ '/resturants' ]);
  });
});
