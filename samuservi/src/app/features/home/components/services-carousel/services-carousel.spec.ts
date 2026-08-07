import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCarouselComponent } from './services-carousel';

describe('ServicesCarouselComponent', () => {
  let component: ServicesCarouselComponent;
  let fixture: ComponentFixture<ServicesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesCarouselComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
