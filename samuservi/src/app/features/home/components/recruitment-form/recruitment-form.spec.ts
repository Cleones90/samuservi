import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentFormComponent } from './recruitment-form';

describe('RecruitmentFormComponent', () => {
  let component: RecruitmentFormComponent;
  let fixture: ComponentFixture<RecruitmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitmentFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecruitmentFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
