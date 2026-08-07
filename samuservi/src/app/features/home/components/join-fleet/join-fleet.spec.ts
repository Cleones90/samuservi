import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinFleetComponent } from './join-fleet';

describe('JoinFleetComponent', () => {
  let component: JoinFleetComponent;
  let fixture: ComponentFixture<JoinFleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinFleetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JoinFleetComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
