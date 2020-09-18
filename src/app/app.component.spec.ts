import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let root: Element;
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule.withRoutes([])
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    router = fixture.debugElement.injector.get(Router);
    root = fixture.nativeElement;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Food Studio'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Food Studio');
  });

  it('should route to home component on click of mat-toolbar home icon', async () => {
    spyOn(router, 'navigate');
    const nextButton = root.querySelector('mat-icon') as HTMLButtonElement;
    nextButton.click();
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith([ '/home' ]);
  });

});
