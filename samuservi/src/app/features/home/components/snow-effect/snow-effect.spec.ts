import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowEffectComponent } from './snow-effect';

describe('SnowEffectComponent', () => {
  let component: SnowEffectComponent;
  let fixture: ComponentFixture<SnowEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnowEffectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SnowEffectComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
